import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import MainSection from './Components/MainSection/MainSection'
import NavBar from './Components/NavBar/NavBar'
import Stats from './Components/Stats/Stats'
import MainSectionHeadingAndToggleBtn from './Components/MainSectionHeadingAndToggleBtn/MainSectionHeadingAndToggleBtn'


const promiseJsonData = async () => {
  const res = await fetch('/data.json')
  return res.json()
}

const subscriptionData = promiseJsonData()


function App() {

  const [mainSectionBtnToggle, setMainSectionBtnToggle] = useState('Products')
  // console.log(mainSectionBtnToggle)
  
  return (
    <div className='max-w-480 mx-auto'>
      <NavBar />
      <Banner />
      <Stats />
      <MainSectionHeadingAndToggleBtn mainSectionBtnToggle={mainSectionBtnToggle} setMainSectionBtnToggle ={setMainSectionBtnToggle} />
      {
        mainSectionBtnToggle === 'Products' && <MainSection subscriptionData={subscriptionData} />
      }
    </div>
  )
}

export default App
