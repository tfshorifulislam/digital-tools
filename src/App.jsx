import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import MainSection from './Components/MainSection/MainSection'
import NavBar from './Components/NavBar/NavBar'
import Stats from './Components/Stats/Stats'

function App() {

  const [mainSectionBtnToggle, setMainSectionBtnToggle] = useState('Products')
  console.log(mainSectionBtnToggle)
  return (
    <div className='max-w-480 mx-auto'>
     <NavBar />
     <Banner />
     <Stats />
     <MainSection mainSectionBtnToggle={mainSectionBtnToggle} setMainSectionBtnToggle={setMainSectionBtnToggle} />
    </div>
  )
}

export default App
