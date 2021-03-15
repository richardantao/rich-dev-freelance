import React from "react"
import { Helmet } from "react-helmet"

import Nav from "components/Nav";
import Footer from "components/Footer";
import Card from "components/Card";


import hero from "images/hero.jpg";
import "./styles.scss";

const Index = () =>
	<>
		<Helmet>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="description" content="" />
			<meta name="keywords" content="" />
			<meta name="author" content="Richard Antao" />
			<meta name="application-name" content="Stone House Contracting Ltd." />
			<title>Home</title>
		</Helmet>
		<Nav />
		<main id="home" role="main">
			<section id="hero">
				<img src={hero} />
				<a id="cta" href="/services">
					See More
				</a>
			</section>
			<section id="services">
				<Card>
					build
				</Card>
				<Card>
					design
				</Card>
				<Card>
					landscaping
				</Card>
			</section>
			<section id="samples" style={{
				background: "pink",
				height: 100,
			}}>
				Preview gallery images here
			</section>
		</main>
		<Footer />
	</>;

export default Index;