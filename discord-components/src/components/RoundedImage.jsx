import React from 'react'

export const RoundedImage = ({img}) => {
    console.log(img);
    return (
        <div className='flex justify-center items-center relative'>
            <div className='group h-max flex items-center'>
                <a href="#" className='w-14 h-14 transition-all duration-300 ease-in-out rounded-[50px] overflow-hidden group-hover:rounded-2xl'>
                    <div className='w-14 h-14 bg-cover bg-center bg-no-repeat' style={{
                        backgroundImage: `url('${img}')`,
                    }}>
                    </div>
                </a>
                <div className='absolute transition-all duration-300 ease-in-out w-3 h-3 rounded-3xl group-hover:h-4/6 bg-slate-50 -left-1.5'></div>
            </div>
        </div>
    )
}
