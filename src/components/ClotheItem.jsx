import CareScale from "./CareTemperature";

function handleClick(clotheName) {
	console.log(`Vous voulez acheter 1 ${clotheName}`);
}

function ClotheItem({ name, temperature, cover }) {
	return (
		<li className="clothe-item" onClick={ () => handleClick(name)}>
			<img src={cover} alt={name} />
			{name}
			{/* {clothes.isBestSale && <span>🔥</span>} */}
			<CareScale scaleValue={temperature} />
		</li>
	);
}

export default ClotheItem;
