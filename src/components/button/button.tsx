"use client";

import React from "react";
import styles from "./button.module.css";

type ButtonProps = {
	children: string;
	handleClick: () => void;
};

const Button = ({ children, handleClick }: ButtonProps) => {
	return (
		<button onClick={handleClick} className={styles.button}>
			{children}
		</button>
	);
};

export default Button;
