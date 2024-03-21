"use client";

import Input from "@/components/input/input";
import styles from "./search-page.module.css";
import { useState } from "react";
import Button from "../button/button";
import Modal from "../modal/modal";

const SearchPage = () => {
	const [inputValue, setInputValue] = useState("");
	const [itsModalOpen, setItsModalOpen] = useState(false);

	const handleChangeInputValue = (event: Event) => {
		const inputTarget = event.target as HTMLInputElement;
		if (inputTarget as HTMLInputElement) {
			setInputValue(inputTarget.value);
		}
	};

	const openModal = () => {
		setItsModalOpen(true);
	};

	return (
		<section className={styles.container}>
			<div>
				<h1 className={styles.title}>Amigo Secreto</h1>
			</div>
			<div className={styles.containerText}>
				<p>
					Bem-vindo ao sistema de amigo secreto, digite seu CPF no campo de
					texto abaixo para descobrir quem é o seu amigo secreto.
				</p>
			</div>
			<div className={styles.inputContainer}>
				<Input
					value={inputValue}
					name='searchInput'
					placeHolder='Digite aqui o seu CPF'
					typeInput='text'
					changeValue={handleChangeInputValue}
				/>
				<Button handleClick={openModal}>Buscar</Button>
			</div>
			<Modal itsModalOpen={itsModalOpen} setCloseModal={setItsModalOpen} />
		</section>
	);
};

export default SearchPage;
