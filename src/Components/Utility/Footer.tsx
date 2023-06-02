import React from 'react'
import White from '../../images/logoWhite.png';
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from 'react-icons/fi'

function Footer() {
  return (
    <footer className='bg-[#080808e8] px-2 py-8 flex flex-col sm:flex-row text-zinc-400 text-[13px]'>
        <div className='w-fit mx-auto sm:mx-0 mb-4'>
            <img src={White} alt="logo" />
            <div className='text-[yellow] flex text-[20px] mt-6'>
                <i className='mr-2'><FiFacebook /></i>
                <i className='mr-2'><FiInstagram /></i>
                <i className='mr-2'><FiTwitter /></i>
                <i className='mr-2'><FiLinkedin /></i>
                <i className='mr-2'><FiYoutube /></i>
            </div>
        </div>

        <div className='sm:ml-auto sm:w-9/12 flex flex-col sm:flex-row text-center sm:text-left'>
            <ul className='sm:w-[25%] mr-3'>
                <li className="mb-8">Contact Us</li>
                <li className="mb-8">Privacy Notice</li>
                <li>Rates, Fees, Costs and Limitations**</li>
            </ul>

            <ul className='sm:w-[25%] mr-3'>
                <li className="mb-8">Digital Privacy Policy</li>
                <li className="mb-8">Terms of Use</li>
                <li>Unsubscribe from our Mailing List</li>
            </ul>

            <ul className='sm:w-[50%]'>
                <li className="mb-8">Important Information About Procedures for Opening a New Account: To help the government fight the funding of terrorism and money laundering activities, Federal law requires all financial institutions to obtain, verify, and record information that identifies each person who opens an account. What this means for you: When you open an account, we will ask for your name, address, date of birth, and other information that will allow us to identify you. We may also ask to see your driver's license or other identifying documents. Card use subject to available credit; for security reasons, card may not be used for automated fuel pumps, for gambling transactions or at merchants outside the United States.</li>
                <li className="mb-8">The Revvi credit card is issued by MRV Banks pursuant to a license from Visa U.S.A Inc.</li>
                <li className="mb-8">^^See Revvi Rewards Program Terms & Conditions for details.</li>
                <li><sup>1</sup> Cardholders who keep their balances low and pay their credit card bill on time every month typically do see an increase in their credit score. Results vary.</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer