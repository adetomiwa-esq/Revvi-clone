import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../images/Revvi_logo.png'
import White from '../../images/logoWhite.png';
import { FaBars } from 'react-icons/fa'
import { AiOutlineDown } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { removeMobileNav, toggleMobileNav } from '../Features/NavBox/NavSlice';
import { RootState } from '../../store';

function Navbar() {
    const {mobileNavDisplay} = useSelector((store: RootState) => store.reponsiveNav)
    const dispatch = useDispatch()
  return (
    <nav className='flex items-center sm:items-start  sm:flex-col sm:pt-7 py-3 sm:py-0 px-4 bg-[#f12e2ed3] sm:bg-transparent'>
        <Link to='/' className='text-red-600 w-[100px] sm:w-[180px] md:w-[240px] sm:mb-5'>
            <img className='hidden sm:block' src={Logo} alt="logo" />
            <img className=' sm:hidden' src={White} alt="logo" />
        </Link>
        <ul className='ml-[7%] w-[calc(100%-7%)] xl:ml-[240px] xl:w-[calc(100%-240px)] flex-wrap text-zinc-600 hidden sm:flex text-center'>
            <li className='w-[20%] mb-8 pb-3 min-w-[190px]'><Link to='/pay-program'>PAY PROGRAM FEE</Link></li>
            <li className='w-[20%] mb-8 pb-3 min-w-[190px]'><Link to='/pay-program'>ACTIVATE YOUR CARD</Link></li>
            <li className='w-[20%] mb-8 pb-3 min-w-[190px]'><Link to="/pre-approvedrevvi">ACCEPT MAIL OFFER</Link></li>
            <li className='w-[20%] mb-8 pb-3 min-w-[190px]'><Link to="/rewards">REVVI REWARDS</Link></li>
            <li className='w-[20%] mb-8 pb-3 min-w-[190px] text-black relative group cursor-pointer flex items-center justify-center font-[800]'>DISCOVER <span className='text-[red] font-[700] ml-2'><AiOutlineDown /></span>
                <ul className='absolute bottom-[-135px] w-[150px] text-center bg-white hidden group-hover:block z-40 font-normal'>
                    <li className='border-b-[1px] border-zinc-300'><Link to='' className='py-3 block'>BENEFIT</Link></li>
                    <li className='border-b-[1px] border-zinc-300'><Link to='' className='py-3 block'>RESOURCES</Link></li>
                    <li className=''><Link to='' className='py-3 block'>FAQ</Link></li>
                </ul>
            </li>
        </ul>

        <div className='ml-auto text-white sm:hidden cursor-pointer text-[1.7rem]' onClick={() => dispatch(toggleMobileNav())}>
            <FaBars />
        </div>


        <ul className={`fixed top-0 text-center bg-white block sm:hidden w-[40%] z-40 ${mobileNavDisplay ? 'right-0' : 'right-[-40%]'} transition-all delay-150 ease-in-out`} onClick={() => dispatch(removeMobileNav())}>
            <li className='border-b-[1px] border-zinc-300'><Link to='/pay-program' className='py-3 block'>PAY PROGRAM FEE</Link></li>
            <li className='border-b-[1px] border-zinc-300'><Link to='/pay-program' className='py-3 block'> ACTIVATE YOUR CARD</Link></li>
            <li className='border-b-[1px] border-zinc-300'><Link to='/pre-approvedrevvi' className='py-3 block'>ACCEPT MAIL OFFER</Link></li>
            <li className='border-b-[1px] border-zinc-300'><Link to='/rewards' className='py-3 block'>REVVI REWARDS</Link></li>
            <li className='border-b-[1px] border-zinc-300'><Link to='' className='py-3 block'>BENEFIT</Link></li>
            <li className='border-b-[1px] border-zinc-300'><Link to='' className='py-3 block'>RESOURCES</Link></li>
            <li className=''><Link to='' className='py-3 block'>FAQ</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar