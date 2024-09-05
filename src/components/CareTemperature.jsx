

function CareScale(props) {
    const scaleValue = props.scaleValue
    const range = [20, 30, 40, 50, 60]

	const showCare = () => {
		if (scaleValue <= 30)
			alert("Lavage delicat");
		else if (scaleValue > 30 && scaleValue <= 50)
			alert("Lavage modéré");
		else
			alert("Lavage haut temperature");
	}

    return (
        <div onClick={() => showCare()}>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>🌡️</span> : null
            )}
        </div>
    )
}


// je dois recuperer l'echelle de temperature de chaque vetement
// je dois afficher le mot en fonction de la temperature

export default CareScale