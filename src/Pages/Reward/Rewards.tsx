import React from 'react'
import Download from '../../Components/Reward/Download'
import FAQ from '../../Components/Reward/FAQ'
import TopSection from '../../Components/Reward/TopSection'

function Rewards() {
  return (
    <main className='pt-8'>
        <TopSection />
        <Download />
        <FAQ />
    </main>
  )
}

export default Rewards