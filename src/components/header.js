import React from 'react';
import { Link } from 'react-router-dom'
const Header = ({ name, contactEmail }) => {
    return (
        <div>
            <div className="header_container">
                <Link to="/"><h1>{name}.</h1></Link>
                <nav>
                    <ul>
                        <button>
                            <li><Link to="/about">Create Campaign</Link></li>

                        </button>

                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header