import "./App.css";
import CustomCursor from "./Components/CustomCursor/CustomCursor";
import AboutUs from "./Sections/AboutUs/AboutUs";
import Banner from "./Sections/Banner/Banner";
import Clients from "./Sections/Clients/Clients";
import ContactForm from "./Sections/ContactForm/ContactForm";
import ContactInfo from "./Sections/ContactInfo/ContactInfo";
import Footer from "./Sections/Footer/Footer";
import SharedNavbar from "./Sections/Navbar/SharedNavbar";
import Services from "./Sections/Services/Services";
import ServicesHeading from "./Sections/ServicesHeading/ServicesHeading";
import TeamMembers from "./Sections/TeamMembers/TeamMembers";

function App() {
  return (
    <>
      <div>
        <CustomCursor></CustomCursor>
        <SharedNavbar></SharedNavbar>
        <Banner></Banner>
        <AboutUs></AboutUs>
        <ServicesHeading></ServicesHeading>
        <Services></Services>
        <Clients></Clients> 
        <ContactInfo></ContactInfo>
        <ContactForm></ContactForm>
        <TeamMembers></TeamMembers>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
