import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment/moment';
import Notice from './Notice';



const Header = () => {
    return (
        <header className='d-flex justify-content-center align-items-center flex-column gap-3 mt-5'>
            <img className='w-25' src={logo} alt="logo" />
            <p>Journalism Without Fear or Favour</p>
            <h3>{moment().format('dddd MMMM D, YYYY')}</h3>
            
            {/* Header Notice  */}
            <Notice/>
        </header>
    );
};

export default Header;