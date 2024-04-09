"use client";
import { useState } from "react";
import styles from "./input.module.css";

type InputProps = {
	typeInput: string;
	name: string;
	placeHolder: string;
	value: string;
	changeValue: (value: any) => void;
	errorMessage?: string;
	showErrorMessage?: boolean;
};

const Input = ({
	typeInput,
	name,
	placeHolder,
	value,
	changeValue,
	errorMessage,
	showErrorMessage,
}: InputProps) => {
	return (
		<>
			<div>
				<p className={styles.errorMessage}>
					{showErrorMessage && errorMessage}
				</p>
				<input
					className={styles.input}
					style={{ color: `${showErrorMessage ? "#ff5555" : ""}` }}
					value={value}
					onChange={changeValue}
					placeholder={placeHolder}
					name={name}
					type={typeInput}
				/>
			</div>
		</>
	);
};

export default Input;
