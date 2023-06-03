import React from 'react'
import Cards from '../../images/rewardleft.png';
import Percent from '../../images/PERCENT.png'


function TopSection() {
  return (
    <div className='flex flex-col md:flex-row px-4 md:justify-between pl-[15px] font-[100] text-zinc-700 text-center md:text-left mb-10 md:mb-0'>
        <div className='hidden md:block w-[40%] lg:w-2/6 border'>
            <img className='h-full' src={Cards} alt="cards" />
        </div>
        <div className='md:w-3/6'>
            <h1 className='text-[red] text-[26px] sm:text-[2.5rem] lg:text-[3.7rem] font-[700] mb-4'>REVVI REWARDS</h1>
            <h2 className='mb-4 text-[20px] font-[600] text-black'>Make Payments, Earn Rewards!</h2>
            <p>Imagine being rewarded for simply paying your bill each month. Revvi Rewards is the all-new program that rewards you for making payments on your account.</p>
            <img src={Percent} alt="percent-off" className='w-8/12 my-12 mx-auto md:mx-0'/>
            <p><span>Earn 1% cash back^^</span> on payments and easily redeem in our user-friendly mobile app. When your account is opened, you are automatically enrolled and start earning and the ability to redeem begins after your account has been open and active for 6 months.</p>
            <button className='border w-[90%] max-w-[300px] sm:max-w-none sm:w-[310px] rounded-[8px] text-white bg-[red] h-[76px] text-[1.6rem] mt-5'>APPLY NOW</button>
        </div>
    </div>
  )
}

export default TopSection