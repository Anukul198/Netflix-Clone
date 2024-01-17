import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import './App.css';
import Homescreen from './Homescreen';
import LoginScreen from "./LoginScreen";

function App() {
  const user = null;
  return (
    <div className="App">
      <Router>
        {
          !user ? (
          <LoginScreen/>
          ) :(
            <Routes>
        <Route path="/">
          <Homescreen/>
          </Route>
        </Routes>
          )
        }
        
          
        
    </Router>
    </div>
  );
}

export default App;
