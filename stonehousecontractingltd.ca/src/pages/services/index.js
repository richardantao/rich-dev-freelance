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
			<section id="intro">
				<h1>Services</h1>
				<h2>What We Offer</h2>
				<p>
					Maecenas finibus nibh id ipsum ornare, eget volutpat nisi commodo. Aliquam condimentum vel mi vel ullamcorper.
					Proin rhoncus sapien quis dolor convallis efficitur. Vestibulum imperdiet sagittis molestie. In hac habitasse platea dictumst.
					Mauris pretium tortor vel augue vulputate malesuada. Praesent sit amet risus urna.
				</p>
			</section>
			<section id="design">
				<h3>Design</h3>
				<p>Pellentesque quis odio maximus, sagittis nibh a, varius dolor. Nam elit orci, tempus nec metus gravida, volutpat finibus orci. Mauris id velit velit. Maecenas ornare nisl nec nulla dignissim, vel dictum leo imperdiet. Duis iaculis facilisis mi, sit amet dapibus lacus euismod ac. Quisque tempor purus at auctor malesuada. Ut ut purus in massa malesuada molestie. Mauris lorem felis, congue quis eleifend non, dignissim nec ligula. Donec interdum pharetra turpis a tempus. Donec eu lacinia nunc.</p>
				<p>Fusce a nulla libero. Aenean ullamcorper massa nec lacus vehicula viverra. Cras sit amet rutrum enim, vitae auctor purus. Nunc sit amet commodo velit. Phasellus facilisis rhoncus erat et hendrerit. Sed malesuada ligula ac lectus facilisis, eu gravida metus vulputate. Ut vitae placerat libero.</p>
			</section>
			<section id="build">
				<h3>Build</h3>
				<p>Pellentesque quis odio maximus, sagittis nibh a, varius dolor. Nam elit orci, tempus nec metus gravida, volutpat finibus orci. Mauris id velit velit. Maecenas ornare nisl nec nulla dignissim, vel dictum leo imperdiet. Duis iaculis facilisis mi, sit amet dapibus lacus euismod ac. Quisque tempor purus at auctor malesuada. Ut ut purus in massa malesuada molestie. Mauris lorem felis, congue quis eleifend non, dignissim nec ligula. Donec interdum pharetra turpis a tempus. Donec eu lacinia nunc.</p>
				<p>Fusce a nulla libero. Aenean ullamcorper massa nec lacus vehicula viverra. Cras sit amet rutrum enim, vitae auctor purus. Nunc sit amet commodo velit. Phasellus facilisis rhoncus erat et hendrerit. Sed malesuada ligula ac lectus facilisis, eu gravida metus vulputate. Ut vitae placerat libero.</p>
			</section>
			<section id="landscaping">
				<h3>Landscaping</h3>
				<p>Pellentesque quis odio maximus, sagittis nibh a, varius dolor. Nam elit orci, tempus nec metus gravida, volutpat finibus orci. Mauris id velit velit. Maecenas ornare nisl nec nulla dignissim, vel dictum leo imperdiet. Duis iaculis facilisis mi, sit amet dapibus lacus euismod ac. Quisque tempor purus at auctor malesuada. Ut ut purus in massa malesuada molestie. Mauris lorem felis, congue quis eleifend non, dignissim nec ligula. Donec interdum pharetra turpis a tempus. Donec eu lacinia nunc.</p>
				<p>Fusce a nulla libero. Aenean ullamcorper massa nec lacus vehicula viverra. Cras sit amet rutrum enim, vitae auctor purus. Nunc sit amet commodo velit. Phasellus facilisis rhoncus erat et hendrerit. Sed malesuada ligula ac lectus facilisis, eu gravida metus vulputate. Ut vitae placerat libero.</p>
			</section>
			<section id="gallery">
				<a href="/gallery">See Gallery</a>
				*Show a preview of the gallery*
			</section>
		</main>
		<Footer />
	</>

export default Services;