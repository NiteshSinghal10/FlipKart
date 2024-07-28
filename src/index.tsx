import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProductContextProvider, ProductListProvider, AuthProvider } from './context';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import routes from './router';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProductListProvider>
      <ProductContextProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <RouterProvider router={routes} />
          </AuthProvider>
        </QueryClientProvider>
      </ProductContextProvider>
    </ProductListProvider>
  </React.StrictMode>
);

