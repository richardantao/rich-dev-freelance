import React from "react"
import { Helmet } from "react-helmet"

import Nav from "components/Nav";
import Footer from "components/Footer";
import Carousel from "components/Carousel";


import images from "pages/gallery/images";

import "./styles.scss";

const Index = () => {
	return (
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
				{/* <Carousel>
					{images.map(({ original }) => <img src={original} />)}
				</Carousel> */}
			</main>
			<Footer />
		</>
	);
};

export default Index;