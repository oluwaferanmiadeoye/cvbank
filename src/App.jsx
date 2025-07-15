import Nav from './assets/Components/navBar.jsx'
import './App.css'
import Hero from './assets/Components/hero.jsx'
import Choose from './assets/Components/choose.jsx'
import HowItWorks from './assets/Components/howItWorks.jsx'
import Journey from './assets/Components/journey.jsx'
import Footer from './assets/Components/footer.jsx'
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
        <Footer />
      </div>
    </>
  
  )
}

export default App
