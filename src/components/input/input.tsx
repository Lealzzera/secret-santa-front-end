"use client";
import styles from "./input.module.css";

type InputProps = {
	typeInput: string;
	name: string;
	placeHolder: string;
	value: string;
	changeValue: (value: any) => void;
};

const Input = ({
	typeInput,
	name,
	placeHolder,
	value,
	changeValue,
}: InputProps) => {
	return (
		<>
			<input
				className={styles.input}
				value={value}
				onChange={changeValue}
				placeholder={placeHolder}
				name={name}
				type={typeInput}
			/>
		</>
	);
};

export default Input;
