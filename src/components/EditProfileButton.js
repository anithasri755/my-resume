// src/components/EditProfileButton.js
import React from 'react';
import './EditProfileButton.css';
import EditIcon from '@mui/icons-material/Edit';  // Import the Material-UI Edit icon


const EditProfileButton = () => {
  return (
    <button className="edit-profile-button">
      <EditIcon style={{ marginRight: '4px', color: 'white', fontSize: '12px' }} /> Edit Profile
    </button>
  );
};

export default EditProfileButton;
