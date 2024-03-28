import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type Email = {
  message: string
  name: string
  subject: string
}

export const sendMailApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mern-app-rouge-beta.vercel.app/' }),
  endpoints: builder => ({
    sendEmail: builder.mutation<unknown, Email>({
      query: body => ({
        body,
        method: 'POST',
        url: `send-email`,
      }),
    }),
  }),
  reducerPath: 'sendMailApi',
})

export const { useSendEmailMutation } = sendMailApi
