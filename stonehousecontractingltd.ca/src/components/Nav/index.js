import React from "react";

import "./styles.scss";

import logo from "images/icon.png"

const Nav = () =>
	<nav id="nav" role="navigation">
		<a href="/">
			<img id="logo" src={logo} alt="Stone House Contracting logo" />
		</a>
		<div className="nav-links">
			<a href="/">Home</a>
			<a href="/services">Services</a>
			<a href="/gallery">Gallery</a>
			<a href="/about">About</a>
			<a href="/contact">Contact</a>
		</div>
	</nav>;

export default Nav;