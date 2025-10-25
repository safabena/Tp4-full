import React from 'react';
import Time from './Time';
import { ThemeProvider, ThemeToggle } from './ThemeToggle';
import UserList from './UserList';

function App() {
  return (
    <div style={{ fontFamily: 'Arial', padding: 20 }}>
      <h1>TP React – Découverte des Hooks</h1>

      <h2>Exercice 1 : Time</h2>
      <Time />

      <h2>Exercice 2 : ThemeToggle</h2>
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>

      <h2>Exercice 3 : UserList</h2>
      <UserList />
    </div>
  );
}

export default App;
