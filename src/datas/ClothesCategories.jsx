import '../styles/ShoppingList.css'

function ClothesCategories({ clothesCategoriesData, updateCategory }) {
	const handleChange = (event) => {
		updateCategory(event.target.value);
	};

	return (
		<select onChange={handleChange}>
			{clothesCategoriesData.map((categorie, index) => (
				<option key={`${categorie}-${index}`} value={categorie.name}>
					{categorie.name};
				</option>
			))}
			{/* <option>reinitialiser</option> */}
		</select>
		// afficher les vetements en fonction de la categorie selectionnee
	);
}

export default ClothesCategories;

