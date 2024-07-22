
import React from 'react';

import './ProfileHeader.css';
import profilePic from '../assets/T01054SFSAG-U040PMXH1GC-0248e38ebc2c-512.jpg';

const ProfileHeader = () => {
  return (
    <div className="profile-header">
       <img src={profilePic} alt="Profile" className="profile-pic" />
      <div className="header-background"></div>
    </div>
  );
};


export default ProfileHeader;