import Nav from './assets/Components/navbar/navBar.jsx'
import './App.css'
import Hero from './assets/Components/hero component/hero.jsx'
import Choose from './assets/Components/choose component/choose.jsx'
import HowItWorks from './assets/Components/howitworks/howItWorks.jsx'
import Journey from './assets/Components/journey/journey.jsx'
import Footer from './assets/Components/footer component/footer.jsx'
import './index.css'

function App() {

  return (
   
    <>
      
        <Nav />  
         <div className="container">
        <Hero />
        <Choose />
        <HowItWorks />
        <Journey /> 
          </div>
        <Footer />
   
    </>
  
  )
}

export default App
