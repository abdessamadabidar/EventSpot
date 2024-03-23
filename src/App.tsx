import NavBar from "@/components/NavBar.tsx";
import './App.css'
import {BackgroundBoxesRender} from "@/components/BackgroundBoxesRender.tsx";

import ArchiveCarousel from "@/components/ArchiveCarousel.tsx";
import {EmblaOptionsType} from "embla-carousel";









import React, {useEffect} from "react";

function App() {

    const OPTIONS: EmblaOptionsType = { loop: true }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


    const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light');


    useEffect(() => {

        localStorage.setItem('theme', theme)

        if (theme  === 'dark') {
            document.documentElement.classList.add('dark')
        }
        else {
            document.documentElement.classList.remove('dark');
        }

    },[theme])

    const onThemeChange = (toggleValue: boolean) => {
        toggleValue === true ? setTheme('dark') : setTheme('light')
    }

  return (
    <>
      <div className="mb-10">
          <NavBar onThemeChange={onThemeChange}/>
      </div>
        <div className="w-11/12 mx-auto mb-5">
            <BackgroundBoxesRender />
        </div>
        <div className="w-11/12 mx-auto mb-10">
            <ArchiveCarousel slides={SLIDES} options={OPTIONS} />
        </div>

    </>
  )
}

export default App;
