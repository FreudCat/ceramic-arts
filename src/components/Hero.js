import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
	return (
		<div className="hero-holder row p-0 g-0 m-0">
			<StaticImage
				src="../images/transparent-koi.png"
				alt="10 ceramic koi"
				placeholder="none"
				layout="constrained"
				className="my-hero-image offset-1 col-7 p-0 g-0 m-0 offset-md-3 col-md-3 d-flex align-items-start"
				imgStyle={{ objectFit: "contain" }}
			/>
			<h1 className="col-4 pt-5">VL Ceramic Arts</h1>
		</div>
	);
};

export default Hero;
