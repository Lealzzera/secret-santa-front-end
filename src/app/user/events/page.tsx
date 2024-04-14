import getCookies from "@/actions/getCookies";
import { getUserEventsByCPF } from "@/api/api";
import EventsPageComponent from "@/components/events-page/events-page";

export default async function EventsPage() {
	const cpf = await getCookies("cpf");

	const response = await getUserEventsByCPF(cpf?.value);

	return (
		<section>
			<h1>
				<EventsPageComponent events={response.events} />
			</h1>
		</section>
	);
}
