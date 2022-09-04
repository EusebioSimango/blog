import { Popover } from '@headlessui/react'
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

  console.log("Renderizou")
  return (
    <div className="fixed p-4 dark:text-white left-0 top-0 w-[100vw] dark:bg-darkBg bg-white text-center duration-500">
      <Popover>
        <Popover.Button className='fixed top-[14px] left-2'>
          <List className='w-8 h-8'/>
        </Popover.Button>
        <Popover.Panel>
          <Menu />
        </Popover.Panel>
      </Popover>
      <h1 className="text-4xl dark:text-darkLink text-link leading-tight">GINIUSS</h1>
    </div>
  )
}
