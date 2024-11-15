import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCalendarAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-item plus">
                <FontAwesomeIcon icon={faPlus} />
            </div>
            <div className="navbar-item">
                <FontAwesomeIcon icon={faHome} />
                <span>Pagina Principal</span>
            </div>
            <div className="navbar-item">
                <FontAwesomeIcon icon={faUser} />
                <span>Usuario</span>
            </div>
            <div className="navbar-item">
                <FontAwesomeIcon icon={faCalendarAlt} />
                <span>Reservas</span>
            </div>
        </div>
    );
};

export default Navbar;
