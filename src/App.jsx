import './App.css'
import AboutMe from './components/AboutMe/AboutMe'
import Banner from './components/Banner/Banner'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import Projects from './components/Projects/Projects'

function App() {

  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    <AboutMe></AboutMe>
    <Projects></Projects>
    <Contact></Contact>
    <Footer></Footer>
    </>
  )
}

export default App
