const path = require("path");

module.exports = {
	siteMetadata: {
		title: "Stone House Contracting",
		siteUrl: `https://stonehousecontractingltd.ca`,
		description: "Showcase website for Stone House Contracting",
	},
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-gatsby-cloud",
		"gatsby-plugin-image",
		{
			resolve: "gatsby-plugin-google-analytics",
			options: {
				trackingId: "G-SFZELLBQ9L",
			},
		},
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/icon.png",
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-plugin-root-import",
			options: {
				src: path.join(__dirname, "src"),
				components: path.join(__dirname, "src/components"),
				images: path.join(__dirname, "src/images"),
				pages: path.join(__dirname, "src/pages"),
				styles: path.join(__dirname, "src/styles")
			}
		},
	],
};
