import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DataContextProvider } from './context/ApiContext.jsx'
import {Toaster} from "react-hot-toast";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Toaster/>
      <DataContextProvider>
        <App />
      </DataContextProvider>
  </StrictMode>
)
