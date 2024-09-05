import ClothesCategories from "../datas/ClothesCategories";
import { ClothesList, clothesListData } from "../datas/ClothesList";
import ClotheItem from "./ClotheItem";

function ShoppingList({ clothesCategoriesData ,setClothesCategoriesData, cart, updateCart }) {
	return (
		<>
			<div>
				<h1>Shopping List</h1>
				{/* <ClothesCategories /> */}
				<ClothesList 
					cart={cart}
					updateCart={updateCart}
					clothesCategoriesData={clothesCategoriesData}
					setClothesCategoriesData={setClothesCategoriesData}
				/>
			</div>
		</>
	);
}

export default ShoppingList;
