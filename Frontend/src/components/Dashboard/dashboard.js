import React from 'react';
import './dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h1>Bienvenido al Dashboard</h1>
            <div className="dashboard-sections">
                <div className="dashboard-section">
                    <h2>Sección 1</h2>
                    <p>Contenido de la sección 1.</p>
                </div>
                <div className="dashboard-section">
                    <h2>Sección 2</h2>
                    <p>Contenido de la sección 2.</p>
                </div>
                <div className="dashboard-section">
                    <h2>Sección 3</h2>
                    <p>Contenido de la sección 3.</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
