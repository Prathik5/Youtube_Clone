import React from 'react'
import { useSelector } from 'react-redux'
import store from '../Utils/Store'
import { Link } from 'react-router-dom'

const SideBar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if(!isMenuOpen) return null;

  return (
    <div className='p-5 shadow-lg w-48'>
      <Link to="/">
        <h1 className='font-bold'>Home</h1>
      </Link>
      <h1 className='font-bold py-2'>Shorts</h1>
      <h1 className='font-bold'>Subscriptions</h1>
      <ul>
        <li>Movies</li>
        <li>Sports</li>
        <li>Music</li>
        <li>Games</li>
      </ul>
      <h2 className='py-5'>Watch Later</h2>
      <ul>
        <li>History</li>
        
      </ul>
    </div>
  )
}

export default SideBar