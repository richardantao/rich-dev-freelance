import React from "react";
import { Helmet } from "react-helmet";

/* Components */
import ImageGallery from "react-image-gallery";
import Nav from "components/Nav";
import Footer from "components/Footer";

// import images from "./images";

import "styles/global.scss";
import "./styles.scss";

const Gallery = () =>
	<>
		<Helmet>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="description" content="" />
			<meta name="keywords" content="" />
			<meta name="author" content="Richard Antao" />
			<meta name="application-name" content="Stone House Contracting Ltd." />
			<title>Gallery</title>
		</Helmet>
		<Nav />
		<main id="gallery" role="main">
			Gallery page
		</main>
		<Footer />
	</>

export default Gallery;