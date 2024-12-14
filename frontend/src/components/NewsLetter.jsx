import React from 'react'

const NewsLetter = () => {

    const onSubmitHandler = (event) =>{
        event.preventDefault();
    }

  return (
    <div className='text-center mt-3'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20 % off</p>
        <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, deleniti. Necessitatibus, dignissimos animi magni quisquam rem nulla harum, obcaecati unde dolore excepturi debitis. Inventore nesciunt excepturi hic expedita deserunt minus.</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3' >
            <input type="email" className='w-full sm:flex-1 outline-none' placeholder='Enter Yor Email' required />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
        
    </div>
  )
}

export default NewsLetter