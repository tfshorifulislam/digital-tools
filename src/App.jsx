import './App.css'
import Banner from './Components/Banner/Banner'
import MainSection from './Components/MainSection/MainSection'
import NavBar from './Components/NavBar/NavBar'
import Stats from './Components/Stats/Stats'

function App() {
  

  return (
    <div className='max-w-480'>
     <NavBar />
     <Banner />
     <Stats />
     <MainSection />
    </div>
  )
}

export default App
