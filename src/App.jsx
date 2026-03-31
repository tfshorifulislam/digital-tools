import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import MainSection from './Components/MainSection/MainSection'
import NavBar from './Components/NavBar/NavBar'
import Stats from './Components/Stats/Stats'
import MainSectionHeadingAndToggleBtn from './Components/MainSectionHeadingAndToggleBtn/MainSectionHeadingAndToggleBtn'
import CartSection from './Components/CartSection/CartSection'
import StepsSection from './Components/StepsSection/StepsSection'
import PricingSection from './Components/PricingSection/PricingSection'
import TransformSection from './Components/TransformSection/TransformSection'
import Footer from './Components/Footer/Footer'


const promiseJsonData = async () => {
  const res = await fetch('/data.json')
  return res.json()
}
const subscriptionData = promiseJsonData()

const pricingDataPromise = async () => {
  const res = await fetch('/pricingData.json')
  return res.json()
}
 const pricingData = pricingDataPromise()

function App() {

  const [mainSectionBtnToggle, setMainSectionBtnToggle] = useState('Products')
  // console.log(mainSectionBtnToggle)
  const [selectedCards, setSelectedCards] = useState([])
  // console.log(selectedCards)
  return (
    <div className='max-w-480 mx-auto'>
      <NavBar selectedCards={selectedCards} setMainSectionBtnToggle={setMainSectionBtnToggle} />
      <Banner />
      <Stats />
      <MainSectionHeadingAndToggleBtn mainSectionBtnToggle={mainSectionBtnToggle} setMainSectionBtnToggle={setMainSectionBtnToggle} selectedCards={selectedCards} />
      {
        mainSectionBtnToggle === 'Products' && <MainSection subscriptionData={subscriptionData} selectedCards={selectedCards} setSelectedCards={setSelectedCards} />
      }
      {
        mainSectionBtnToggle === 'Cart' && <CartSection selectedCards={selectedCards} setMainSectionBtnToggle={setMainSectionBtnToggle} setSelectedCards={setSelectedCards} />
      }

      {
        mainSectionBtnToggle !== 'Cart' && <StepsSection />
      }
      {
          mainSectionBtnToggle !== 'Cart' && <PricingSection pricingData ={pricingData} />
      }
      {
        mainSectionBtnToggle !== 'Cart' && <TransformSection />
      }
      {
        mainSectionBtnToggle !== 'Cart' && <Footer />
      }
    </div>
  )
}

export default App
