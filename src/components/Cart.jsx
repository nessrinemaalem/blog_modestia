import '../styles/Cart.css'
import { useState } from 'react'
import React from 'react'

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(false);

	function calculateTotal() {
		return (cart.reduce((acc, clothe) => acc + clothe.price * clothe.amount, 0));
	}

	return isOpen ? (
		<div className='modestia-cart'>
			<button onClick={() => setIsOpen(false)}>
				Fermer
			</button>
			<h2>Panier</h2>
			<ul>
				{/* {cart.map((clothe) => (
					<li key={clothe.id}>{clothe.name}: {clothe.price}$ x {clothe.amount}</li>
				))} */}
				{
					cart.map(({ name, price, amount }, index) => (
					<div key={`${name}-${index}`}>
						{name} {price}€ x {amount}
					</div>
				))}
			</ul>
			Total : {calculateTotal()}€
			<button onClick={() => updateCart([])}>
				Vider le panier
			</button>
		</div>
	) : (
		<button onClick={() => setIsOpen(true)}>
			Ouvrir le Panier
		</button>
	)
}

export default Cart