import { useEffect, useState, FC } from "react"
import { ArrowUp } from "phosphor-react"

const ScroolToTop: FC = () => {
    const [ showButton, setShowButton ] = useState(false)

    useEffect(() => {
      window.addEventListener("scroll", () => {
        const isScrollYGreaterThanTen = window.scrollY >= 10 
        setShowButton(isScrollYGreaterThanTen)
      })
    }, [])

    return(
        <button 
        className={`bg-link rounded-full inline-block p-2 bottom-2 right-2 ${ showButton ? "fixed" : "none hidden" } z-[10000]`}
        onClick={() => {
            window.scrollTo(0, 0)
        }}
        >
            <ArrowUp size={35} />
        </button>
    )
}

export default ScroolToTop
