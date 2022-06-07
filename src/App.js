import "./Styles/App.css";
import NavBar from "./Components/NavBar";
import Title from "./Components/Title";
import Description from "./Components/Description";
import ContactSection from "./Components/ContactSection";
import Downloads from "./Components/Downloads";
import About from "./Components/About";
import Services from "./Components/Services";
import DoAppliences from "./Components/DoAppliences";
import ControlAppliences from "./Components/ControlAppliences";
import OurClients from "./Components/OurClients";
import Testimonials from "./Components/Testimonials";
import FAQS from "./Components/FAQS";
import BottomDownload from "./Components/BottomDownload";

function App() {
  return (
    <div className="App background">
        <NavBar />
        <Title />
        <Description />
        <ContactSection />
        <Downloads />
        <About />
        <Services />
        <DoAppliences />
        <ControlAppliences />
        <OurClients />
        <Testimonials />
        <FAQS />
        <BottomDownload />
    </div>
  );
}

export default App;