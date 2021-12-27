import React from 'react'
import './navbar.css';

const Navbar = () => {
    return (
        <div>
            <div class="site-menu-warp">
			<div class="close-menu">x</div>
			
			<ul class="site-menu">
				<li><a href="index.html" class="active">Home</a></li>
				<li><a href="about.html">About Me</a></li>
				<li><a href="blog.html">Blog</a></li>
				<li><a href="portfolio.html">Portfolio</a></li>
				<li><a href="contact.html">Contact</a></li>
				<li><a href="elements.html">Elements</a></li>
			</ul>
			<div class="menu-social">
				<a href=""><i class="fa fa-pinterest"></i></a>
				<a href=""><i class="fa fa-facebook"></i></a>
				<a href=""><i class="fa fa-twitter"></i></a>
				<a href=""><i class="fa fa-dribbble"></i></a>
				<a href=""><i class="fa fa-behance"></i></a>
			</div>
		</div>
        </div>
    )
}

export default Navbar
