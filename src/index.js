import React from 'react'
import ReactDOM from 'react-dom/client'
// eslint-disable-next-line import/extensions
import App from './App.jsx'
import './App.scss'

const el = document.getElementById('app')

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.createRoot(el).render(<App />)
