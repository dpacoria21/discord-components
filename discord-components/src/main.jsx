import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { MainPage } from './pages/MainPage'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <React.StrictMode>
            <MainPage />
        </React.StrictMode>
    </BrowserRouter>    
)
