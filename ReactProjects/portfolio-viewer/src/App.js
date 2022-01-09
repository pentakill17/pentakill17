import React, { Component } from 'react' //rafce

import { Navbar, Header, Footer, Home, Aboutme, Portfolio, MyContact } from './components';

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";

import './App.css';
//import './css/style.css'
//import './css/font-awesome.min.css';
//import './css/bootstrap.min.css';
//import './css/magnific-popup.css';
//import './css/owl.carousel.min.css';


/*
import './css/bootstrap.min.css';
import './css/magnific-popup.css';
import './css/owl.carousel.min.css';
import './css/slicknav.min.css';*/

function hello() {
	console.log('hi');
}

const App = () => {




	return (
		<div>
			<Navbar />
			<Header />
			<div className="changing-page">
			
			
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/aboutme" element={<Aboutme />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/contactme" element={<MyContact />} />
					<Route path="/home" element={<Home />} />
				</Routes>
			</div>

			<Footer />
		</div>
	)
}

export default App
