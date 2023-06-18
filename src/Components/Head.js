import React from 'react'
import HamMenu from '../Assets/Images/hamMenu.jpg'
import Logo from '../Assets/Images/Logobutton.png'
import User from '../Assets/Images/UserImage.png'
import SeacrhButton from '../Assets/Images/Search-icon.png'
import { toggleMenu } from '../Utils/appSlice'
import { useDispatch } from 'react-redux'

const Head = () => {

  const dispatch = useDispatch();


  const toggleMenuHandler = () =>{
    dispatch(toggleMenu());
  }



  return (
    <div className='grid grid-flow-col p-4 m-2 shadow-lg'>
        <div className='flex col-span-1 '>
            <img onClick={() => toggleMenuHandler()} src={HamMenu} alt="Menu-Dropdown" className='w-8 h-8 cursor-pointer' />

            <a href='/'><img src={Logo} alt="Youtube-logo" className='w-24 h-8 mx-2' /></a>
        </div>
        <div className='col-span-10'>
            <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type="text" placeholder='Search'/>
            <button className='border border-gray-600 p-2 rounded-r-full'>🔍</button>
        </div>
      
        <div className='col-span-1'>
            <img src={User} alt="User-button" className='w-8 h-8' />
        </div>
        
    </div>
  )
}

export default Head