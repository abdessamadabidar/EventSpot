import NavBar from "@/components/NavBar.tsx";
import './App.css'
import {BackgroundBoxesRender} from "@/components/BackgroundBoxesRender.tsx";
import ArchiveCarousel from "@/components/ArchiveCarousel.tsx";
import {EmblaOptionsType} from "embla-carousel";
import ClubCard from "@/components/ClubCard.tsx";



function App() {


    const OPTIONS: EmblaOptionsType = { loop: true }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <>
      <div className="mb-10">
          <NavBar />
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
