import React from 'react'

const Header = () => {
  return (
    <header className='py-2 px-4'>
        <nav className='mx-auto max-w-screen-md'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='title-font text-xl font-medium text-gray-800'>The ContactHub</h1>
                    <p className='tracking-widest text-xs title-font font-medium mb-1'>Your personal online contact organizer</p>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header