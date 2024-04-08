"use client";

import { useState } from "react";
import Button from "../button/button";
import styles from "./modal.module.css";
import { useRouter } from "next/navigation";

type ModalProps = {
	itsModalOpen?: boolean;
	handleCloseModal: () => void;
	cpfModalText?: string;
};

const Modal = ({ itsModalOpen, handleCloseModal }: ModalProps) => {
	const router = useRouter();
	const redirectUser = () => {
		handleCloseModal();
		router.push("/home");
	};
	return (
		<div
			className={styles.modalContainer}
			style={{ display: `${itsModalOpen ? "block" : "none"}` }}
		>
			<div className={styles.modalContentContainer}>
				<div className={styles.modalContent}>
					<div className={styles.text}>
						<p>
							O seu CPF é o <span>XXX.XXX.XXX-XX?</span>
						</p>
					</div>
					<div className={styles.containerButtons}>
						<Button handleClick={redirectUser}>Sim</Button>
						<Button secondaryButton handleClick={handleCloseModal}>
							Não
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
