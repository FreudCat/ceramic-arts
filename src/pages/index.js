import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Home() {
	return (
		<StaticImage
			src="../images/transparent-koi.png"
			alt="10 ceramic koi"
			placeholder="blurred"
			layout="fixed"
			width={200}
		/>
	);
}
