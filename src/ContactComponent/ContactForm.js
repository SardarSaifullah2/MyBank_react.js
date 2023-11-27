import React from 'react'
import '../index.css'
export const ContactForm = () => {
  return (
    <div className=' bg-Secondary p-[40px]  rounded-[20px]'>
        <div>
            <form className='grid grid-cols-1 md:grid-cols-2 gap-[30px]'>
                <div className='flex flex-col  gap-2 col-start-1 col-end-3 md:col-end-2'>
                    <label className="text-[12px] text-LabelColor">First Name</label>
                    <input type='text' placeholder='Sardar'  className='w-[100%] py-[15px] px-[15px] outline-none bg-InputBg rounded-[30px] text-LabelColor'/>
                </div>
                <div className='flex flex-col  gap-2 col-start-1 col-end-3 md:col-start-2 md:col-end-2'>
                    <label className="text-[12px] text-LabelColor">Last Name</label>
                    <input type='text' placeholder='Saifullah'  className='w-[100%] py-[15px] px-[15px] outline-none bg-InputBg rounded-[30px] text-LabelColor'/>
                </div>
                <div className='flex flex-col  gap-2 col-start-1 col-end-3 md:col-start-1 md:col-end-2'>
                    <label className="text-[12px] text-LabelColor">E-Mail</label>
                    <input type='email' placeholder='demo@gmail.com'  className='w-[100%] py-[15px] px-[15px] outline-none bg-InputBg rounded-[30px] text-LabelColor'/>
                </div>
                <div className='flex flex-col  gap-2 col-start-1 col-end-3 md:col-start-2 md:col-end-2'>
                    <label className="text-[12px] text-LabelColor">Password</label>
                    <input type='Password' placeholder='------'  className='w-[100%] py-[15px] px-[15px] outline-none bg-InputBg rounded-[30px] text-LabelColor'/>
                </div>
                <div className='col-start-1	col-end-3 flex flex-col  gap-2 '>
                    <label className="text-[12px] text-LabelColor">Subject</label>
                    <input type='text' placeholder='Web Development Services' className="w-[100%] py-[15px] px-[15px] outline-none bg-InputBg rounded-[30px] text-LabelColor"/>
                </div>
                <div className='col-start-1	col-end-3 flex flex-col gap-2'>
                    <label className="text-[12px] text-LabelColor">Subject</label>
                    <textarea className='bg-InputBg resize-none outline-none rounded-[20px] text-LabelColor p-[20px] h-[200px]'/>
                </div>
            </form>
        </div>
    </div>
  )
}
