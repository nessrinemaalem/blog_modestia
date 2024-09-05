import React, { useState } from 'react';
import Banner from './Banner';
import ClothesCategories from '../datas/ClothesCategories';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import { clothesListData } from '../datas/ClothesList';
import logo from '../assets/logo_modestia.png';

// Calculer les catégories une seule fois en dehors du composant
const initialCategories = [
	{ name: "Voir tout", isSelected: true },
	...[...new Set(clothesListData.map(item => item.categorie))].map(categorie => ({
	  name: categorie,
	  isSelected: false
	}))
  ];

function App() {
  const [cart, updateCart] = useState([]);
  const [clothesCategoriesData, setClothesCategoriesData] = useState(initialCategories);

  // Fonction pour mettre à jour la sélection de catégorie (permet plusieurs sélections si nécessaire)
    const updateCategory = (selectedCategory) => {
      setClothesCategoriesData(prevCategories =>
        prevCategories.map(categorie =>
          categorie.name === selectedCategory
            ? { ...categorie, isSelected: true } // Toggle de sélection
            : { ...categorie, isSelected: false } // Désélectionner les autres catégories
        )
      );
    };

  return (
    <>
      <Banner>
        <img src={logo} alt='Modestia' className='modestia-logo' />
        <h1 className='modestia-title'>Modestia</h1>
      </Banner>

      <ClothesCategories 
        clothesCategoriesData={clothesCategoriesData} 
        updateCategory={updateCategory} 
      />

      <Cart 
        cart={cart} 
        updateCart={updateCart} 
      />

      <ShoppingList 
		clothesCategoriesData={clothesCategoriesData}
		setClothesCategoriesData={setClothesCategoriesData}
        cart={cart} 
        updateCart={updateCart} 
      />

      <Footer />
    </>
  );
}

export default App;
