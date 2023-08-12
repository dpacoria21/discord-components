import React from 'react'
import { Navbar } from '../components/Navbar'
import { AppRouter } from '../router/AppRouter'

export const MainPage = () => {
    return (
        <>
            <div className='flex flex-col h-screen'>
                <Navbar/>
                <AppRouter />
            </div>
        </>
    )
}
