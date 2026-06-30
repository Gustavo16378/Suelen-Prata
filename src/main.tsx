import React from 'react'
import { ViteReactSSG } from 'vite-react-ssg/single-page'
import App from './App'
import './index.css'

// SSG single-page: o vite-react-ssg pré-renderiza a App em HTML estático no
// build (e hidrata no cliente). Visualmente idêntico ao createRoot anterior.
export const createRoot = ViteReactSSG(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
