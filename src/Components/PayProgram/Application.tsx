import React from 'react'

function Application() {
  return (
    <section className='text-zinc-600 mb-14'>
        <h4 className='font-bold text-black mb-4'>2. Enter Application ID or Email Address</h4>
        <div className='border border-zinc-300 py-6 px-4'>
            <p className='text-[18px] mb-5'>Search by Application ID</p>
            <p className='mb-5'>Your Application ID was sent to you by email if you started an application with us.</p>

            <label className='block text-[13px]' htmlFor="">Application ID:</label>
            <input type="text"  className='border w-10/12 sm:w-[370px] h-[37px]'/>
        </div>

        <p className='my-6 text-[23px]'>Or</p>

        <div className='border border-zinc-300 py-6 px-4'>
            <p className='text-[18px] mb-5'>Search by Email Address</p>
            <p className='mb-5'>Enter the email address you used when you applied with us.</p>

            <label className='block text-[13px]' htmlFor="">Email Address:</label>
            <input type="text"  className='border w-10/12 sm:w-[370px] h-[37px]'/>
        </div>
    </section>
  )
}

export default Application