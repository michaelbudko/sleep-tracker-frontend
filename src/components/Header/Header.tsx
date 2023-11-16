import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
      <div className='header d-flex'>
        <div className='left-section'>
          <Link to='/home'>
            <img src='../../assets/logos/SleepTracker.png' alt='SleepTracker Logo' className='logo' width='50' height='50' />
          </Link>
        </div>
        <div className='right-section'>
          {/* <span className='hover-text'>
            <Link to='/contact'>Feedback</Link>
          </span> */}
          {/* <span className='hover-text'>
            <Link to='/donate'>Donate &#10084;</Link>
          </span> */}
          <span className='hover-text'>
            <Link to='/login'>Sign out</Link>
          </span>
        </div>
      </div>
    )
}

export default Header;