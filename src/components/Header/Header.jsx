import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-blue-500 py-5 flex justify-center'>
            <div className="header container w-1/4 flex justify-center mx-auto text-gray-300">
                <Link to='/crea'>Coffees</Link>
                <Link to='/coffees'></Link>
            </div>
        </div>
    );
};

export default Header; 