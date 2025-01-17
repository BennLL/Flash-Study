import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { Amplify } from 'aws-amplify';
import config from './aws-exports.ts';
Amplify.configure(config);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App signOut={function (): void {
      throw new Error('Function not implemented.');
    } } />
  </React.StrictMode>,
)
