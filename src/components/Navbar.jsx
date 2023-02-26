import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex items-center justify-between p-4 z-10 w-full absolute'>
      <h1 className="text-red-600 font-bold cursor-pointer text-[2rem]">Netflix</h1>
      <div>
        <button className='text-white mr-4'>Sign up</button>
        <button className='bg-red-600 px-4 py-2 rounded cursor-pointer text-white'>Sign in</button>
      </div>
    </nav>
  )
}

export default NavBar