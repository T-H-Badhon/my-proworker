import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/routes'
import { Toaster } from 'sonner'
import { Provider } from 'react-redux'
import { store } from './redux/store'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={Routes} />
      <Toaster richColors position='top-center' />
    </Provider>
  </React.StrictMode>
)
