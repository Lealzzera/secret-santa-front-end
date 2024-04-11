"use client";

import { useContext } from "react";
import { UserEventsContext } from "@/context/userEventsContext";

export default function EventsPageComponent() {
	const eventsContext = useContext(UserEventsContext);
	console.log(eventsContext?.events);
	return (
		<main>
			<h1>Eventos</h1>
			<ul>
				{eventsContext?.events &&
					eventsContext.events.map((item) => (
						<h1 key={item.id}>{item.title}</h1>
					))}
			</ul>
		</main>
	);
}
