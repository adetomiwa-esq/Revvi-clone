import React from 'react';
import { Months, Days, Years } from '../Utility/Date';

function TopSection() {

  return (
    <section className='mb-5'>
          <h4 className='font-bold mb-4'>1. Enter your Date of Birth</h4>
          <div>
            <label htmlFor="" className='block text-[14px] '>Date of Birth<span className='text-red-500 text-xs'>*</span></label>
            <div className='flex mb-2'>
                <select name="" id="" className='w-[130px] h-9 outline-none px-[2px] mr-5 bg-zinc-50 border border-zinc-300'>
                    <option value="">Month</option>
                    {Months.map((month, index) => <option key={index} value={month}>{month}</option>)}
                </select>
                <select name="" id="" className='w-[130px] h-9 mr-5 outline-none px-[2px] bg-zinc-50 border border-zinc-300'>
                    <option value="">Day</option>
                    {Days.map((day, index) => <option key={index} value={day}>{day}</option>)}
                </select>
                <select name="" id="" className='w-[130px] h-9 outline-none px-[2px] bg-zinc-50 border border-zinc-300'>
                    <option value="">Year</option>
                    {Years.map((year, index) => <option key={index} value={year}>{year}</option>)}
                </select>
            </div>
          </div>
        </section>
  )
}

export default TopSection