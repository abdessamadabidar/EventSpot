import NavBar from "@/components/NavBar.tsx";
import './App.css'
import {BackgroundBoxesRender} from "@/components/BackgroundBoxesRender.tsx";

function App() {

  return (
    <>
      <div className="mb-10">
          <NavBar />
      </div>
        <div className="w-11/12 mx-auto">
            <BackgroundBoxesRender />
        </div>
    </>
  )
}

export default App;
