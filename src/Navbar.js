import React from 'react';
import './css/Navbar.css';

const Navbar = () => {
    return (
        <div className="nav">
            <ul>
                <li>
                    <img src="https://www.emoji.co.uk/files/emoji-one/animals-nature-emoji-one/1517-dog.png" height="50"/>
                </li>
                <li>View Dogs</li>
                <li>Add Dogs</li>
            </ul>
        </div>
    )
}

export default Navbar;