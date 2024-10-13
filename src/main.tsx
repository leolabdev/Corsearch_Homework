import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/app/App.tsx';
import '@/app/styles/index.scss';
import {Providers} from '@/app/providers';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Providers>
          <App />
      </Providers>
  </StrictMode>,
)
