"use client";

import { useContext } from "react";
import { UserEventsContext } from "@/context/userEventsContext";
import styles from "./events-page.module.css";
import CardComponent from "@/components/card-component/card-component";

export default function EventsPageComponent() {
	const eventsContext = useContext(UserEventsContext);
	return (
		<section>
			<div className={styles.titleContainer}>
				<h1 className={styles.title}>Eventos</h1>
			</div>
			<ul className={styles.listContainer}>
				{eventsContext?.events &&
					eventsContext.events.map(
						({ id, status, title, description, grouped }) => (
							<li className={styles.listItem} key={id}>
								<CardComponent title={title} description={description} />
							</li>
						)
					)}
			</ul>
		</section>
	);
}
