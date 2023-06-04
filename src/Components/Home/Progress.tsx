import React from 'react'
import Step1 from '../../images/Step-1-Yellow.png';
import Step2 from '../../images/Step-2-Gray.png';

function Progress() {
  return (
    <div className='mb-4'>
        <h3 className='text-[18px] font-[500] sm:text-left text-center mb-2'>APPLY IN 2 EASY STEPS!</h3>
        <div className='flex w-fit sm:mx-0 mx-auto'>
            <div className='w-[50px] font-[500]'>
                <img className='w-[50px]' src={Step1} alt="step1" />
                <p>Start Application</p>
            </div>
            <div className='w-[150px] h-[6px] bg-[#b6b3b3] mt-[19px]'></div>
            <div className='w-[50px]'>
                <img className='w-[50px]' src={Step2} alt="step1" />
                <p className='w-[230%] -ml-9 text-[#858282]'>Pay Program Fee</p>
            </div>
        </div>
    </div>
  )
}

export default Progress