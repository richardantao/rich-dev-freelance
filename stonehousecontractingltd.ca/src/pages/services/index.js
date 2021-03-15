import React from "react";
import { Helmet } from "react-helmet"

import Nav from "components/Nav";
import Footer from "components/Footer";

import "styles/global.scss";
import "./styles.scss";

const Services = () =>
	<>
		<Helmet>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="description" content="" />
			<meta name="keywords" content="" />
			<meta name="author" content="Richard Antao" />
			<meta name="application-name" content="Stone House Contracting Ltd." />
			<title>Services</title>
		</Helmet>
		<Nav />
		<main id="services" role="main">
			<section id="design">
				<h2>Design</h2>
			</section>
			<section id="build">
				<h2>Build</h2>
			</section>
			<section id="landscaping">
				<h2>Landscaping</h2>
			</section>
			<section id="gallery">
				<a href="/gallery">See Gallery</a>
			</section>
		</main>
		<Footer />
	</>

export default Services;