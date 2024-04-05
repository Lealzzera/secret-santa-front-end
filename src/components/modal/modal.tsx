"use client";

import { useState } from "react";
import Button from "../button/button";
import styles from "./modal.module.css";

type ModalProps = {
	itsModalOpen?: boolean;
	setCloseModal: (value: boolean) => void;
	cpfModalText?: string;
};

const Modal = ({ itsModalOpen }: ModalProps) => {
	const [itsOpen, setItsOpen] = useState(false);

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
						<Button handleClick={() => console.log("sim")}>Sim</Button>
						<Button secondaryButton handleClick={() => console.log("Não")}>
							Não
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
