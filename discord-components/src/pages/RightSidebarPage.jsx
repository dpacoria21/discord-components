import React from 'react'
import { groups } from '../data/groups'
import { UserConnected } from '../components/UserConnected'

export const RightSidebarPage = () => {



    return (
        <section className='flex justify-end bg-zinc-700 h-screen'>
            <div className='flex gap-1 flex-col h-full bg-zinc-800 w-fit px-4 py-4'>
                {
                    groups.map((group) => (
                        <UserConnected key={group.img} group={group}/>
                    ))
                }
            </div>
        </section>
    )
}
