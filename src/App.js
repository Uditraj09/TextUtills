
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [mode1, setMode1] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);

    }, 2000);

  }
  const toggleMode = (e) => {
    if (e.target.name === 'switch1') {
      if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#0b2b47';
        showAlert("Dark mode enabled!", "success");
        // document.title = "Textutils-Dark Mode";
        // setInterval(() => {
        //   document.title="Textutils is Amazing";
        // }, 1500);
      }
      else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode enabled!", "success");
        // document.title = "Textutils-LightMode";
        // setInterval(() => {
        //   document.title=" Insatll Textutils Now";
        // }, 2000);
      }
    } else {
      if (mode1 === 'light') {
        setMode1('green');
        document.body.style.backgroundColor = '#0af286';
        showAlert("Green mode enabled!", "success");
        document.title = "Textutils-GreenMode";
      }
      else {
        setMode1('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode enabled!", "success");
        document.title = "Textutils-LightMode";
      }
    }
  }

  return (

    <Router>
      <Navbar title="Textutils" aboutText="About us" toggleMode={toggleMode} mode={mode} />
      <Alert alert={alert} />
      <div className="container my-3" >
        
        <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>

          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter the text" mode={mode} />
          </Route>
        </Switch>
      </div>

    </Router>



  );
}


export default App;
