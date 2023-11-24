import React from "react";
import { Link } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';
import './Header.css';
import sleepTrackerLogo from '../../assets/logos/SleepTracker.png';

const Header = () => {

    const signout = async () => {
      await signOut(auth);
    }

    return (
      <div className='header d-flex'>
        <div className='left-section'>
          <Link to='/'>
            <img src={sleepTrackerLogo} alt='SleepTracker Logo' className='logo' width='100' height='100' />
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
            <Link to='/' onClick={signout}>Sign out</Link>
          </span>
        </div>
      </div>
    )
}

export default Header;