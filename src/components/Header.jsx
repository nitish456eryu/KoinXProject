import React from 'react';
import logo from "../assets/logo.svg";
import '../components/headerdesign.css';

const Header = () => {
    return (
        <>
        <div className='header_page'>
            <div className=''>
                <img src={logo} alt="" className='logo'/>
            </div>
            <div className='navlink'>
                <div className='link'>Crypto Taxes</div>
                <div className='link'>Free Tools</div>
                <div className='link'>Resource Center</div>
                <div >
                    <button className='ourbutton'>Get Started</button>
                </div>
            </div>
        </div>









{/* 
            <frame className="header">
                <frame className="logodesign">
                    <div className='logoimage'>
                    <img src={logo} alt="" className='image' />
                    </div>
                </frame>
                <frame className='navbar'>
                    <frame className="navlink">
                        
                    </frame>
                    <frame className="getstartedframe">
                            <frame className="getstartedbutton">
                                <button className="getstarted">GetStarted</button>
                            </frame>
                    </frame>     
                </frame>
            </frame>  */}
        </>
    )
}

export default Header;