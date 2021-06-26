import React from 'react'
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <Link to='/'>
                PostBook
                </Link>
            </div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/post'>Post</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
