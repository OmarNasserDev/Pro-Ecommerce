import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import store from './Api-redux-toolkit/store.js'
import { Provider } from 'react-redux'

import './index.css'
import { createTheme, ThemeProvider } from '@mui/material'
import Header from './components/Header.jsx'

const theme = createTheme({})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Header />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
