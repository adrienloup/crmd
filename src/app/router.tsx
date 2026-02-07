import { createBrowserRouter } from 'react-router-dom';
import { CrmdProvider } from '@/src/crmd/state/CrmdProvider.tsx';
import { CrmdPage } from '@/src/crmd/ui/CrmdPage.tsx';

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
