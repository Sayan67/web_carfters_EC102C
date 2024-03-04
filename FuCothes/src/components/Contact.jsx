import React from 'react'

function Contact() {
  return (
    <div className='w-full text-white  font-questrial flex justify-center rounded-2xl border-[1px] border-slate-600 py-2'>
      <div className='w-1/2 flex justify-center'> 
        <form action="" className='flex gap-4 items-center'>
          <label htmlFor="" className='font-questrial flex-nowrap whitespace-nowrap'>Subscribe Us :</label>
          <input type="email" placeholder='Your email' className='outline-nonen placeholder:bg-opacity-40 px-2 rounded-2xl'/>
          <button  className='bg-white rounded-2xl px-3 py-1 text-black' >Submit</button>
        </form>  
      </div>

    </div>
  )
}

export default Contact