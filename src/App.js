import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Registration from './Components/Registeration';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <div className="outer">
        <div className="inner">
          <Registration/>
        
        </div>
      </div>
    </div>
  );
}

export default App;