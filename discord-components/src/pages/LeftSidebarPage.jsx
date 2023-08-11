import React from 'react'
import { RoundedImage } from '../components/RoundedImage'
import { groups } from '../data/groups'

export const LeftSidebarPage = () => {
    // const images = ['img-1.jpg', 'img-2.jpg', 'img-3.jpg', 'img-4.jpg', 'img-5.png', 'img-6.jpg', 'img-7.jpg']
    return (
        <>
            <div className='flex'>

                <div className=' min-h-screen w-[80px] flex flex-col grow-0 gap-4 py-2 bg-zinc-900'>
                    {
                        groups.map((group) => (
                            <RoundedImage key={group.img} group={group}/>
                        ))
                    }
                </div>

                <div className='flex grow bg-zinc-800'>

                </div>


            </div>
         
        </>
        
    )
}
