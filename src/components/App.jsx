import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../styles/index.css'
import ShoppingList from './ShoppingList.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ShoppingList />
    </>
  )
}

export default App
