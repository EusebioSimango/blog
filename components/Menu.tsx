import { ToggleLeft, ToggleRight } from 'phosphor-react'

export default function Menu({ isDarkMode }) {
  
  return (
    <div 
      id="menu"
      className={`flex flex-col gap-5  bg-gray-900 absolute top-[54px] -left-[132px] duration-900 transition-all py-5 px-10 rounded-lg items-center`}
    >
      <a href={"/"} className="text-white text-bold text-xl">Blog</a>
      <a href={"/about"} className="text-white text-xl">Sobre</a>
      <div className="text-white">
        { isDarkMode 
          ? <ToggleRight className="w-8 h-8"/> 
          : <ToggleLeft className="w-8 h-8"/>
        }
      </div>
    </div>
  )
}
