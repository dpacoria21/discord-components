import React from 'react'
import { RoundedImage } from '../components/RoundedImage'

export const LeftSidebarPage = () => {
    const images = ['img-1.jpg', 'img-2.jpg', 'img-3.jpg', 'img-4.jpg', 'img-5.png', 'img-6.jpg', 'img-7.jpg']
    return (
        <div className='h-screen overflow-y-auto w-24 flex flex-col gap-2 py-2 bg-zinc-800'>
            {
                images.map((img) => (
                    <RoundedImage key={img} img={img}/>
                ))
            }
        </div>
    )
}
