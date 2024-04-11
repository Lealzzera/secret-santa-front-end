import SearchPage from "@/components/search-page/search-page";

export default async function EventPage({
	params,
}: {
	params: { id: string };
}) {
	const { id } = params;
	return (
		<main>
			<h1>ID EVENT {id}</h1>
			<SearchPage idEvent={+id} />
		</main>
	);
}
