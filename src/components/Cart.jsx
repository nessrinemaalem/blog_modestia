import '../styles/Cart.css'

function Cart() {
	const chaussettesPrice = 8
	const chaussuresPrice = 10
	const robePrice = 15
	return (
		<div className='modestia-cart'>
			<h2>Panier</h2>
			<ul>
				<li>Chaussettes : {chaussettesPrice}€</li>
				<li>Chaussures : {chaussuresPrice}€</li>
				<li>Robe : {robePrice}€</li>
			</ul>
			Total : {chaussettesPrice + chaussuresPrice + robePrice}€
		</div>
	)
}

export default Cart