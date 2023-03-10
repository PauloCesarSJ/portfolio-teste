import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import {HashRouter} from "react-router-dom"
import { queryClient } from './component/queryClient/queryClient';
import { QueryClientProvider } from 'react-query';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </HashRouter>
  </React.StrictMode>
);

