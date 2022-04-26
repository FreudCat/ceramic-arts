module.exports = {
	siteMetadata: {
		title: "VL Ceramic Arts",
	},
	plugins: [
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {
				// Add any options here
			},
		},
	],
};
