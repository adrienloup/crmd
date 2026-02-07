import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { version } from '@/package.json';
import App from '@/src/app/App.tsx';

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

console.info(`[crmd] ${version} %c@jff`, 'padding: 1px 3px; background-color: #3b00ff; color: #fff;');
