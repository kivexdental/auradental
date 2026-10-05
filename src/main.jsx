import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import KivexPreviewWrapper from './components/toolbar/KivexPreviewWrapper.jsx'
import './index.css'

// Detect if we are inside the device preview iframe or requested target mode directly
const searchParams = new URLSearchParams(window.location.search);
const isPreviewTarget = window.self !== window.top || searchParams.get('preview') === 'target';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {isPreviewTarget ? <App /> : <KivexPreviewWrapper />}
  </React.StrictMode>,
)
