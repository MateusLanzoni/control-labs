import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCalendarAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="profile-icon" onClick={() => navigate('/user-info')}>
        {/* Replace with a profile picture if available */}
        <img src="/default-avatar.png" alt="Profile" />
      </div>
      <div className="navbar-item" onClick={() => navigate('/main')}>
        <FontAwesomeIcon icon={faHome} />
        <span>Pagina Principal</span>
      </div>
      <div className="navbar-item" onClick={() => navigate('/reservations')}>
        <FontAwesomeIcon icon={faCalendarAlt} />
        <span>Reservas</span>
      </div>
      <div className="navbar-item plus" onClick={() => navigate('/create-event')}>
        <FontAwesomeIcon icon={faPlus} />
        <span>Crear Evento</span>
      </div>
    </div>
  );
};

export default Navbar;
