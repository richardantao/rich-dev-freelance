import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import Nav from "components/Nav";
import Footer from "components/Footer";

const Page = ({
	children,
	description,
	keywords,
	title,
	id
}) =>
	<>
		<Helmet>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<meta name="author" content="Richard Antao" />
			<meta name="application-name" content="Stone House Contracting Ltd." />
			<title>{title}</title>
		</Helmet>
		<Nav />
		<main id={id} role="main">
			{children}
		</main>
		<Footer />
	</>;

Page.propTypes = {
	description: PropTypes.string.isRequired,
	keywords: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};

export default Page;