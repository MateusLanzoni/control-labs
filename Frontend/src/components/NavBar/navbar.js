import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCalendarAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            {/* Profile Icon - Stays at the Top */}
            <div className="navbar-profile" onClick={() => navigate('/user-info')}>
                <div className="profile-icon">
                    {/* Replace this div with your logo */}
                    <FontAwesomeIcon icon={faUser} size="1.85x" />
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="navbar-items">
                <div className="navbar-item" onClick={() => navigate('/main')}>
                    <FontAwesomeIcon icon={faHome} />
                    <span>Pagina Principal</span>
                </div>
                <div className="navbar-item" onClick={() => navigate('/reservations')}>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>Reservas</span>
                </div>
                <div className="navbar-item" onClick={() => navigate('/create-event')}>
                    <FontAwesomeIcon icon={faPlus} />
                    <span>Crear Evento</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
