import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes'
import AuthProviders from './providers/AuthProviders'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
    <div className='max-w-7xl mx-auto'>
    <RouterProvider router={router} />
    </div>
    </AuthProviders>
  </StrictMode>,
)
