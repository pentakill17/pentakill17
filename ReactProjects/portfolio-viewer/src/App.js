import React from 'react' //rafce

import { Navbar, Header, Footer } from './components';

import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header name='reniel' age={2}/>
            </div>
                <Footer /> 
            
            
        </div>
    )
}

export default App
