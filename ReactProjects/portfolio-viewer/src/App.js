import React from 'react' //rafce

import { Article, Navbar } from './components';
import { Header, Footer } from './containers';


const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
                <Footer /> 
            
            
        </div>
    )
}

export default App
