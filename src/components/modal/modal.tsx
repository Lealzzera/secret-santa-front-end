"use client";

import Button from "../button/button";
import styles from "./modal.module.css";
import { useRouter } from "next/navigation";
import { getUserEvent } from "@/api/api";

type ModalProps = {
	itsModalOpen?: boolean;
	handleCloseModal: () => void;
	cpfModalText?: string;
};

const Modal = ({ itsModalOpen, handleCloseModal }: ModalProps) => {
	const router = useRouter();
	const redirectUser = async () => {
		handleCloseModal();
		const response = await getUserEvent();
		console.log(response.data);
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
