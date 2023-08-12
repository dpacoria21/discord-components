import React from 'react'

export const ModalDisplayPage = () => {
    return (
        <div className='flex justify-center items-center grow bg-zinc-700'>
            <div className='flex flex-col w-96 min-h-[580px] grow-0 bg-zinc-800 rounded-xl'>
                <div className='flex relative grow-0 h-16 bg-blue-900 rounded-tr-xl rounded-tl-xl'>
                    <div className='absolute flex items-center justify-center w-24 h-24 rounded-full top-4 left-5 bg-zinc-800'>
                        <img src={'img-3.png'} alt="gunter" className='w-20 h-20 rounded-full object-cover' />
                        <div className='bg-zinc-800 rounded-full right-1 bottom-1 absolute flex justify-center items-center h-7 w-7'>
                            <span className='group relative cursor-pointer w-4 h-4 flex justify-center bg-green-600 rounded-full z-10 right-0 bottom-0'>
                                <span className='absolute w-max h-max transition-all ease-in-out pointer-events-none opacity-0 group-hover:opacity-100 px-3 py-2 rounded-lg bg-neutral-900 -top-[47px] text-slate-300 font-semibold text-sm'>En línea</span>
                                <span className='absolute pointer-events-none transition-all ease-in-out opacity-0 group-hover:opacity-100 -top-[14.5px] border-8 border-transparent border-t-neutral-900'></span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col items-center'>
                    <div className='flex justify-end w-[90%] items-center h-20'>
                        <div className='bg-zinc-950/70 rounded-lg px-2 py-2 flex h-fit items-center'>
                            <p className='text-black font-extrabold text-base px-2 text-center bg-emerald-700 rounded-full'>#</p>
                        </div>
                    </div>
                    <div className='w-[90%] p-3 bg-zinc-950/70 rounded-lg flex flex-col gap-4'>

                        <div className=''>
                            <p className='text-slate-200 text-lg font-bold'>Timadula</p>
                            <p className='text-slate-200/90 text-sm font-semibold'>s4nt1ago_</p>
                        </div>

                        <hr className='border-slate-300/20 border-[1px] rounded-full'/>

                        <div className=''>
                            <p className='text-slate-200 text-sm font-bold'>SOBRE MÍ</p>
                            <p className='text-slate-200/80 text-xs font-semibold'>Soy pegalon</p>
                        </div>

                        <div className=''>
                            <p className='text-slate-200 text-sm font-bold'>MIEMBRO DESDE</p>
                            <div className='flex gap-2 h-8 items-center'>
                                <p className='text-slate-200/80 text-sm font-semibold'>20 jun 2020</p>
                                <p className='text-slate-200/80 text-sm font-semibold'>*</p>
                                <p className='text-slate-200/80 text-sm font-semibold'>4 mar 2022</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <p className='text-slate-200 text-sm font-bold'>ROL</p>
                            <div className='flex gap-2'>
                                <div className='flex items-center gap-1 cursor-pointer bg-slate-700/40 w-fit px-2 py-1 rounded-md'>
                                    <span className='w-3 h-3 rounded-full bg-blue-500'></span>
                                    <p className="text-slate-200/80 text-xs font-semibold">El pueblo</p>
                                </div>
                                <div className='flex items-center gap-1 cursor-pointer bg-slate-700/40 w-fit px-2 h-fit rounded-md'>
                                    <p className="text-slate-200/80 text-lg font-semibold">+</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <p className='text-slate-200 text-sm font-bold'>Nota</p>
                            <input className='text-slate-200/80 text-xs font-semibold border-0 bg-transparent outline-none p-1' placeholder='Haz click para añadir una nota...'></input>
                        </div>

                        <div className=''>
                            <input type="text" className='w-full h-9 rounded-sm border-2 text-slate-200/80 border-slate-700/40 outline-none bg-transparent px-3 py-2 text-sm' placeholder='Enviar mensaje a @Timadula'/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
