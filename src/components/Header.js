import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
   <header>
    <a href="" className='logo'>
        Foodie Store
    </a>
    <nav>
        <ul className='headerul'>
            <li>
             <Link to="/">Home </Link>
            </li>
            <li>
               <Link to="Checkout">Checkout</Link>
            </li>
        </ul>
    </nav>
   </header>
  )
}

export default Header
