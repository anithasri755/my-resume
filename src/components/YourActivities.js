import React, { useState } from 'react';
import './YourActivities.css';

const YourActivities = () => {
  const [personalInfo] = useState({
    dateOfBirth: '27.07.2000',
    fathersName: 'Rajendran.G',
    bloodGroup: 'B+',
    hobbies: 'Badminton'
  });
  
  return (
    <div className="your-activities">
      <h3>Personal-info</h3>
      <div className="profile-item1">
        <strong>Date of Birth :</strong>
        <span className="space1">{personalInfo.dateOfBirth}</span>
      </div>
      <div className="profile-item1">
        <strong>Father's Name :</strong>
        <span className="space1">{personalInfo.fathersName}</span>
      </div>
      <div className="profile-item1">
        <strong>Blood Group :</strong>
        <span className="space1">{personalInfo.bloodGroup}</span>
      </div>
      <div className="profile-item1">
        <strong>Hobbies :</strong>
        <span className="space1">{personalInfo.hobbies}</span>
      </div>
      <hr /> {/* Horizontal line */}
    </div>
  );
};

export default YourActivities;
