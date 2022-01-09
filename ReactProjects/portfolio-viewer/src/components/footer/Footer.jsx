import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div>
            <div className="copyright"><p>
				Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
			</p></div>
            
        </div>
    )
}

export default Footer
