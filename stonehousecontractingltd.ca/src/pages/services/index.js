import React from "react";
import { StaticImage } from "gatsby-plugin-image";

/* Components */
import Page from "templates/Page";

/* Styles */
import "styles/global.scss";
import "./styles.scss";

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
					<StaticImage
						src="../../images/design-icon.png"
						alt=""
						placeholder="blurred"
						className="icon-wrapper"
						imgClassName="icon"
					/>
					<h3>Design</h3>
					<p>
						description
					</p>
					<a href="/gallery">Design</a>
				</div>
				<div className="services-image">
					<StaticImage
						src="../../images/services-design.jpg"
						alt=""
						placeholder="blurred"
					/>
				</div>
			</section>
			<section id="build">
				<div className="services-image">
					<StaticImage
						src="../../images/services-build.jpg"
						alt=""
						placeholder="blurred"
					/>
				</div>
				<div className="services-description">
					<div className="services-decription-content">
						<StaticImage
							src="../../images/build-icon.png"
							alt=""
							placeholder="blurred"
							className="icon-wrapper"
							imgClassName="icon"
						/>
						<h3>Build</h3>
						<p>
							description
						</p>
						<a href="/gallery">Build</a>
					</div>
				</div>
			</section>
			<section id="landscaping">
				<div className="services-description">
					<div className="services-decription-content">
						<StaticImage
							src="../../images/landscape-icon.png"
							alt=""
							placeholder="blurred"
							className="icon-wrapper"
							imgClassName="icon"
						/>
						<h3>Landscaping</h3>
						<p>
							description
						</p>
						<a href="/gallery">Landscaping</a>
					</div>
				</div>
				<div className="services-image">
					<StaticImage
						src="../../images/services-landscape.jpg"
						alt=""
						placeholder="blurred"
					/>
				</div>
			</section>
		</div>
	</Page >;

export default Services;