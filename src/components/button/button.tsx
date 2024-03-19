"use client";

import React from "react";
import styles from "./button.module.css";

type ButtonProps = {
	children: string;
};

const Button = ({ children }: ButtonProps) => {
	return <button className={styles.button}>{children}</button>;
};

export default Button;
