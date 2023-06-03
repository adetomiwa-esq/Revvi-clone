import React from 'react';
import AppStore from '../../images/app_store.png';
import PlayStore from '../../images/google_play.png';

function Download() {
  return (
    <section className='text-center px-4'>
        <h1 className='text-[27px] sm:text-[34px] lg:text-[64px] text-[#302e2e] font-[700]'>Already a Revvi Cardholder?</h1>
        <h2 className='text-[18px] sm:text-[20px] lg:text-[35px] mb-2'>Click below to download our Mobile App and Redeem your Rewards.</h2>
        <div className='flex items-center justify-center mb-3'>
            <img className='w-[40%] max-w-[140px] sm:max-w-none sm:w-40 mr-2 h-10 sm:h-12' src={AppStore} alt="app" />
            <img className='w-[40%] max-w-[140px] sm:max-w-none sm:w-40 ml-2 h-10 sm:h-12' src={PlayStore} alt="store" />
        </div>
        <p>*Google Play and the Google Play logo are trademarks of Google LLC. App Store is a service mark of Apple Inc.</p>
    </section>
  )
}

export default Download