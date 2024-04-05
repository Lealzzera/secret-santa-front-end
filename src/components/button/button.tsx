"use client";

import React from "react";
import styles from "./button.module.css";

type ButtonProps = {
	children: string;
	handleClick: () => void;
	secondaryButton?: boolean;
};

const Button = ({ children, handleClick, secondaryButton }: ButtonProps) => {
	return (
		<button
			onClick={handleClick}
			className={styles.button}
			style={{
				backgroundColor: `${secondaryButton ? "#D20000" : ""}`,
				color: `${secondaryButton ? "#560000" : ""}`,
			}}
		>
			{children}
		</button>
	);
};

export default Button;
