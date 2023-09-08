import "./App.css";
import CustomCursor from "./Components/CustomCursor/CustomCursor";
import AboutUs from "./Sections/AboutUs/AboutUs";
import Banner from "./Sections/Banner/Banner";
import Connections from "./Sections/Connections/Connections";
import ContactForm from "./Sections/ContactForm/ContactForm";
import ContactInfo from "./Sections/ContactInfo/ContactInfo";
import Extra1 from "./Sections/Extra/Extra1";
import Footer from "./Sections/Footer/Footer";
import SharedNavbar from "./Sections/Navbar/SharedNavbar";
import TeamMembers from "./Sections/TeamMembers/TeamMembers";

function App() {
  return (
    <>
      <div>
        <CustomCursor></CustomCursor>
          <SharedNavbar></SharedNavbar>
          <Banner></Banner>
          <AboutUs></AboutUs>
          <Connections></Connections>
          <Extra1></Extra1>
          <ContactForm></ContactForm>
          <ContactInfo></ContactInfo>
          <TeamMembers></TeamMembers>
          <Footer></Footer>
      </div>
    </>
  );
}

export default App;
