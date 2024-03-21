"use client";

import { useState } from "react";
import Button from "../button/button";
import styles from "./modal.module.css";

type ModalProps = {
	itsModalOpen?: boolean;
	setCloseModal: (value: boolean) => void;
	cpfModalText?: string;
};

const Modal = ({ itsModalOpen, cpfModalText, setCloseModal }: ModalProps) => {
	const [itsOpen, setItsOpen] = useState(false);

	const closeModal = () => {
		setCloseModal(!itsModalOpen);
	};

	return (
		<div
			className={styles.modalContainer}
			style={{ display: `${itsOpen ? "block" : "none"}` }}
		>
			<div className={styles.modalContentContainer}>
				<div className={styles.modalContent}>
					<div className={styles.text}>
						<p>
							O seu CPF é o <span>XXX.XXX.XXX-XX?</span>
						</p>
					</div>
					<div className={styles.containerButtons}>
						<Button handleClick={closeModal}>Sim</Button>
						<Button handleClick={closeModal}>Não</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
