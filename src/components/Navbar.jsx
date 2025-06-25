import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MagnifyingGlassIcon, UserIcon, ShoppingBagIcon, Bars3Icon } from '@heroicons/react/24/outline'

const Navbar = () => {

  const [ visible, setVisible ] = useState(false)

  return (
    <div className='flex flex-col border-b-1 border-gray-400'>

        <div className="top-nav py-1.5 flex items-center justify-center text-[12px] font-light bg-gray-100">
            <p>Welcome to our store</p>
        </div>

        <div className="nav py-2 px-15 flex justify-center items-center">
            <ul className='flex flex-2 gap-10 text-[14px] '>
                <NavLink to='/'><li>Home</li></NavLink>
                <NavLink to='/Shop'><li>Shop</li></NavLink>
                <NavLink to='/About'><li>About</li></NavLink>
                <NavLink to='/Pages'><li>Pages</li></NavLink>
                <NavLink to='/Contact'><li>Contact</li></NavLink>
            </ul>

            <h1 className='flex-1 font-bold text-center text-2xl tracking-widest'>SAIKO</h1>

            <ul className='flex flex-2 gap-8 justify-end'>
                <li><MagnifyingGlassIcon className='size-4 text-black'/></li>
                <li className='group relative'>
                    <UserIcon className='size-4 text-black'/>
                    <div className='absolute hidden group-hover:block right-0'>
                        <ul className='flex flex-col w-[100px] px-4 py-3 justify-center items-center gap-2 text-[12px] bg-white'>
                            <li className='hover:underline'>My Profile</li>
                            <li className='hover:underline'>Settings</li>
                            <li className='hover:underline'>Logout</li>
                        </ul>
                    </div>
                </li>
                <li className='relative'>
                    <ShoppingBagIcon className='size-4 text-black'/>
                    <p className='absolute w-[18px] h-[18px] text-white text-center text-[12px] left-4 top-[-8px] rounded-full bg-red-600' >3</p>
                </li>
                <li className='sm:hidden' ><Bars3Icon className='size-4 text-black' /></li>
                
            </ul>
        </div>

        {/* sidebar menu for sm screens */ }

        <div className="sidebarMenu">
            
        </div>


    </div>
  )
}

export default Navbar