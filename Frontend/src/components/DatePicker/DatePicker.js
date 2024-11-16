import React from 'react';

const DatePicker = ({ label, value, onChange }) => (
  <div className="form-group">
    <label>{label}</label>
    <input type="date" value={value} onChange={onChange} required />
  </div>
);

export default DatePicker;
