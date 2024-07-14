// src/components/YourActivities.js
import React from 'react';
import './YourActivities.css';

const YourActivities = () => {
  return (
    <div className="your-activities">
      <h3>Personal-info </h3>
      <p></p>
      <h1> </h1>
      <div className="profile-item1">
        <strong>Date of Birth :</strong>
        <span className="space1">27.07.2000</span>
      </div>
      <div className="profile-item1">
        <strong>Father's Name :</strong>
        <span className="space1">Rajendran.G</span>
      </div>
      <div className="profile-item1">
        <strong>Blood Group :</strong>
        <span className="space1">B+</span>
      </div>
      <div className="profile-item1">
        <strong>Hobbies :</strong>
        <span className="space1">Badminton</span>
      </div>
      <hr /> {/* Horizontal line */}
    </div>
  );
};

export default YourActivities;

