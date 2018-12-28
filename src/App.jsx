import React, { Component } from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Welcome from './Components/Welcome';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="Site-content">
                    <Navbar/>
                    <Welcome/>
                    <About/>
                    <Services/>
                    <Contact/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
