import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../images/Revvi_logo.png'

function Navbar() {
  return (
    <nav className='flex flex-col pt-7'>
        <Link to='/' className='text-red-600 w-[270px] mb-5'>
            <img src={Logo} alt="logo" />
        </Link>
        <ul className='flex ml-[12%] xl:ml-[270px] w-[100%-] flex-wrap text-zinc-500'>
            <li className='w-[20%] mb-8 pb-3 min-w-[190px]'><Link to='/pay-program'>PAY PROGRAM FEE</Link></li>
            <li className='w-[20%] mb-8 pb-3 min-w-[190px]'>ACTIVATE YOUR CARD</li>
            <li className='w-[20%] mb-8 pb-3 min-w-[190px]'><Link to="/pre-approvedrevvi">ACCEPT MAIL OFFER</Link></li>
            <li className='w-[20%] mb-8 pb-3 min-w-[190px]'><Link to="/rewards">REVVI REWARDS</Link></li>
            <li className='w-[20%] mb-8 pb-3 min-w-[190px] text-black relative group'>DISCOVER
                <ul className='absolute bottom-[-145px] w-[150px] text-center bg-white hidden group-hover:block z-40'>
                    <li className='border-b-[1px] border-zinc-300'><Link to='' className='py-3 block'>BENEFIT</Link></li>
                    <li className='border-b-[1px] border-zinc-300'><Link to='' className='py-3 block'>RESOURCES</Link></li>
                    <li className=''><Link to='' className='py-3 block'>FAQ</Link></li>
                </ul>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar