import React from 'react'
import { useSelector } from 'react-redux'
import Download from '../../Components/Reward/Download'
import FAQ from '../../Components/Reward/FAQ'
import TopSection from '../../Components/Reward/TopSection'
import Footer from '../../Components/Utility/Footer'
import Navbar from '../../Components/Utility/Navbar'
import { RootState } from '../../store'

function Rewards() {
  const { mobileNavDisplay} = useSelector((store: RootState) => store.reponsiveNav)
  return (
    <main className={` ${mobileNavDisplay ? 'fixed right-[40%] sm:static' : 'right-0'} w-full transition-all delay-150 ease-in-out`}>
      <Navbar />
      <div className='pt-8 pb-16'>
        <TopSection />
        <Download />
        <FAQ />
      </div>
      <Footer />
    </main>
  )
}

export default Rewards