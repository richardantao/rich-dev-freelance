import React from "react";

import "./styles.scss";

const Nav = () =>
	<nav id="nav" role="navigation">
		<a href="/">
			<img src="" />
		</a>
		<div className="nav-links">
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/services">Services</a>
			<a href="/gallery">Gallery</a>
			<a href="/contact">Contact</a>
		</div>
	</nav>;

export default Nav;