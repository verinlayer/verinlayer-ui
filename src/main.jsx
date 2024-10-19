import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';

import Home from './pages/home';
import Dashboard from './pages/dashboard';
import { wagmiConfig } from './configs/wagmiConfigs';

import '@rainbow-me/rainbowkit/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/global.css';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

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
]);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
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
    </PersistGate>
  </Provider>
);
