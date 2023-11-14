import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Amplify } from 'aws-amplify';
import awsConfig from './aws-exports.js'
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsConfig);
console.log("++Amplify configure")

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
