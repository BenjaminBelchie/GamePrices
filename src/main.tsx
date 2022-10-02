import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {HashRouter} from 'react-router-dom'
import {ThemeProvider, createTheme} from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: ['Inter', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'].join(',')
   }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <HashRouter>
      <App />
    </HashRouter>
  </ThemeProvider>
  
)
