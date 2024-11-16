import React, { useEffect, useState } from 'react';
import { getUserReservations } from '../api/reservationApi'; // Import the API call
import '../pagesCss/ReservationPage.css'; // Specific styles for this page
import Navbar from '../components/NavBar/NavBar'; // Navbar Component
import Footer from '../components/Footer/Footer'; // Footer Component

const ReservationPage = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const token = localStorage.getItem('authToken'); // Get JWT token from localStorage
        if (!token) {
          throw new Error('User not authenticated.');
        }
        const data = await getUserReservations(token);
        setReservations(data);
      } catch (error) {
        console.error('Error fetching reservations:', error);
        setError('Failed to fetch reservations. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  if (loading) return <div className="loading">Loading reservations...</div>;

  return (
    <div className="reservation-page">
      <Navbar /> {/* Add Navbar */}
      <div className="reservation-content">
        <h1>My Reservations</h1>
        {error && <p className="error-message">{error}</p>}
        {!error && reservations.length === 0 && (
          <p>No reservations found. Book a lab now!</p>
        )}
        <ul className="reservation-list">
          {reservations.map((reservation) => (
            <li key={reservation.id} className="reservation-item">
              <p>
                <strong>Lab:</strong> {reservation.lab.name}
              </p>
              <p>
                <strong>Date:</strong> {reservation.date}
              </p>
              <p>
                <strong>Time:</strong> {reservation.startTime} - {reservation.endTime}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default ReservationPage;
