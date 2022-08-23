import Link from 'next/link'
import { List } from 'phosphor-react'

export default function Navbar(){
  
  const toggleMenu = () => {
    console.log("Clicked")
  }

  console.log("Renderizou")
  return (
    <div className="absolute p-4 left-0 top-0 w-[100vw] text-center">
      <List 
        onClick={toggleMenu}
        className='w-7 h-7 absolute top-[18px] left-2 cursor-pointer'
      />
      <h1 className="text-red-500 text-2xl">GINIUSS</h1>
    </div>
  )
}