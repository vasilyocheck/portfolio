import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Notification } from '@/components/notification/notification'
import { SectionTitle } from '@/components/section-title'
import { Email, useSendEmailMutation } from '@/services/send-mail'
import { theme } from '@/styles/theme'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { S } from './contact-styles'

const messageSchema = z.object({
  message: z.string().min(15, { message: 'Message must be 15 or more characters long' }),
  name: z.string().min(2, { message: 'Name must be 2 or more characters long' }),
  subject: z.string().min(3, { message: 'Subject must be 3 or more characters long' }),
})

export const Contact = () => {
  const [isSent, setIsSent] = useState<boolean>(false)
  const [sendEmail, { isLoading }] = useSendEmailMutation()

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<Email>({
    resolver: zodResolver(messageSchema),
  })
  const onSubmit: SubmitHandler<Email> = data =>
    sendEmail(data).then((res: any) => {
      if (res.error.data === 'Email sent successfully') {
        setIsSent(true)
        reset()
        setTimeout(() => {
          setIsSent(false)
        }, 3000)
      }
    })

  return (
    <S.Contact id={'contact'}>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Field placeholder={'name'} {...register('name')} />
          <S.Error>{errors.name && errors.name.message}</S.Error>
          <S.Field placeholder={'subject'} {...register('subject')} />
          <S.Error>{errors.subject && errors.subject.message}</S.Error>
          <S.Field as={'textarea'} placeholder={'your message here...'} {...register('message')} />
          <S.Error>
            {errors.message && errors.message.message}
            {isLoading && <Notification color={theme.colors.accent} text={'...sending...'} />}
            {isSent && (
              <Notification
                color={theme.colors.success}
                text={'Your message has been sent successfully. Thank you!'}
              />
            )}
          </S.Error>
          <Button disabled={Object.keys(errors).length > 0} type={'submit'}>
            Send message
          </Button>
        </S.Form>
      </Container>
    </S.Contact>
  )
}
