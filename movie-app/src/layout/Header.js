import React from 'react';

const Header = () => {
    return (
        <nav className="black fixed ">
            <div className="nav-wrapper header-nav">
                <a href="#" className="brand-logo">React</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#">Movie</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;