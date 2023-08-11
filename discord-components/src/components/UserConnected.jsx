import React from 'react'

export const UserConnected = ({group}) => {
    return (
        <div className='flex gap-3 items-center'>
            <div className='h-max w-max relative'>
                <img className='h-12 w-12 object-cover rounded-full' src={group.img} alt={group.title} />
                <div className='bg-zinc-900 rounded-full right-0 bottom-0 absolute flex justify-center items-center h-5 w-5'>
                    <span className='group relative cursor-pointer w-3 h-3 flex justify-center bg-green-600 rounded-full z-10 right-0 bottom-0'>
                        <span className='absolute w-max h-max hidden group-hover:block px-3 py-2 rounded-lg bg-neutral-900 -top-[47px] text-slate-300 font-semibold text-sm'>{group.status}</span>
                        <span className='absolute hidden group-hover:block -top-[14.5px] border-8 border-transparent border-t-neutral-900'></span>
                    </span>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='line-clamp-1 text-md font-sans font-semibold text-green-500'>{group.name}</p>
                <p className='line-clamp-1 text-xs tracking-wide font-sans font-normal text-slate-400'>{group.playing}</p>
            </div>
        </div>
    )
}
