import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import './ProfileDetail.css';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WorkIcon from '@mui/icons-material/Work';

const ProfileDetails = () => {
  const [profile] = useState({
    name: 'Anitha sri R',
    location: 'Erode | Tamil Nadu | India',
    age: 23,
    gender: 'Female',
    status: 'Active',
    role: 'Software tester',
    email: 'clay.jensen@email.com',
    contact: '+6369305768',
    linkedIn: 'Anitha sri R'
  });

  return (
    <Grid container spacing={2} className="profile-details">
      <Grid item xs={12}>
        <h2>{profile.name}</h2>
      </Grid>
      <Grid item xs={12}>
        <p><span role="img" aria-label="flag">{profile.location}</span></p>
      </Grid>
      <Grid item xs={12}>
        <p>Age: {profile.age} | Gender: {profile.gender} | Status:  <span className="status-active">{profile.status}</span></p>
      </Grid>
      <Grid item xs={12}>
        <div className="profile-item">
          <WorkIcon className="icon-style" />
          <strong>Role:</strong>
          <span className="space">{profile.role}</span>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className="profile-item">
          <EmailIcon className="icon-style" />
          <strong>Email:</strong>
          <span className="space">{profile.email}</span>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className="profile-item">
          <PhoneIcon className="icon-style" />
          <strong>Contact:</strong>
          <span className="space">{profile.contact}</span>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className="profile-item">
          <LinkedInIcon className="icon-style" />
          <strong>LinkedIn:</strong>
          <span className="space">{profile.linkedIn}</span>
        </div>
      </Grid>
      <Grid item xs={12}>
        <hr />
      </Grid>
    </Grid>
  );
};

export default ProfileDetails;
