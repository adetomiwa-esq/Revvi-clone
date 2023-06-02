import React from 'react';
import freecard1 from '../../images/freecard1.png';
import freecard2 from '../../images/freecard2.png';
import premium_card1 from '../../images/premium_card1.png';
import premium_card2 from '../../images/premium_card2.png';
import premium_card3 from '../../images/premium_card3.png';
import premium_card4 from '../../images/premium_card4.png';

function CardDesign() {
  return (
    <section className='text-zinc-600 mt-12'>
        <h2 className='mb-8 text-[24px]'>CHOOSE A CARD DESIGN</h2>
        <p className='mb-5'>Select your Revvi card design below by clicking on the card design of your choice.</p>
        <p className='mb-5'>If you choose one of these premium card designs below, you will be charged a Premium Plastic Card Design Fee of $9.95 that will be billed to your account.</p>

        <div className='mb-10'>
            <h4 className='mb-4 text-black text-[18px]'>Free Designs</h4>
            <div className='flex items-center'>
                <img src={freecard1} alt="free design" className='w-4/12 mr-7 shadow-xl shadow-[#ff7b00]' />
                <img src={freecard2} alt="free design" className='w-4/12 mr-7' />
            </div>
        </div>

        <div>
            <h4 className='mb-4 text-black text-[18px]'>Premium Designs $9.95</h4>
            <div className='flex items-center flex-wrap'>
                <img src={premium_card1} alt="free design" className='w-4/12 mr-7 mt-3' />
                <img src={premium_card2} alt="free design" className='w-4/12 mr-7 mt-3' />
                <img src={premium_card3} alt="free design" className='w-4/12 mr-7 mt-3' />
                <img src={premium_card4} alt="free design" className='w-4/12 mr-7 mt-3' />
            </div>
        </div>
    </section>
  )
}

export default CardDesign