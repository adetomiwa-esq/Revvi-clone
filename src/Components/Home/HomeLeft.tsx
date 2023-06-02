import React from 'react'
import Acknowledgements from './Acknowledgements'
import CardDesign from './CardDesign'

function HomeLeft() {
  return (
    <div className='border w-full sm:w-[58%] lg:w-[55%]'>
        <form action="" className=''>
            <section className='mb-10 mx-4 md:mx-0'>
                <div className='flex justify-between flex-col sm:flex-row mb-3'>
                    <div className='flex w-full sm:w-[45%] justify-between'>
                        <div className='w-[75%]'>
                            <label htmlFor="" className='block mb-2 font-[500]'>First Name<span className='text-red-500 text-xs'>*</span></label>
                            <input type="text" className='border border-black h-9 rounded-lg w-full outline-none px-2'/>
                        </div>
                        <div className='ml-4'>
                            <label htmlFor="" className='block mb-2 font-[500]'>MI</label>
                            <input type="text" className='border border-black h-9 rounded-lg w-[55px] outline-none px-2'/>
                        </div>
                    </div>
                    <div className='flex w-full sm:w-[45%] justify-between'>
                        <div className='w-[75%]'>
                            <label htmlFor="" className='block mb-2 font-[500]'>Last Name<span className='text-red-500 text-xs'>*</span></label>
                            <input type="text" className='border border-black h-9 rounded-lg w-full outline-none px-2'/>
                        </div>
                        <div className='ml-4'>
                            <label htmlFor="" className='block mb-2 font-[500]'>Suffix</label>
                            <input type="text" className='border border-black h-9 rounded-lg w-[55px] outline-none px-2'/>
                        </div>
                    </div>
                </div>


                <div className='flex justify-between flex-col sm:flex-row mb-3'>
                    <div className='flex w-full sm:w-[45%] justify-between'>
                        <div className='w-full mb-3 md:mb-0'>
                            <label htmlFor="" className='block mb-2 font-[500]'>Email Address<span className='text-red-500 text-xs'>*</span></label>
                            <input type="text" className='border border-black h-9 rounded-lg w-full outline-none px-2'/>
                        </div>
                    </div>
                    <div className='flex w-full sm:w-[45%] justify-between'>
                        <div className='w-full'>
                            <label htmlFor="" className='block mb-2 font-[500]'>Verify Email Address<span className='text-red-500 text-xs'>*</span></label>
                            <input type="text" className='border border-black h-9 rounded-lg w-full outline-none px-2'/>
                        </div>
                    </div>
                </div>


                <div className='flex justify-between flex-col sm:flex-row mb-3'>
                    <div className='flex w-full sm:w-[45%] justify-between'>
                        <div className='w-full mb-3 md:mb-0'>
                            <label htmlFor="" className='block font-[500]'>Street Address<span className='text-red-500 text-xs'>*</span><span className='text-red-300 text-[10px] ml-[3px]'>(No P.O. boxes)</span></label>
                            <input type="text" className='border border-black h-9 rounded-lg w-full outline-none px-2'/>
                        </div>
                    </div>
                    <div className='flex w-full sm:w-[45%] justify-between'>
                        <div className='w-full'>
                            <label htmlFor="" className='block font-[500]'>Address Line 2/Apt</label>
                            <input type="text" className='border border-black h-9 rounded-lg w-full outline-none px-2'/>
                        </div>
                    </div>
                </div>


                <div className='flex justify-between flex-col sm:flex-row mb-3'>
                    <div className='flex w-full sm:w-[45%] justify-between'>
                        <div className='w-full mb-3 md:mb-0'>
                            <label htmlFor="" className='block mb-2 font-[500]'>City<span className='text-red-500 text-xs'>*</span></label>
                            <input type="text" className='border border-black h-9 rounded-lg w-full outline-none px-2'/>
                        </div>
                    </div>
                    <div className='flex w-full sm:w-[45%] justify-between'>
                        <div className='w-[55%]'>
                            <label htmlFor="" className='block mb-2 font-[500]'>State<span className='text-red-500 text-xs'>*</span></label>
                            <select name="" id="" className='border bg-yellow-500 w-full h-9 outline-none px-2'>
                                <option value="">Select</option>
                            </select>
                        </div>
                        <div className='ml-4 w-[40%]'>
                            <label htmlFor="" className='block mb-2 font-[500]'>Zip<span className='text-red-500 text-xs'>*</span></label>
                            <input type="text" className='border border-black h-9 rounded-lg w-full outline-none px-2'/>
                        </div>
                    </div>
                </div>


                <div>
                    <label htmlFor="" className='block mb-2 font-[500]'>Date of Birth<span className='text-red-500 text-xs'>*</span></label>
                    <div className='flex justify-between mb-2'>
                        <select name="" id="" className='w-[31%] h-9 outline-none px-[2px]'>
                            <option value="">Month</option>
                        </select>
                        <select name="" id="" className='w-[31%] h-9 outline-none px-[2px]'>
                            <option value="">Day</option>
                        </select>
                        <select name="" id="" className='w-[31%] h-9 outline-none px-[2px]'>
                            <option value="">Year</option>
                        </select>
                    </div>
                    <p className='text-red-400 text-sm'>You must be 18 years or older to be eligible.</p>
                </div>
            </section>

            <section className='mx-4 md:mx-0'>
                <div className='flex justify-between flex-col sm:flex-row mb-5'>
                    <div className='flex w-full sm:w-[45%] justify-between'>
                        <div className='w-full mb-3 md:mb-0'>
                            <label htmlFor="" className='block font-[500]'>How frequently do you get paid<span className='text-red-500 text-xs'>*</span></label>
                            <select className='border border-zinc-500 h-9 w-full outline-none px-2'>
                                <option value="">Select</option>
                                <option value="every other week">Every Other Week</option>
                                <option value="monthly">Monthly</option>
                                <option value="twice per month">Twice Per Month</option>
                                <option value="weekly">Weekly</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex w-full sm:w-[45%] justify-between'>
                        <div className='w-full'>
                            <label htmlFor="" className='block font-[500]'>How much is your typical paycheck</label>
                            <div className='flex items-center'>
                                <input type="text" className='border border-black h-9 rounded-l-lg w-9/12 outline-none px-2'/>
                                <input type="text" value='.00' readOnly className='w-3/12 text-center border h-9 rounded-r-lg bg-zinc-200 border-zinc-300' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between flex-col sm:flex-row mb-5'>
                    <div className='flex w-full sm:w-[45%] justify-between'>
                        <div className='w-full mb-3 md:mb-0'>
                            <label htmlFor="" className='block font-[500]'>When is your Next Paycheck?<span className='text-red-500 text-xs'>*</span></label>
                            <input type="text" className='border border-black h-9 rounded-lg w-full outline-none px-2'/>
                        </div>
                    </div>
                    <div className='flex w-full sm:w-[45%] justify-between'>
                        <div className='w-full'>
                            <label htmlFor="" className='block font-[500]'>Est. Monthly Expenses<span className='text-red-500 text-xs'>*</span></label>
                            <div className='flex items-center'>
                                <input type="text" className='border border-black h-9 rounded-l-lg w-9/12 outline-none px-2'/>
                                <input type="text" value='.00' readOnly className='w-3/12 text-center border h-9 rounded-r-lg bg-zinc-200 border-zinc-300' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between flex-col sm:flex-row mb-5'>
                    <div className='flex w-full sm:w-[45%] justify-between'>
                        <div className='w-full mb-3 md:mb-0'>
                            <label htmlFor="" className='block font-[500]'>Social Security Number<span className='text-red-500 text-xs'>*</span></label>
                            <input type="text" className='border border-black h-9 rounded-lg w-full outline-none px-2'/>
                        </div>
                    </div>
                    <div className='flex w-full sm:w-[45%] justify-between'>
                        <div className='w-full'>
                            <label htmlFor="" className='block font-[500]'>Verify Social Security Number<span className='text-red-500 text-xs'>*</span></label>
                            <input type="text" className='border border-black h-9 rounded-lg w-full outline-none px-2'/>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between flex-col sm:flex-row mb-5'>
                    <div className='flex w-full sm:w-[45%] justify-between'>
                        <div className='w-full mb-3 md:mb-0'>
                            <label htmlFor="" className='block font-[500]'>Employment Status<span className='text-red-500 text-xs'>*</span></label>
                            <select className='border border-zinc-500 h-9 w-full outline-none px-2'>
                                <option value="">Select</option>
                                <option value="employed">Employed</option>
                                <option value="self-employed">Self Employed</option>
                                <option value="retired">Retired</option>
                                <option value="student">Student</option>
                                <option value="unemployed">Unemployed</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    
                </div>

                <div className='mb-4'>
                    <p>Do you have an active checking account?</p>
                    <div className='flex'>
                        <div className='mr-4'>
                            <input className='mr-[2px]' type="radio" name="active-acct" value='yes' id="" />Yes
                        </div>
                        <div>
                            <input className='mr-[2px]' type="radio" name="active-acct" value='no' id="" />No
                        </div>
                    </div>
                </div>

                <div>
                    <p>Would you like to add an additional cardholder?</p>
                    <div className='flex'>
                        <div className='mr-4'>
                            <input className='mr-[2px]' type="radio" name="additional-card-holder" value='yes' id="" />Yes
                        </div>
                        <div>
                            <input className='mr-[2px]' type="radio" name="additional-card-holder" value='no' id="" />No
                        </div>
                    </div>
                </div>
            </section>

            <CardDesign />
            <Acknowledgements />

            <button className='text-white bg-black w-[60%] h-[60px] text-[1.4rem] block m-auto mt-8'>SIGN AND SUBMIT</button>

        </form>
    </div>
  )
}

export default HomeLeft