import IconNotFoundPage from "@/icons/icon-not-found-page";
import styles from "./not-found.module.css";
import Button from "@/components/button/button";

export default async function NotFoundPage() {
	return (
		<section className={styles.containerNotFound}>
			<div>
				<IconNotFoundPage />
			</div>
			<div>
				<h1 className={styles.title}>Parece que não temos nada por aqui</h1>
				<p className={styles.text}>
					Talvez o seu evento não tenha iniciado ainda,
					<br /> volte aqui mais tarde.
				</p>
			</div>
			<div className={styles.buttonContainer}>
				<Button>Voltar</Button>
			</div>
		</section>
	);
}
