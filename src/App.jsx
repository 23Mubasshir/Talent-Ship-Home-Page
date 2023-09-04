import './App.css'
import AboutUs from './Sections/AboutUs/AboutUs'
import Banner from './Sections/Banner/Banner'
import ContactForm from './Sections/ContactForm/ContactForm'
import ContactInfo from './Sections/ContactInfo/ContactInfo'
import Extra1 from './Sections/Extra/Extra1'
import Footer from './Sections/Footer/Footer'
import SharedNavbar from './Sections/Navbar/SharedNavbar'


function App() {

  return (
    <>
    <div>
    <SharedNavbar></SharedNavbar>
    <Banner></Banner>
    <AboutUs></AboutUs>
    <Extra1></Extra1>
    <ContactForm></ContactForm>
    <ContactInfo></ContactInfo>
    <Footer></Footer>
    </div>
    </>
  )
}

export default App
