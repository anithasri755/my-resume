// src/App.js
import React from 'react';
import ProfileHeader from './components/ProfileHeader';
import ProfileDetails from './components/ProfileDetails';
import RecentActivities from './components/RecentActivities';
import YourActivities from './components/YourActivities';
import EditProfileButton from './components/EditProfileButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <ProfileHeader />
      <div className="profile-container">
        <ProfileDetails />
        <EditProfileButton />
        <YourActivities />
        <RecentActivities />
      </div>
    </div>
  );
}

export default App;

