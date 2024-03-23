import NavBar from "@/components/NavBar.tsx";
import './App.css'
import {BackgroundBoxesRender} from "@/components/BackgroundBoxesRender.tsx";
import React, {useEffect} from "react";

function App() {

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
        <div className="w-11/12 mx-auto">
            <BackgroundBoxesRender />
        </div>
    </>
  )
}

export default App;
