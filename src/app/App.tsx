import { RouterProvider } from 'react-router-dom';
import { router } from '@/src/app/router.tsx';
import '@/src/app/App.scss';

export default function App() {
  return <RouterProvider router={router} />;
}
