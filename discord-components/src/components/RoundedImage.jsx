import React from 'react'

export const RoundedImage = ({img}) => {
    console.log(img);
    return (
        <div className='flex justify-center items-center'>
            <div className='group h-max flex items-center relative'>
                <a href="#" className='w-14 h-14 transition-all duration-300 ease-in-out rounded-[50px] overflow-hidden hover:rounded-3xl'>
                    <div className='hover:bg-slate-200/20 w-14 h-14 bg-cover bg-center bg-no-repeat' style={{
                        backgroundImage: `url('${img}')`,
                    }}>
                    </div>
                </a>
                <div className='absolute transition-all duration-300 w-3 h-3 rounded-3xl group-hover:h-4/6 bg-slate-50 -left-1.5'></div>
            </div>
        </div>
    )
}
