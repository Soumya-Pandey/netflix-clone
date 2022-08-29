import React from 'react'
import { labels } from './constant';
import { Link } from 'react-router-dom';
import './Tabs.css'
import NetflixShow from '../../pages/NetflixShow';


const Tabs = ({activeTabName, onClickTab}) => {
    const {CANCEL_ANYTIME, WATCH_ANYWHERE, PICK_YOUR_PRICE} = labels;

    const renderTabTitle = (tabTitle, isActive, icon, id)=> (
            <div onClick={()=> onClickTab(tabTitle)} id={id} className={`tab-item ${isActive && "tab-border"}`}>
                <i className={icon}></i>
                <p>{tabTitle}</p>
            </div>
    )
  return (
    <>
      <section className='tabs'>
        <div className='container'>
            {renderTabTitle(CANCEL_ANYTIME, activeTabName===CANCEL_ANYTIME, "fas fa-door-open fa-3x", "tab-1")}

            {renderTabTitle(WATCH_ANYWHERE, activeTabName===WATCH_ANYWHERE, "fas fa-tablet-alt fa-3x", "tab-2")}

            {renderTabTitle(PICK_YOUR_PRICE, activeTabName===PICK_YOUR_PRICE, "fas fa-tags fa-3x", "tab-3")}

            
        </div>
      </section>

      {activeTabName === CANCEL_ANYTIME && (
            <section className='tab-content'>
                <div className='container'>
                    <div id='tab-1-content' className={`tab-content-item ${activeTabName===CANCEL_ANYTIME && "show"}`}>
                        <div className='tab-1-content-inner'>
                            <div>
                                <p className='text-lg'>
                                    If you decide Netflix isn't for you, cancel anytime.
                                </p>
                                <Link to="/netflix-show" className="btn mybtn btn-lg">
                                    Watch free for 30 days
                                </Link>
                            </div>
                            <img src='https://d11fuji4mn7bm2.cloudfront.net/media/data/Netflix/Netflix-revamp/stream-img-1.jpg' alt='cancel'></img>
                        </div>
                    </div>
                </div>
            </section>
        )
      }

{activeTabName === WATCH_ANYWHERE && (
            <section className='tab-content'>
                <div className='container'>
                    <div id='tab-2-content' className={`tab-content-item ${activeTabName===WATCH_ANYWHERE && "show"}`}>
                        <div className='tab-2-content-top'>
                            <div>
                                <p className='text-lg'>
                                    Watch TV shows and movies anywhere, anytime - personalised for you.
                                </p>
                                <Link to="/netflix-show" className="btn mybtn btn-lg">
                                    Watch free for 30 days
                                </Link>
                            </div>
                            <hr></hr>
                            
                            <div className='tab-2-content-bottom'>
                                <div>
                                <div>
                                    <p className='text-md'>Enjoy on your TV.</p>
                                    <p className='text-dark'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                                    </div>
                                    <img className='imgis' src='https://www.dish.com/features/tv-applications/netflix/images/netflix-1.png' alt='tv'></img>
                                    </div>
                                    <hr></hr>
                                    
                                <div>
                                <div>
                                        <p className='text-md'>Download your shows to watch offline.</p>
                                        <p className='text-dark'>Save your favourites easily and always have something to watch.</p>
                                </div>
                                    <img className='imgis' src='https://i.pinimg.com/originals/a7/bf/03/a7bf03b1dee24e622a2d879147f1f333.png' alt='tab'></img>
                                </div>
                                
                                <hr></hr>
                                <div>
                                <div>
                                   <p className='text-md'>Watch everywhere.</p>
                                   <p className='text-dark'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                                </div>
                                    <img className='imgis' src='https://variety.com/wp-content/uploads/2020/04/netflix-kids-parental-controls.jpg' alt='mac'></img>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
      }

{activeTabName === PICK_YOUR_PRICE && (
            <section className='tab-content'>
                <div className='container'>
                    <div id='tab-3-content' className={`tab-content-item ${activeTabName===PICK_YOUR_PRICE && "show"}`}>
                        <div className='tab-3-content-inner'>
                            <div className='outer'>
                                <div className='child'>
                                <p className='text-lg'>
                                    Choose a plan and watch everything on Netflix.
                                </p>
                                </div>
                                
                               <div className='child1'>
                               <Link to="/netflix-show" className="btn mybtn btn-lg">
                                    Watch free for 30 days
                                </Link>
                                </div> 
                                
                            </div>
                            {/* <img src='https://d11fuji4mn7bm2.cloudfront.net/media/data/Netflix/Netflix-revamp/stream-img-1.jpg' alt='cancel'></img> */}
                        </div>
                    </div>
                </div>
            </section>
        )
      }
      
    </>
  )
}

export default Tabs
