import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between p-7'>
      <Link to='/'>
      <h1 className='font-bold text-2xl cursor-pointer'>Art Chronicles</h1>

      </Link>
      <ul className="flex gap-5 cursor-pointer">
       <Link to='/about'><li>About</li></Link> 
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
