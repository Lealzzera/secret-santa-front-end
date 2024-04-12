"use client";

import React from "react";
import styles from "@/components/card-component/card-component.module.css";

type CardComponentProps = {
	title: string;
	description: string;
};

const CardComponent = ({ title, description }: CardComponentProps) => {
	return (
		<div className={styles.cardContainer}>
			<h1 className={styles.title}>{title}</h1>
			<p className={styles.description}>{description}</p>
		</div>
	);
};

export default CardComponent;
