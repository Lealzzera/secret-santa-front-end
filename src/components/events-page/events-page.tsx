"use client";

import styles from "./events-page.module.css";
import CardComponent from "@/components/card-component/card-component";
import { Event } from "@/types/types";

type EventsPageComponentProps = {
	events: Event[];
};

export default function EventsPageComponent({
	events,
}: EventsPageComponentProps) {
	return (
		<section>
			{!events.length ? (
				<>
					<h1>Poxa parece que não tem nenhum evento cadastrado para você</h1>
				</>
			) : (
				<>
					<div className={styles.titleContainer}>
						<h1 className={styles.title}>Eventos</h1>
					</div>
					<ul className={styles.listContainer}>
						{events &&
							events.map(({ id, status, title, description, grouped }) => (
								<li className={styles.listItem} key={id}>
									<CardComponent title={title} description={description} />
								</li>
							))}
					</ul>
				</>
			)}
		</section>
	);
}
