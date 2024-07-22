import CareScale from "./CareTemperature";

function ClotheItem({ name, temperature, cover }) {
	return (
		<li className="clothe-item">
			<img src={cover} alt={name} />
			{name}
			{/* {clothes.isBestSale && <span>🔥</span>} */}
			<CareScale scaleValue={temperature} />
		</li>
	);
}
export default ClotheItem;

