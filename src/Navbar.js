import React from 'react';
import './css/Navbar.css';

const Navbar = () => {
    return (
        <div className="nav">
            <ul >
                <li><a href="/dogs">View Dogs</a></li>
                <li>
                    <a href="/"><img src="https://www.emoji.co.uk/files/emoji-one/animals-nature-emoji-one/1517-dog.png" alt="logo" height="50"/></a>
                </li>
                <li><a href="/add">Add Dogs</a></li>
            </ul>
        </div>
    )
}

export default Navbar;