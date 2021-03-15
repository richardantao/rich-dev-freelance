import React from "react"
import { Helmet } from "react-helmet"

import Nav from "components/Nav";
import Footer from "components/Footer";
import Card from "components/Card";


import hero from "images/home-hero.jpg";
import design from "images/home-design.jpg";
import build from "images/home-build.jpg";
import landscaping from "images/home-landscape.jpg";
import designIcon from "images/design-icon.png";
import buildIcon from "images/build-icon.png";
import landscapeIcon from "images/landscape-icon.png";

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
				<div id="pitch">
					<div className="pitch-content">
						<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
					</div>
					<div className="pitch-content">
						<a id="cta" href="/services">
							See More
						</a>
					</div>
				</div>
			</section>
			<section id="services">
				<Card src={design}>
					<a href="/services#design">
						<img src={designIcon} alt="Design Icon" className="icon" />
						<p>
							Design
						</p>
					</a>
				</Card>
				<Card src={build}>
					<a href="/services#build">
						<img src={buildIcon} alt="Build Icon" className="icon" />
						<p>
							Build
						</p>
					</a>
				</Card>
				<Card src={landscaping}>
					<a href="/services#landscaping">
						<img src={landscapeIcon} alt="Landscape Icon" className="icon" />
						<p>
							Landscaping
						</p>
					</a>
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