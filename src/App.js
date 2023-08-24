import React from 'react';
import './App.css';
import Login from './Login';
import { Routes, Route } from 'react-router-dom';
import '../src/custom.css'
export const UserContext = React.createContext();

function App() {

  return (
    <UserContext.Provider value={"Everyone"}>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login />}></Route>
        </Routes>
      </div>
    </UserContext.Provider>

  );
}

export default App;