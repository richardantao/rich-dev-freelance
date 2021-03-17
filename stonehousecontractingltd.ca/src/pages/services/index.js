import React from "react";
import { StaticImage } from "gatsby-plugin-image";

/* Assets */
import designIcon from "images/design-icon.png";
import buildIcon from "images/build-icon.png";
import landscapeIcon from "images/landscape-icon.png";

import designImage from "images/services-design.jpg";
import buildImage from "images/services-build.jpg";
import landscapeImage from "images/services-landscape.jpg";

/* Components */
import Page from "templates/Page";

/* Styles */
import "styles/global.scss";
import "./styles.scss";

const REM = 16;

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
					<StaticImage src="../../images/design-icon.png" placeholder="blurred" alt="" height={3 * REM} width={3 * REM} />
					<h3>Design</h3>
					<p>
						description
						</p>
					<a href="/gallery">Design</a>
				</div>
				<div className="services-image">
					<StaticImage src={designImage} height={200} width={200} />
				</div>
			</section>
			<section id="build">
				<div className="services-image">
					<StaticImage src={buildImage} />
				</div>
				<div className="services-description">
					<StaticImage src={buildIcon} alt="" />
					<h3>Build</h3>
					<p>
						description
					</p>
					<a href="/gallery">Build</a>
				</div>
			</section>
			<section id="landscaping">
				<div className="services-description">
					<StaticImage src={landscapeIcon} alt="" />
					<h3>Landscaping</h3>
					<p>
						description
					</p>
					<a href="/gallery">Landscaping</a>
				</div>
				<div className="services-image">
					<StaticImage src={landscapeImage} />
				</div>
			</section>
		</div>
	</Page>;

export default Services;