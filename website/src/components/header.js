
import React from 'react'
// import '/header.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

import SanitizerIcon from '@mui/icons-material/Sanitizer';
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
  return (
    <>
    <header className='header'>
    <div className='header-div'>
      <div className='image-div'><img className='logo-img' src='https://www.netmeds.com/assets/gloryweb/images/home-logo-netmeds-new.svg'/></div>
      <div className='search-div'><input className='search-bar' placeholder='search here' /></div>
       <div className='option-div'><div className='cart-div'> <ShoppingCartIcon/> CART</div><div className='signin-div'> <PersonIcon/>SIGN IN</div></div>
    </div>
    
    </header>
    <header className='mobile-header'> 
    <div className='mobile-header-div'>
      <div className='mobile-image-div'><img className='logo-img' src='https://www.netmeds.com/assets/gloryweb/images/home-logo-netmeds-new.svg'/></div>
       <div className='mobile-option-div'><div className='cart-div'> <ShoppingCartIcon/> CART</div><div className='signin-div'> <PersonIcon/>SIGN IN</div></div>
    </div>
    
    </header>
    <div className='mobile-search-div'> <span className='mobile-search-ico'>< SearchIcon/></span> <input className='mobile-search-bar' placeholder='search here' />
    </div>
    </>
  )
}
