function CareScale(props) {
    const scaleValue = props.scaleValue

    const range = [20, 30, 40, 50, 60]

    return (
        <div>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>🌡️</span> : null
            )}
        </div>
    )
}

export default CareScale