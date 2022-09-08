import React from "react";
import logo from "../assets/react.svg";
import styles from "./Navbar.module.css";

function Navbar({ darkMode, onDark }) {
	return (
		<nav className={`${styles.navbar} ${onDark ? styles.dark : ""}`}>
			<img src={logo} />
			<h3 className="">ReactFacts</h3>

			<div className={styles.toggler}>
				<p className={styles.togglerLight}>Light</p>
				<div className={styles.togglerSlider} onClick={darkMode}>
					<div className={styles.togglerSliderCircle}></div>
				</div>
				<p className={styles.togglerDark}>Dark</p>
			</div>
		</nav>
	);
}

export default Navbar;
// props.darkMode ? "dark" : ""}
// props.toggleDarkMode
