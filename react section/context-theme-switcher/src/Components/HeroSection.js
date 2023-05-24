import React, { useContext } from "react";
import ThemeCotext from "../Context/ThemeContext";
import AppTheme from "../Colors";

const HeroSection = () => {
	const theme = useContext(ThemeCotext)[0];
	const currentTheme = AppTheme[theme];

	return (
		<div
			style={{
				padding: "1rem",
				backgroundColor: `${currentTheme.backgroundColor}`,
				color: `${currentTheme.textColor}`,
				textAlign: "center",
			}}
		>
			<h1>context API theme toggler</h1>
			<p
				style={{
					backgroundColor: "#26are60",
					padding: "10px 150px",
					fontSize: "20px",
					color: "#fff",
					border: `${currentTheme.border}`,
				}}
			>
				This is a nice paragraph
			</p>
			<button>Click me</button>
		</div>
	);
};

export default HeroSection;
