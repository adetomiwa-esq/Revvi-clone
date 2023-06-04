import React from 'react'
import { useSelector } from 'react-redux'
import Application from '../../Components/PayProgram/Application'
import TopSection from '../../Components/PayProgram/TopSection'
import Footer from '../../Components/Utility/Footer'
import Navbar from '../../Components/Utility/Navbar'
import Slide from '../../Components/Utility/Slide'
import { RootState } from '../../store'

function PayProgram() {

  const { mobileNavDisplay} = useSelector((store: RootState) => store.reponsiveNav)

  return (
    <main className={`'pb-16' ${mobileNavDisplay ? 'fixed right-[40%] sm:static' : 'right-0'} w-full transition-all delay-150 ease-in-out`}>
        <Navbar />
        <Slide />
        <div className='px-6 pb-16'>
          <header className='text-center my-12'>
            <h1 className='font-bold text-[26px] mb-5'>FIND APPROVED APPLICATION</h1>
            <p>Search for your application below to Pay Program Fee or Activate Your Card</p>
          </header>
          <form>
            <TopSection />
            <Application />
            <button type="submit" className='bg-black text-white block mx-auto w-[120px] h-[46px] hover:bg-[yellow] hover:text-black delay-150 transition-colors rounded-[4px]'>Submit</button>
          </form>
        </div>
        <Footer />
    </main>
  )
}

export default PayProgram