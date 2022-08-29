import React from 'react'
import "./header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
        <header className='showcase'>
            <div className='showcase-top'>
                <img src='https://raw.githubusercontent.com/trickjsprogram/netflix-resource/master/images/NetFlixLogo.png' alt='logo'></img>
                <Link to="/" className="btn btn-rounded">
                    Sign In
                </Link>
            </div>
            <div>
                <div className='showcase-content'>
                    <h1 className='heading' >Unlimited movies, TV Shows and more.</h1>
                    <p>Watch anywhere. Cancel anytime.</p>
                    <Link to="/netflix-show" className="freebtn btn">
                        Watch free for 30 days
                    </Link>
                    <i className='fas fa-chevron-right btn-icon'></i>
                </div>
            </div>

        </header>
  )
}

export default Header
