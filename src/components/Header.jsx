import React from 'react';
import logo from "../assets/logo.svg";
import '../components/headerdesign.css';

const Header = () => {
    return (
        <>
        <div className='header_page'>
            <div>
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
        </>
    )
}

export default Header;
