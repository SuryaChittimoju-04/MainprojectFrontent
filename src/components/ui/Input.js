import React from 'react';

const InputField = ({ type, placeholder, value, onChange, maxLength }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      className="border-2 border-black rounded-lg p-2"
    />
  );
};

export default InputField;
