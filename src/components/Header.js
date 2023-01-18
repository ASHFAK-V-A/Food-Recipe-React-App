import React from 'react'

function Header() {
  return (
   <header>
    <a href="" className='logo'>
        Foodie Store
    </a>
    <nav>
        <ul className='headerul'>
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">Checkout</a>
            </li>
        </ul>
    </nav>
   </header>
  )
}

export default Header
