import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { SectionTitle } from '@/components/SectionTitle'
import { Email, useSendEmailMutation } from '@/services/send-mail'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { S } from './Contact_Styles'

const messageSchema = z.object({
  message: z.string().min(15, { message: 'Message must be 15 or more characters long' }),
  name: z.string().min(2, { message: 'Name must be 2 or more characters long' }),
  subject: z.string().min(3, { message: 'Subject must be 3 or more characters long' }),
})

export const Contact = () => {
  const [sendEmail, { isLoading }] = useSendEmailMutation()

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<Email>({
    resolver: zodResolver(messageSchema),
  })
  const onSubmit: SubmitHandler<Email> = data => sendEmail(data).then(() => reset())

  return (
    <S.Contact id={'contact'}>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Field placeholder={'name'} {...register('name')} />
          <S.Error>
            {errors.name && errors.name.message}
            {isLoading && 'sending...'}
          </S.Error>
          <S.Field placeholder={'subject'} {...register('subject')} />
          <S.Error>{errors.subject && errors.subject.message}</S.Error>
          <S.Field as={'textarea'} placeholder={'your message here...'} {...register('message')} />
          <S.Error>{errors.message && errors.message.message}</S.Error>
          <Button disabled={Object.keys(errors).length > 0} type={'submit'}>
            Send message
          </Button>
        </S.Form>
      </Container>
    </S.Contact>
  )
}
