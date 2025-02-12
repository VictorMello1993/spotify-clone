import ItemList from "./ItemList";

export default function Main() {
	return (
		<div className="main">
			<ItemList title="Artistas" items={5} />
			<ItemList title="Músicas" items={10} />
		</div>
	);
}
