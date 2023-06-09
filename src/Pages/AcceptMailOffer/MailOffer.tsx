import React from 'react'
import { useSelector } from 'react-redux'
import Footer from '../../Components/Utility/Footer'
import Navbar from '../../Components/Utility/Navbar'
import Slide from '../../Components/Utility/Slide'
import { RootState } from '../../store'

function MailOffer() {
  const { mobileNavDisplay} = useSelector((store: RootState) => store.reponsiveNav)
  return (
    <main className={`'pb-10' ${mobileNavDisplay ? 'fixed right-[40%] sm:static' : 'right-0'} w-full transition-all delay-150 ease-in-out`}>
        <Navbar />
        <Slide />
        <div className='flex flex-col items-center py-16 text-zinc-700 font-[300] px-[14px] text-center'>
            <h1 className='text-[20px] font-bold mb-6 text-black'>ACCEPT PRE-APPROVED LETTER OFFER</h1>
            <p className='mb-[4px]'>Enter the Reservation Code printed at the bottom of your letter or included in your email to get started.</p>
            <p className='mb-5'>For help finding your Reservation Code, click <a href="https://revvi.com/img/ExampleReservationCode.png" className='text-black decoration-black hover:underline font-[500]'>here</a>.</p>

            <p className='text-[14px] text-black mb-3 font-[500]'>Reservation Code:</p>
            <input type="text" className='border border-zinc-200 w-[140px] h-[38px] outline-none px-3'/>

            <button type="submit" className='bg-[#252121] text-white block w-[150px] h-[53px] hover:bg-[yellow] hover:text-black delay-150 transition-colors rounded-[4px] mt-7 text-[18px]'>CONTINUE</button>
        </div>
        <Footer />
    </main>
  )
}

export default MailOffer