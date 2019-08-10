import React from 'react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

const navClasses = ['navbar', 'navbar-expand-md', 'navbar-light', 'navbar-laravel', classes.Navbar]

const Header = () => (
    <nav className={navClasses.join(' ')}>
        <div className='container'>
            <Link className='navbar-brand' to='/'>Home</Link>
        </div>
    </nav>
)

export default Header