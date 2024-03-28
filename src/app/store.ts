import { sendMailApi } from '@/services/send-mail'
import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sendMailApi.middleware),
  // Adding the api middleware enables caching, invalidation, polling,
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [sendMailApi.reducerPath]: sendMailApi.reducer,
  },
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
