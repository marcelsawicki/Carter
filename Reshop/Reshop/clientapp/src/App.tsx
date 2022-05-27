import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TasksList from './components/TasksList';

function App() {
  return (
    <div className="App">
          <NavBar />
          <TasksList />
    </div>
  );
}

export default App;
