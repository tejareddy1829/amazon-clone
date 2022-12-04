import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className='header'>
      <img
        className='header__logo'
        alt='Amazon Logo White'
        src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
      />
      <div className='header__search'>
        <input className='header__searchInput' type='text' />
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className='header__nav'>
        <div className='header__option'>
          <span className='header__LineOne'>Hello Guest</span>
          <span className='header__LineTwo'>Sign In</span>
        </div>
        <div className='header__option'>
          <span className='header__LineOne'>Returns</span>
          <span className='header__LineTwo'>& Orders</span>
        </div>
        <div className='header__option'>
          <span className='header__LineOne'>Your</span>
          <span className='header__LineTwo'>Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
