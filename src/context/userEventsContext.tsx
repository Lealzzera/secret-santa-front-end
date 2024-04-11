"use client";

import React, { ReactNode, useState } from "react";
import { createContext } from "react";

type Event = {
	description: string;
	grouped: boolean;
	id: number;
	status: boolean;
	title: string;
};

type UserEventsContextProps = {
	events: Event[] | null;
	setEvents: React.Dispatch<React.SetStateAction<Event[] | null>>;
};

export const UserEventsContext = createContext<UserEventsContextProps | null>(
	null
);

const UserEventsContextProvider = ({ children }: { children: ReactNode }) => {
	const [events, setEvents] = useState<Event[] | null>(null);

	return (
		<UserEventsContext.Provider value={{ events, setEvents }}>
			{children}
		</UserEventsContext.Provider>
	);
};

export default UserEventsContextProvider;
