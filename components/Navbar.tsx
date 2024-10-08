import { List } from 'phosphor-react'
import { useState, useEffect } from 'react'
import Menu from './Menu'

export default function Navbar(){
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false)

  useEffect(() => {
    const menu = window.document.getElementById('menu')!
    if (isMenuActive) 
        menu.classList.add('active')
    else 
        menu.classList.remove('active')
  }, [isMenuActive])

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive)
  }

  return (
    <div className="fixed p-4 dark:text-white left-0 top-0 w-[100vw] dark:bg-darkBg bg-white text-center duration-500">
      <List 
        onClick={toggleMenu}
        className='w-8 h-8 fixed top-[14px] left-2 cursor-pointer'
      />
      <h1 className="text-4xl dark:text-darkLink text-link leading-tight">GINIUSS</h1>
      <Menu />
    </div>
  )
}
