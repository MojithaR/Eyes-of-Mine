// src/components/UserValidation.js
import React, { useState } from 'react';
import './UserValidation.css';

// cd 'D:\NodeJS\React_JS\Pracaa\practice01\src\'
//D:\NodeJS\React_JS\Pracaa\practice01\src\components\UserValidation.js
//nodemon components/UserValidation.js

function UserValidation() {
  const [employeeID, setEmployeeID] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [error, setError] = useState('');

  const validateUser = async () => {
    try {
      const response = await fetch('http://localhost:5000/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emp_id: employeeID }),
      });
      const data = await response.json();
      if (data.success) {
        setEmployeeName(data.name);
        setError('');
      } else {
        setEmployeeName('');
        setError(data.message);
      }
    } catch (err) {
      setError('Error connecting to the server');
    }
  };

  return (
    <div className="user-validation">
      <input
        type="text"
        placeholder="Enter Employee ID"
        value={employeeID}
        onChange={(e) => setEmployeeID(e.target.value)}
      />
      <button onClick={validateUser}>Validate User</button>
      {employeeName && <p>Employee Name: {employeeName}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default UserValidation;
