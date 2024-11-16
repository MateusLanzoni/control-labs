import React from 'react';

const TextArea = ({ label, value, onChange }) => (
  <div className="form-group">
    <label>{label}</label>
    <textarea value={value} onChange={onChange} required></textarea>
  </div>
);

export default TextArea;
