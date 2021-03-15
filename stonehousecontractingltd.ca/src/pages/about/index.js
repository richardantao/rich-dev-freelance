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
			<div id="about-description">
				<h2>About Us</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Vivamus lacinia feugiat leo, quis fermentum turpis venenatis tincidunt.
					Aenean suscipit tellus sed augue varius, sed elementum lectus dictum.
					Vivamus aliquet venenatis rhoncus. Nulla dignissim viverra facilisis.
					Praesent sagittis mattis sapien, suscipit interdum nisi condimentum at.
					In imperdiet odio sit amet ante ullamcorper finibus.
					Duis scelerisque, quam quis tempor tempor, ex enim facilisis massa, lobortis blandit dolor ipsum vitae tortor.
					Fusce in ex turpis. Integer eget felis quis turpis dapibus feugiat in in mi. Integer quis faucibus augue.
					Mauris finibus feugiat convallis. Donec quam magna, luctus vulputate elit ac, rutrum egestas lectus.
					Sed id fringilla tortor, vitae consequat orci.
					Suspendisse consequat nibh nunc, sed pretium odio tincidunt vel.
				</p>
				<p>
					Aliquam malesuada sapien sit amet nulla eleifend, sed pulvinar odio scelerisque.
					Sed tincidunt mi in eleifend lacinia. Donec quam magna, egestas id ex at, cursus auctor ex.
					Donec vitae aliquam risus. Nullam eget tortor eu metus tincidunt fringilla ac eu neque.
					Cras tincidunt ipsum sit amet turpis tempus, in efficitur ante efficitur.
					Etiam convallis, nisl eget tincidunt commodo, sem ante volutpat nunc, in accumsan risus sem ullamcorper enim.
					Nulla sem sapien, posuere eu velit ut, finibus imperdiet neque. Sed vehicula non odio vel accumsan.
					Quisque suscipit eleifend vehicula. Vivamus dignissim non mauris vel pulvinar.
				</p>
			</div>
			<div id="about-showcase">
				image here
			</div>
		</main>
		<Footer />
	</>

export default About;