import { createBrowserRouter } from 'react-router-dom';
import { CrmdProvider } from '@/src/crmd/application/CrmdProvider.tsx';
import { CrmdPage } from '@/src/crmd/infrastructure/ui/CrmdPage.tsx';

export const router = createBrowserRouter([
  {
    path: '/*',
    element: (
      <CrmdProvider>
        <CrmdPage />
      </CrmdProvider>
    ),
  },
  {
    path: '/crmd',
    element: (
      <CrmdProvider>
        <CrmdPage />
      </CrmdProvider>
    ),
  },
]);
