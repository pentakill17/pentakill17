import React from 'react' //rafce

import { Navbar, Header, Footer, Home, Aboutme, Portfolio } from './components';

import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Header/>
                <Navbar/>

                <Home/>

                <Footer /> 
            </div>
                
            
            
        </div>
    )
}

export default App
