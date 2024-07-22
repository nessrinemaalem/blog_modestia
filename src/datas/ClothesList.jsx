import CareTemperature from '../components/CareTemperature';
import ClotheItem from '../components/ClotheItem';
import robe from '../assets/robe.jpg';
import chaussettes from '../assets/chaussettes.jpg';
import chaussures from '../assets/chaussures.jpg';

export const clothesListData = [
	{
		name: 'pantalons',
		categorie: 'bas',
		id: '1ed',
		isBestSale: true,
		isSpecialOffer: true,
		temperature: 30,
		cover: robe
	},
	{
		name: 'tunique',
		categorie: 'haut',
		id: '2ab',
		isBestSale: false,
		isSpecialOffer: false,
		temperature: 30,
		cover: robe
	},
	{
		name: 'pull',
		categorie: 'haut',
		id: '3sd',
		isBestSale: false,
		isSpecialOffer: true,
		temperature: 60,
		cover: chaussettes
	},
	{
		name: 'jupe',
		categorie: 'bas',
		id: '4kk',
		isBestSale: false,
		isSpecialOffer: false,
		temperature: 20,
		cover: chaussures
	},
	{
		name: 'robe',
		categorie: 'haut',
		id: '5pl',
		isBestSale: true,
		isSpecialOffer: false,
		temperature: 30,
		cover: chaussettes	
	},
	{
		name: 'chaussures',
		categorie: 'accessoire',
		id: '6uo',
		isBestSale: false,
		isSpecialOffer: true,
		temperature: 40,
		cover: robe	
	},
	{
		name: 'chaussettes',
		categorie: 'accessoire',
		id: '7ie',
		isBestSale: true,
		isSpecialOffer: true,
		temperature: 30,
		cover: chaussettes
	}
];

export function ClothesList() {
	return (
		<ul className="modestia-list">
			{clothesListData.map(({id, name, temperature, cover}) => (
				<ClotheItem
					key={id}
					name={name}
					temperature={temperature}
					cover={cover}
				/>
			))};
		</ul>
	);
}