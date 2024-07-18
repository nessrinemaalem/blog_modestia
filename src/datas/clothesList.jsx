export const clothesListData = [
	{
		name: 'pantalons',
		categorie: 'bas',
		id: '1ed',
		isBestSale: true
	},
	{
		name: 'tunique',
		categorie: 'haut',
		id: '2ab',
		isBestSale: false
	},
	{
		name: 'pull',
		categorie: 'haut',
		id: '3sd',
		isBestSale: false
	},
	{
		name: 'jupe',
		categorie: 'bas',
		id: '4kk',
		isBestSale: false
	},
	{
		name: 'robe',
		categorie: 'haut',
		id: '5pl',
		isBestSale: true
	},
	{
		name: 'chaussures',
		categorie: 'accessoire',
		id: '6uo',
		isBestSale: false
	},
	{
		name: 'chaussettes',
		categorie: 'accessoire',
		id: '7ie',
		isBestSale: true
	}
];

export function ClothesList() {
	return (
		<ul>
			{clothesListData.map((clothes, index) => (
				<li key={ clothes.id }>
					{ clothes.name } {clothes.isBestSale && <span>🔥</span>}
				</li>
			))}
		</ul>
	);
}