import { useState } from 'react'
import logo from '../assets/logo_modestia.png'
import viteLogo from '/vite.svg'
import '../styles/index.css'
import ShoppingList from './ShoppingList.jsx'
import Banner from './Banner.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
	<>
	 <Banner>
		<img src={logo} alt='Modestia' className='modestia-logo' />
		<h1 className='modestia-title'>Modestia</h1>
	 </Banner>
     <ShoppingList />
    </>
  )
}

export default App
