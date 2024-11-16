import React from 'react';

const SelectLab = ({ label, value, onChange }) => (
  <div className="form-group">
    <label>{label}</label>
    <select value={value} onChange={onChange} required>
      <option value="3rd Floor">3rd Floor</option>
      <option value="1st Floor">1st Floor</option>
    </select>
  </div>
);

export default SelectLab;
