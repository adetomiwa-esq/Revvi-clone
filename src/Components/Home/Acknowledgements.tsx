import React from 'react'

function Acknowledgements() {
  return (
    <section className='mt-8 mx-6'>
        <h1 className='sm:text-[1.4rem] mb-4 md:text-[2.3rem]'>ACKNOWLEDGEMENTS</h1>
        <div className='border pl-8 pr-5 py-6 text-zinc-600 text-[12px] md:text-[18px]'>
            <p className='mb-5'>I acknowledge and agree as follows:</p>
            <ul className='list-disc pl-3 sm:pl-7  leading-[1.5rem] md:leading-[2.2rem]'>
                <li>I am applying to MRV Banks for a Revvi credit card.</li>
                <li>I have read all the Rates, Fees, Costs, and Limitations, agree with all the terms, read and agree to the Privacy Notice, and I have printed or retained electronic copies for my records.</li>
                <li>I understand that if I am approved, as a condition of obtaining the credit card account, I will be required to pay an up-front program fee of $95.00.</li>
                <li>I understand that once my account is opened, an Annual Fee of $75.00 will be assessed to my Account and will reduce my initial available credit to $225.00 ($196.00 if I request an additional card).</li>
                <li>I authorize MRV Banks to use credit bureau reports on me, verify my identity using third-party service providers, check my employment history, contact me by any means, including mail, phone, text, or e-mail, and exchange information about me in connection with this Application and any update, extension of credit, review or collection of my account.</li>
                <li>I certify that everything I have stated here is correct to the best of my knowledge.</li>
                <li>I understand that you reserve the right not to extend credit to me for any reason, including if I fail to meet the established income or any other standards.</li>
                <li>If I am a married Wisconsin resident my acknowledgment confirms that this credit card obligation is being incurred in the interest of my marriage or family.</li>
            </ul>

            <div className='flex text-black mt-6'>
              <div><input className='text-[2rem] block mr-4 items-start' type="checkbox" name="" id="input" /></div>
              <p>I further acknowledge that by checking this box and by clicking on the "Sign and Submit" button immediately following this section that I am completing and signing this application electronically and I am providing 'written instructions' to MRV Banks under the Fair Credit Reporting Act to obtain information from my personal credit profile or other information from one or more Credit Reporting Agencies. I authorize MRV Banks to obtain such information to authenticate my identity to avoid fraudulent transactions in my name.</p>
            </div>
        </div>
    </section>
  )
}

export default Acknowledgements