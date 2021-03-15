import React from "react";
import { Helmet } from "react-helmet"

import Nav from "components/Nav";
import Footer from "components/Footer";

import "styles/global.scss";
import "./styles.scss";

const About = () =>
	<>
		<Helmet>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="description" content="" />
			<meta name="keywords" content="" />
			<meta name="author" content="Richard Antao" />
			<meta name="application-name" content="Stone House Contracting Ltd." />
			<title>About</title>
		</Helmet>
		<Nav />
		<main id="about" role="main">
			About Page
		</main>
		<Footer />
	</>

export default About;