import React from 'react'
import Application from '../../Components/PayProgram/Application'
import TopSection from '../../Components/PayProgram/TopSection'
import Slide from '../../Components/Utility/Slide'

function PayProgram() {
  return (
    <main className='pb-16'>
        <Slide />
        <div className='px-6'>
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
    </main>
  )
}

export default PayProgram