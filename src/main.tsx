import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes.tsx'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.ts'
import { Toaster } from 'sonner'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster position='top-right' richColors />
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
        {/* <App /> */}
      </PersistGate>
    </Provider>
  </StrictMode>,
)
