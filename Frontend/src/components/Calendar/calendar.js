// Calendar.js
import React, { useState } from 'react';
import './Calendar.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const renderHeader = () => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return (
      <div className="calendar-header">
        <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}>◀</button>
        <div>{months[currentDate.getMonth()]} {currentDate.getFullYear()}</div>
        <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}>▶</button>
      </div>
    );
  };

  const renderDays = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return daysOfWeek.map(day => <div className="calendar-day-header" key={day}>{day}</div>);
  };

  const renderDates = () => {
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const dates = [];

    // Fill in blanks before start of month
    for (let i = 0; i < startOfMonth.getDay(); i++) {
      dates.push(<div className="calendar-day empty" key={`empty-${i}`}></div>);
    }

    // Fill in actual dates
    for (let i = 1; i <= endOfMonth.getDate(); i++) {
      dates.push(<div className="calendar-day" key={i}>{i}</div>);
    }

    return dates;
  };

  return (
    <div className="calendar">
      {renderHeader()}
      <div className="calendar-grid">
        {renderDays()}
        {renderDates()}
      </div>
    </div>
  );
};

export default Calendar;
