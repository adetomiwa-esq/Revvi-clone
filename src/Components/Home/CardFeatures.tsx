import React, { useState } from 'react';
import Reward from '../../images/rewardIcon.png';
import Mobile from '../../images/phoneIcon.png';
import Card from '../../images/cardIcon.png';
import Flag from '../../images/flagIcon.png';
import Clock from '../../images/clockIcon.png';

function CardFeatures() {
  const [features, setFeatures] = useState([
    {imgSrc: Reward, paragraph: 'REVVI PAYMENT REWARDS'},
    {imgSrc: Mobile, paragraph: 'USER FRIENDLY MOBILE APP'},
    {imgSrc: Card, paragraph: 'ACCEPTED BY MERCHANTS AROSS U.S AND ONLINE'},
    {imgSrc: Flag, paragraph: 'MONTHLY REPORTS TO CREDIT BUREAUS'},
    {imgSrc: Clock, paragraph: 'FREE CREDIT MONITORING POWERED BY TRANSUNION'},
  ])

  const [current, setCurrent] = useState(3)
  return (
    <section className='mt-8'>
      <div className='w-fit mx-auto text-[36px] mb-6'>
        <h1>CARD FEATURES</h1>
        <div className='w-full h-1 bg-black rounded-md'></div>
      </div>

      <div className='flex xl:px-[8%] text-[13px] text-center text-zinc-600 relative'>

        {features.map((feat, index) => {
          return <div 
            className={`${current === 4 && index === 0 ? 'right-10 top-5' : 'left-[]'} ${current === index ? 'static mx-auto' : 'absolute'} ${current + 1 === index ? 'right-10 top-5' : 'left-[-2000%]'} ${current - 1 === index ? 'left-10 top-5' : 'left-[]'}  sm:w-1/5 px-2 sm:static`} key={index}>
              <img className={`${current !== index  ? 'w-[45px]' : 'w-[75px]'}  sm:w-[70px] mx-auto`} src={feat.imgSrc} alt="icon" />
              <p className={`${current !== index ? 'hidden sm:block' : 'block mt-4'}`}>{feat.paragraph}</p>
        </div>
        })}
      </div>

      <p className='px-[5%] my-16 text-zinc-600 text-[11px]'>^^1% cash back rewards provided on the amount of payments applied to your Credit Card. Rewards are earned and tracked as points and may be redeemed in the form of a statement credit. Your account must be in good standing at the time rewards are redeemed. Unredeemed reward points will be forfeited if your account is closed for any reason. Other terms, conditions, and limitations apply. See Revvi Rewards Program Terms & Conditions for details.</p>
    </section>
  )
}

export default CardFeatures