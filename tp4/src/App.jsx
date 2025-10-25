import React from 'react';
import UserProvider from './context/UserContext';
import UserProfile from './UserProfile';
import Notifications from './Notifications';
import NotificationCounter from './NotificationCounter';

function App() {
  return (
    <UserProvider>
      <div style={{ fontFamily: 'Arial', padding: 20 }}>
        <h1>Mon Application React</h1>
        <UserProfile />
        <Notifications />
        <NotificationCounter />
      </div>
    </UserProvider>
  );
}

export default App;
