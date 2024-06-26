"use client";

import Input from "@/components/input/input";
import styles from "./search-page.module.css";
import { useContext, useState } from "react";
import Button from "../button/button";
import Modal from "../modal/modal";
import formatCpfHelper from "@/helpers/format-cpf-helper";
import changeValueToCpfFormat from "@/helpers/change-value-to-cpf-format";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import { cookies } from "next/headers";
import setCookies from "@/actions/setCookies";

type SearchPageProps = {
	idEvent?: number;
};

const SearchPage = ({ idEvent }: SearchPageProps) => {
	const [inputValue, setInputValue] = useState("");
	const [openModal, setOpenModal] = useState(false);
	const [showErrorMessage, setShowErrorMessage] = useState(false);
	const router = useRouter();

	const handleChangeInputValue = (event: Event) => {
		if (inputValue.length === 1) {
			setShowErrorMessage(false);
		}

		const inputTarget = event.target as HTMLInputElement;
		if (inputTarget) {
			const cpfWithOnlyNumbers = formatCpfHelper(inputTarget.value);
			const cpfFormatted = changeValueToCpfFormat(cpfWithOnlyNumbers);
			setInputValue(cpfFormatted);
		}
	};

	const handleValidateCPF = () => {
		setShowErrorMessage(false);
		if (inputValue.length < 14) {
			setShowErrorMessage(true);
		} else {
			setShowErrorMessage(false);
			setOpenModal(true);
		}
	};

	const handleCloseModal = () => {
		setOpenModal(false);
		setInputValue("");
	};

	const redirectUser = async () => {
		const cpfFormatted = formatCpfHelper(inputValue);
		await setCookies("cpf", cpfFormatted);
		router.push("user/events");
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
					errorMessage='Digite um CPF válido.'
					value={inputValue}
					name='searchInput'
					placeHolder='Digite aqui o seu CPF'
					typeInput='text'
					changeValue={handleChangeInputValue}
					showErrorMessage={showErrorMessage}
				/>
				<Button handleClick={handleValidateCPF}>Buscar</Button>
			</div>
			<Modal
				cpfModalText={inputValue}
				redirectUser={redirectUser}
				idEvent={idEvent}
				handleCloseModal={handleCloseModal}
				itsModalOpen={openModal}
			/>
		</section>
	);
};

export default SearchPage;
