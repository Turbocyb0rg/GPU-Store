import React from 'react';
import '../Styles/nav.css';
import data from '../data/data.json'; // Import data.json assuming it's in the correct location
import { Link } from 'react-router-dom';

const searchicon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -1020 960 960" width="24">
    <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
  </svg>
);

const Navbar = () => {
  const { logo } = data; // Assuming 'logo' is the key in data.json containing the logo URL

  return (
    <div className='nav'>
      <div className='logo'>
        <Link to='/dsd'>
          <img id='logoImage' src={logo[0]} alt='Logo' style={{ borderRadius: '10px', width: '60px', height: '40px' }} />
        </Link>
      </div>

      <Link className='navlinks' to='/graphics-cards'>Graphics Cards</Link>
      <Link className='navlinks' to='/laptops'>Laptops</Link>
      <Link className='navlinks' to='/monitors'>Monitors</Link>
      <Link className='navlinks' to='/accessories'>Accessories</Link>
      <Link className='navlinks' to='/software'>Software</Link>
      
      <div className='searchbox'>
        <input type='text' name='search' placeholder='Search Products' style={{ borderRadius: '10px' }} />
        {searchicon}
      </div>
    </div>
  );
};

export default Navbar;
