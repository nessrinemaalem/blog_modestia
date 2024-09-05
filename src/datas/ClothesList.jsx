import CareTemperature from '../components/CareTemperature';
import ClotheItem from '../components/ClotheItem';
import robe from '../assets/robe.jpg';
import chaussettes from '../assets/chaussettes.jpg';
import chaussures from '../assets/chaussures.jpg';
import { useMemo } from 'react';

export const clothesListData = [
	{
		name: 'pantalons',
		categorie: 'bas',
		id: '1ed',
		isBestSale: true,
		isSpecialOffer: true,
		temperature: 30,
		cover: robe,
		price: 35
	},
	{
		name: 'tunique',
		categorie: 'haut',
		id: '2ab',
		isBestSale: false,
		isSpecialOffer: false,
		temperature: 30,
		cover: robe,
		price: 30
	},
	{
		name: 'pull',
		categorie: 'haut',
		id: '3sd',
		isBestSale: false,
		isSpecialOffer: true,
		temperature: 60,
		cover: chaussettes,
		price: 40
	},
	{
		name: 'jupe',
		categorie: 'bas',
		id: '4kk',
		isBestSale: false,
		isSpecialOffer: false,
		temperature: 20,
		cover: chaussures,
		price: 42
	},
	{
		name: 'robe',
		categorie: 'haut',
		id: '5pl',
		isBestSale: true,
		isSpecialOffer: false,
		temperature: 30,
		cover: chaussettes,
		price: 60
	},
	{
		name: 'chaussures',
		categorie: 'accessoire',
		id: '6uo',
		isBestSale: false,
		isSpecialOffer: true,
		temperature: 40,
		cover: robe,
		price: 70
	},
	{
		name: 'chaussettes',
		categorie: 'accessoire',
		id: '7ie',
		isBestSale: true,
		isSpecialOffer: true,
		temperature: 30,
		cover: chaussettes,
		price: 10
	}
];



export function ClothesList({ clothesCategoriesData ,setClothesCategoriesData, cart, updateCart }) {

	function addToCart(name, price) {
		const currentItemSelected = cart.find((clothe)=> clothe.name === name);

		// l'objet est deja dans le panier
		if (currentItemSelected) {
			const currenCartFiltered = cart.filter((clothe) => clothe.name !== name);
			updateCart([...currenCartFiltered, {name, price, amount: currentItemSelected.amount + 1}]);
		}
		// l'objet n'est pas dans le panier
		else {
			updateCart([...cart, {name, price, amount: 1}]);
		}
	}

	// recuperer les categories selectionnees
	const selectedCategories = clothesCategoriesData.filter((categorie) => categorie.isSelected).map((categorie) => categorie.name);
	
	// Filtrer les vêtements en fonction des catégories sélectionnées
    const filteredClothesList = useMemo(() => {
        // Si "Tout" est sélectionné, on affiche tout
        if (selectedCategories.includes("Voir tout") || selectedCategories.length === 0) {
            return clothesListData; // Affiche tous les vêtements
        }
        // Sinon, on filtre par les catégories sélectionnées
        return clothesListData.filter(item => selectedCategories.includes(item.categorie));
    }, [selectedCategories]); // Cette logique ne sera recalculée que si les catégories changent

	return (
		<ul className="modestia-list">
			{filteredClothesList.map(({id, name, temperature, cover, price}) => (
				<div key={id}>
					<ClotheItem
						key={id}
						name={name}
						temperature={temperature}
						cover={cover}
						price={price}
					/>
					<button onClick={() => addToCart(name, price)}>
						Ajouter
					</button>
				</div>
			))};
		</ul>
	);
}