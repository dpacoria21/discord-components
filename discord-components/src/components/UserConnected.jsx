export const UserConnected = ({group, isActiveFn}) => {

    return (
        
        
        <div className='flex relative cursor-pointer hover:bg-slate-300/20 px-3 py-2 rounded-md gap-3 items-center'>
            <div className='h-max relative'>
                <img className='h-10 w-10 object-cover rounded-full' src={group.img} alt={group.title} />
                <div className='bg-zinc-800 rounded-full right-0 -bottom-1 absolute flex justify-center items-center h-5 w-5'>
                    <span className='group relative cursor-pointer w-3 h-3 flex justify-center bg-green-600 rounded-full z-10 right-0 bottom-0'>
                        <span className='absolute w-max h-max transition-all ease-in-out pointer-events-none opacity-0 group-hover:opacity-100 px-3 py-2 rounded-lg bg-neutral-900 -top-[47px] text-slate-300 font-semibold text-sm'>{group.status}</span>
                        <span className='absolute pointer-events-none transition-all ease-in-out opacity-0 group-hover:opacity-100 -top-[14.5px] border-8 border-transparent border-t-neutral-900'></span>
                    </span>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='line-clamp-1 text-base font-sans font-semibold text-green-500'>{group.name}</p>
                <p className='line-clamp-1 text-xs tracking-wide font-sans font-normal text-slate-400'>{group.playing}</p>
            </div>

        </div>
        
    )
}
