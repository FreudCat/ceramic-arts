import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/navbar";
import { StaticImage } from "gatsby-plugin-image";
import "../custom.css";

const App = () => {
	return (
		<div className="container">
			<Navbar />
			<Hero />
		</div>
	);
};

export default App;
