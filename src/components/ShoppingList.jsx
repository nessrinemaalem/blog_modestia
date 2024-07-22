import ClothesCategories from "../datas/clothesCategories";
import { ClothesList, clothesListData } from "../datas/ClothesList";
import ClotheItem from "./ClotheItem";

function ShoppingList() {
	return (
		<>
			<div>
				<h1>Shopping List</h1>
				<ClothesCategories />
				<ClothesList />
			</div>
		</>
	);
}

export default ShoppingList;
