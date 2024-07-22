// src/components/EditProfileButton.js
import React from 'react';
import './EditProfileButton.css';
import EditIcon from '@mui/icons-material/Edit';  
const EditProfileButton = () => {
  return (
    <button className="edit-profile-button">
      <EditIcon style={{ marginRight: '4px', color: 'white', fontSize: '12px' }} /> Edit Profile
    </button>
  );
};
export default EditProfileButton;

