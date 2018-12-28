import React, { Component } from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Welcome from './Components/Welcome';
import Navbar from './Components/Navbar';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Navbar/>
                <Welcome/>
                <About/>
                <Services/>
                <Contact/>
            </div>
        );
    }
}

export default App;
