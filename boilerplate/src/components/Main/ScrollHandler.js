import {useRef, useEffect} from "react"

export const ScrollHandler = () => {
    //Initially scroll is zero
    const [scroll, setScroll] = useRef(0)
    const [down, setDown] = useRef(true)
    useEffect(() => {
        const onScroll = () => {
            const scrollCheck = document.getElementById('html').scrollTop;
        }
        if (scrollCheck > scroll && !down) {
            setDown(true)
        } else if (scrollCheck < scrolldown && down) {
            setDown(false)
        }
        setScroll(scrollCheck)

        document.addEventListener("scroll", onScroll)

        return () => {
            document.removeEventListener("scroll", onScroll)
        }
    
    }, [scroll, setScroll])

    return scroll
}



