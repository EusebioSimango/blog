import { ToggleLeft, ToggleRight } from 'phosphor-react'
import { useEffect, useState } from 'react'

export default function Menu() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  
  useEffect(() => {
    if (typeof window.document !== 'undefined') {
      if (localStorage.getItem("theme")) {
        document.querySelector("html")?.classList.add("dark")
        setIsDarkMode(true)
      }
    }
  }, [])

  const toggleTheme = () => {
console.log('toggling theme')
    setIsDarkMode(!isDarkMode)
    document.querySelector("html")?.classList.toggle("dark")
    if (isDarkMode) {
        localStorage.removeItem("theme")
    } else {
        localStorage.setItem("theme", "dark")
    }
  }
  return (
    <div 
      id="menu"
      className={`flex flex-col gap-5  bg-gray-900 dark:bg-white fixed top-[54px] -left-[132px] duration-900 transition-all py-5 px-10 rounded-lg items-center z-50`}
    >
      <a href={"/"} className="text-white text-bold text-xl dark:text-darkBg">Blog</a>
      <a href={"/about"} className="text-white text-xl dark:text-darkBg">Sobre</a>
      <button className="text-white dark:text-darkBg"
        onClick={toggleTheme}  
      >
        { isDarkMode 
          ? <ToggleRight className="w-8 h-8"/> 
          : <ToggleLeft className="w-8 h-8"/>
        }
      </button>
    </div>
  )
}
