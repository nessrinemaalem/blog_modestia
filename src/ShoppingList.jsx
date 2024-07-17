const clothesList = [
	'pantalons',
	'tunique',
	'pull',
	'jupe',
	'robe',
	'chaussures',
	'chaussettes'
];

function ShoppingList() {
	return (
		<ul>
			{clothesList.map((clothes, index) => (
				<li key={`${clothes}-${index}`}>{clothes}</li>
			))}
		</ul>
	);
}

export default ShoppingList;