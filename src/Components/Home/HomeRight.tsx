import React from 'react'
import { Link } from 'react-router-dom'
import visa from '../../images/visa.webp'
import fill from '../../images/fill.png';
import clock from '../../images/clock.png';
import pay from '../../images/pay.png'
import app from '../../images/app.png';
import app_store from '../../images/app_store.png';
import google_play from '../../images/google_play.png';


function HomeRight() {
  return (
    <div className='w-full sm:w-[40%] lg:w-[35%] text-center text-zinc-500 px-5 mt-10 sm:mt-0'>
        <img className='w-[73%] m-auto mb-8' src={visa} alt="visa" />
        <p className='mb-8'><a href="https://revvi.com/pdf/RFCL_202304RE1_3.pdf">**See Rates, Fees, Costs, and Limitations</a> page for additional details.</p>

        <p>Have a checking account and looking for a real VISA® credit card that doesn't require perfect history? Revvi was designed for you! The application is quick and easy. Apply now to get a response in seconds!</p>

        <Link to='/' className='text-[2rem] lg:text-[2.5rem] block text-black font-medium my-8'>GET A <span className='text-red-500'>REVVI CARD</span> <span className='block'>AND EARN</span><span className='text-red-500'>1% CASH BACK </span>REWARDS<span className='text-red-500'>^^</span>! <span className='block text-base'>CLICK TO LEARN MORE</span></Link>

        <div className='text-zinc-800'>
            <div className='mb-9'>
                <img className='w-[70px] m-auto' src={fill} alt="fill" />
                <h5 className='text-black'>FILL OUT APPLICATION</h5>
                <p>Applying is quick & easy with our secure online application.</p>
            </div>

            <div className='mb-9'>
                <img className='w-[70px] m-auto' src={clock} alt="clock" />
                <h5 className='text-black'>GET YOUR CREDIT DECISION</h5>
                <p>Review the <a className='text-black decoration-black underline' href=''>terms and conditions</a>, submit your application & get your credit decision!</p>
            </div>

            <div className='mb-9'>
                <img className='w-[70px] m-auto' src={pay} alt="pay" />
                <h5 className='text-black'>PAY $95 PROGRAM FEE**</h5>
                <p>If approved, pay the $95 Program Fee** to open your account.</p>
            </div>

            <div className='mb-9'>
                <img className='w-[70px] m-auto' src={app} alt="app" />
                <h5 className='text-black'>DOWNLOAD OUR MOBILE APP</h5>
                <p>Download our mobile app for either iOS or Android* for quick access to your account.</p>
            </div>

            <div className='flex justify-between w-9/12 m-auto'>
                <a className='w-[40%] block' href="">
                    <img className='w-full' src={app_store} alt="store" />
                </a>
                <a className='w-[40%] block' href="">
                    <img className='w-full' src={google_play} alt="store" />
                </a>
            </div>

            <div className='text-xs my-3'>
                <p>*Google Play and the Google Play logo are trademarks of Google LLC.</p>
                <p>App Store is a service mark of Apple Inc.</p>
            </div>
        </div>
    </div>
  )
}

export default HomeRight