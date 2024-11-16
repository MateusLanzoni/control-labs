import React from 'react';

const InputField = ({ label, value, onChange, type = "text" }) => (
  <div className="form-group">
    <label>{label}</label>
    <input type={type} value={value} onChange={onChange} required />
  </div>
);

export default InputField;
