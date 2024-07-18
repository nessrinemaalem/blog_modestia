import ClothesCategories from "../datas/clothesCategories";
import { ClothesList } from "../datas/clothesList";


function ShoppingList() {
	return (
		<>
			<div>
				<h1>Shoping List</h1>
				<ClothesCategories />
				<ClothesList />
			</div>
		</>
	);
}

export default ShoppingList;
