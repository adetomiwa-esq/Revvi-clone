import React from 'react'
import { useSelector } from 'react-redux'
import CardFeatures from '../../Components/Home/CardFeatures'
import HomeLeft from '../../Components/Home/HomeLeft'
import HomeRight from '../../Components/Home/HomeRight'
import Footer from '../../Components/Utility/Footer'
import Navbar from '../../Components/Utility/Navbar'
import Slide from '../../Components/Utility/Slide'
import { RootState } from '../../store'

function Index() {
  const { mobileNavDisplay} = useSelector((store: RootState) => store.reponsiveNav)
  return (
    <main className={`'pb-10' ${mobileNavDisplay ? 'fixed right-[40%] sm:static' : 'right-0'} w-full transition-all delay-150 ease-in-out`}>
        <Navbar />
        <Slide />
        <div className='flex justify-between sm:flex-row flex-col px-2 sm:pl-5 pt-16'>
          <HomeLeft />
          <HomeRight />
        </div>
        <CardFeatures />
        <Footer />
    </main>
  )
}

export default Index