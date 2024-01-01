import { navLinks } from '../../constants'
import { close, menu, logo } from '../../assets'
import { useState } from 'react'
const Navbar = () => {
  const [hamburgur, setHamburgur] = useState(false)
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img className='w-[124px] h-[32px]' src={logo} alt="Logan" />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (<li className={`font-poppins font-normal cursor-pointer text-[16px] text-white  ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`} key={nav.id} >
          <a href={`#${nav.id}`}>{nav.title}</a> </li>))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center' >
        <img onClick={() => { setHamburgur(prev => !prev) }} src={hamburgur ? close : menu} alt="Menu" className='w-[28px] h-[28px] object-contain' />

        <div className={` ${hamburgur ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (<li className={`font-poppins font-normal cursor-pointer text-[16px] text-white  ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`} key={nav.id} >
              <a href={`#${nav.id}`}>{nav.title}</a> </li>))}
          </ul>



        </div>
      </div>



    </nav>
  )
}

export default Navbar