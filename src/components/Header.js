import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Header extends Component {
    render() {
        return (
            <div>
			<header id="header">
				<div className="inner">
					<a href="index.html" className="logo">introspect</a>
					<nav id="nav">
						<a href="index.html">Home</a>
						<a href="generic.html">Generic</a>
						<a href="elements.html">Elements</a>
					</nav>
				</div>
			</header>
			<a href="#menu" className="navPanelToggle"><span className="fa fa-bars"> </span></a>
            </div>
        );
    }
}

export default Header;