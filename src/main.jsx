import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { WagmiProvider } from 'wagmi'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'

import Home from './pages/home'
import Dashboard from './pages/dashboard'
import { wagmiConfig } from './configs/wagmiConfigs'

import '@rainbow-me/rainbowkit/styles.css'
import 'react-toastify/dist/ReactToastify.css'
import './assets/styles/global.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>Not Found</div>,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    errorElement: <div>Not Found</div>,
  },
])

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <RouterProvider router={router} />
          <ToastContainer closeButton={false} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>
)
