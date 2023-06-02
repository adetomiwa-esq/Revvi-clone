import React from 'react'
import CardFeatures from '../../Components/Home/CardFeatures'
import HomeLeft from '../../Components/Home/HomeLeft'
import HomeRight from '../../Components/Home/HomeRight'
import Slide from '../../Components/Utility/Slide'

function Index() {
  return (
    <main className='pb-10'>
        <Slide />
        <div className='flex justify-between sm:flex-row flex-col px-2 sm:pl-5 pt-16'>
          <HomeLeft />
          <HomeRight />
        </div>
        <CardFeatures />
    </main>
  )
}

export default Index