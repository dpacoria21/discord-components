import React from 'react'

export const RoundedImage = ({group}) => {

    return (
        <>
        
            <div className='flex justify-center items-center relative'>
                <div className='group h-max flex items-center'>
                    <a href="#" className='relative w-14 h-14 '>
                        <div className='w-14 h-14 transition-all duration-300 group-hover:rounded-2xl ease-in-out rounded-[50px] bg-cover bg-center bg-no-repeat' style={{
                            backgroundImage: `url('${group.img}')`,
                        }}>
                        </div>
                        <p className='z-10 border-4 border-zinc-900 font-bold text-xs text-white absolute right-0 -bottom-1 bg-red-500 px-1 rounded-full'>
                            {group.messages}
                        </p>
                    </a>
                    <div className='flex items-center '>
                        <p className='absolute z-10 text-white hidden w-36 text-center left-24 bg-zinc-700 group-hover:block px-4 py-2 rounded-lg'>{group.description}</p>
                        <div className='absolute hidden border-8 border-transparent border-r-zinc-700 left-20 group-hover:block'></div>
                    </div>
                    <div className='absolute transition-all duration-300 ease-in-out w-3 h-3 rounded-3xl group-hover:h-4/6 pointer-events-none bg-slate-50 -left-1.5'></div>
                </div>
            </div>

            {
                group.img === 'img-1.jpg' ? (
                        <div className='flex flex-col items-center justify-center -translate-y-1'>
                            <hr className=' w-2/4 border-[1.75px] rounded-xl border-slate-600'/>
                        </div>) 
                    : 
                        ''
            }
        
        </>
    )
}
