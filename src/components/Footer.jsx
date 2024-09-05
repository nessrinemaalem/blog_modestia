import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('Entrez votre mail')

	function checkEmail() {
		const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
		if (!regex.test(inputValue)) {
			alert('Email non valide')
		}
	}

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	return (
		<footer className='modestia-footer'>
			<div className='modestia-footer-elem'>
				Pour les passionnées de mode !
			</div>
			<div className='modestia-footer-elem'>Laissez-nous votre mail :</div>
			<input 
				onBlur={checkEmail}
				onChange={handleInput}
				value={inputValue}
			/>
		</footer>
	)
}

export default Footer