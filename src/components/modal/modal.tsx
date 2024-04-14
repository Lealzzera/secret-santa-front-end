"use client";

import Button from "../button/button";
import styles from "./modal.module.css";
import { useRouter } from "next/navigation";
import { getUserEventsByCPF } from "@/api/api";
import formatCpfHelper from "@/helpers/format-cpf-helper";
import { useContext } from "react";
import { UserEventsContext } from "@/context/userEventsContext";

type ModalProps = {
	itsModalOpen?: boolean;
	handleCloseModal: () => void;
	cpfModalText: string;
	idEvent?: number;
	redirectUser: () => void;
};

const Modal = ({
	itsModalOpen,
	handleCloseModal,
	cpfModalText,
	redirectUser,
}: ModalProps) => {
	const eventsContext = useContext(UserEventsContext);
	// const redirectUser = async () => {
	// 	const cpfFormatted = formatCpfHelper(cpfModalText);
	// 	const response = await getUserEventsByCPF(cpfFormatted);
	// 	eventsContext?.setEvents(response.events);
	// 	handleCloseModal();
	// 	router.push("user/events");
	// };
	return (
		<div
			className={styles.modalContainer}
			style={{ display: `${itsModalOpen ? "block" : "none"}` }}
		>
			<div className={styles.modalContentContainer}>
				<div className={styles.modalContent}>
					<div className={styles.text}>
						<p>
							O seu CPF é o <span>{cpfModalText}?</span>
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
