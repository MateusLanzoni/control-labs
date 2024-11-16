import React from 'react';

const TimePicker = ({ label, value, onChange }) => (
  <div className="form-group">
    <label>{label}</label>
    <input type="time" value={value} onChange={onChange} required />
  </div>
);

export default TimePicker;
