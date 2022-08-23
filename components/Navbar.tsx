import { List } from 'phosphor-react'
import { useState, useEffect } from 'react'
import Menu from './Menu'

export default function Navbar(){
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false)

  useEffect(() => {
    const menu = window.document.getElementById('menu')!
    if (isMenuActive) 
        menu.classList.add('active')
    else 
        menu.classList.remove('active')
    console.log('activo: ', isMenuActive, menu)
  }, [isMenuActive])

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive)
  }

  console.log("Renderizou")
  return (
    <div className="absolute p-4 left-0 top-0 w-[100vw] text-center">
      <List 
        onClick={toggleMenu}
        className='w-8 h-8 absolute top-[14px] left-2 cursor-pointer'
      />
      <h1 className="text-red-500 text-2xl">GINIUSS</h1>
      <Menu isDarkMode={isDarkMode}/>
    </div>
  )
}
