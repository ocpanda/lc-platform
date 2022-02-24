import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from '@/pages/App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
    <div id="modal-root"></div>
  </React.StrictMode>,
  document.getElementById('root')
)
