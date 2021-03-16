import React from "react";

import Page from "templates/Page";

import "styles/global.scss";
import "./styles.scss";

import designIcon from "images/design-icon.png";
import buildIcon from "images/build-icon.png";
import landscapeIcon from "images/landscape-icon.png";

const Services = () =>
	<Page
		description=""
		keywords=""
		title="Services"
		id="services"
	>
		<section id="intro">
			<h1>Services</h1>
			<h2>What We Offer</h2>
			<p>
				Maecenas finibus nibh id ipsum ornare, eget volutpat nisi commodo. Aliquam condimentum vel mi vel ullamcorper.
				Proin rhoncus sapien quis dolor convallis efficitur. Vestibulum imperdiet sagittis molestie. In hac habitasse platea dictumst.
				Mauris pretium tortor vel augue vulputate malesuada. Praesent sit amet risus urna.
				</p>
		</section>
		<div id="services-grid">
			<section id="design">
				<div className="services-description">
					<img src={designIcon} alt="" />
					<h3>Design</h3>
					<p>
						description
						</p>
					<a href="/gallery">Design</a>
				</div>
				<div className="services-image">
					<img />design picture here
				</div>
			</section>
			<section id="build">
				<div className="services-image">
					<img />build picture here
				</div>
				<div className="services-description">
					<img src={buildIcon} alt="" />
					<h3>Build</h3>
					<p>
						description
					</p>
					<a href="/gallery">Build</a>
				</div>
			</section>
			<section id="landscaping">
				<div className="services-description">
					<img src={landscapeIcon} alt="" />
					<h3>Landscaping</h3>
					<p>
						description
					</p>
					<a href="/gallery">Landscaping</a>
				</div>
				<div className="services-image">
					<img />landscaping picture here
				</div>
			</section>
		</div>
	</Page>;

export default Services;