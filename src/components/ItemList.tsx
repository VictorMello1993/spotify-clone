import SingleItem from "./SingleItem";

interface ItemListProps {
	title: string;
	items: number;
}

export default function ItemList({ title, items }: ItemListProps) {
	return (
		<div className="item-list">
			<div className="item-list__header">
				<h2>{title} populares</h2>
				<a href="/" className="item-list__header">
					Mostrar tudo
				</a>
			</div>
			<div className="item-list__container">
				{Array(items)
					.fill()
					.map((currentValue, index) => (
						<SingleItem key={`${title}${index}`} />
					))}
			</div>
		</div>
	);
}
