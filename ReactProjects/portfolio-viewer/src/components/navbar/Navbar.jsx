import React from 'react'
import './navbar.css';



/*
import '../../App.css';
import '../../css/style.css';
import '../../css/font-awesome.min.css';
import '../../css/bootstrap.min.css';
import '../../css/magnific-popup.css';
import '../../css/owl.carousel.min.css';
*/


const Navbar = () => {
	return (


		<div className="sidebar close">

			<div className="logo-details">
				<i className='bx bxl-c-plus-plus icon'></i>
				<span className="logo_name">CodingLab</span>
			</div>

			<ul className="nav-links">
				<li>
					<a href="/Header.jsx">
						<i className='bx bx-home'></i>
						<span className="link_name">Home</span>
					</a>
					<ul className="sub-menu blank">
						<li><a href="#">Home</a></li>
					</ul>

				</li>

				<li>
					<a href="#">
						<i className='bx bx-face' ></i>
						<span className="link_name">About Me</span>
					</a>
					<ul className="sub-menu blank">
						<li><a href="#">About Me</a></li>
					</ul>
				</li>
				<li>
					<a href="#">
					<i className='bx bx-collection' ></i>
						<span className="link_name">Portfolio</span>
					</a>
					<ul className="sub-menu blank">
						<li><a href="#">Portfolio</a></li>
					</ul>
				</li>
				<li>
					<a href="#">
						<i className='bx bxs-contact'></i>
						<span className="link_name">Contact Me</span>
					</a>
					<ul className="sub-menu blank">
						<li><a href="#">Contact Me</a></li>
					</ul>
				</li>


			</ul>


			dd
		</div>


	)
}

export default Navbar

/*
<div className="sidebar">
			<div className="logo-details">
				<i className='bx bxl-c-plus-plus icon'></i>
				<div className="logo_name">CodingLab</div>
				<i className='bx bx-menu' id="btn" ></i>
			</div>
			<ul className="nav-list">


				<li>
					<a href="/Header.jsx">
						<i className='bx bx-home'></i>
						<span className="links_name">Home</span>
					</a>
					<span className="tooltip">Home</span>
				</li>

				<li>
					<a href="#">
						<i className='bx bx-face' ></i>
						<span className="links_name">About Me</span>
					</a>
					<span className="tooltip">About Me</span>
				</li>
				<li>
					<a href="#">
					<i className='bx bx-collection' ></i>
						<span className="links_name">Portfolio</span>
					</a>
					<span className="tooltip">Portfolio</span>
				</li>
				<li>
					<a href="#">
						<i className='bx bxs-contact'></i>
						<span className="links_name">Contact Me</span>
					</a>
					<span className="tooltip">Contact Me</span>
				</li>



				<li className="profile">
					<div className="profile-details">

						<div className="name_job">
							<div className="name">Prem Shahi</div>
							<div className="job">Web designer</div>
						</div>
					</div>
					<i className='bx bx-log-out' id="log_out" ></i>
				</li>
			</ul>
		</div>*/