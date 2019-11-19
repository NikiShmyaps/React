import React from 'react';
import { Link } from "react-router-dom";
import './header.sass';



const Header = () => {
    return (
        <div className='header'>
            <h3>
                <Link to="/">Game of Thrones DB</Link>
            </h3>
            <ul>
                <li>
                    <Link to="/chars/"> Characters </Link>
                </li>
                <li>
                    <Link to="/houses/"> Houses </Link> 
                </li>
                <li>
                    <Link to="/books/"> Books </Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;