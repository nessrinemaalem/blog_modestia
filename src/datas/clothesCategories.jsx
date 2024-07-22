import { clothesListData } from './ClothesList';
import '../styles/ShoppingList.css'

const clothesCategoriesData = [...new Set(clothesListData.map(item => item.categorie))];

function ClothesCategories() {
	return (
		<ul>
			{clothesCategoriesData.map((categorie, index) => (
				<li key={`${categorie}-${index}`}>{categorie}</li>
			))}
		</ul>
	);
}

export default ClothesCategories;

