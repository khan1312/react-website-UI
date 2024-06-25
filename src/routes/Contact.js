import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Serv from "../assets/Contac.jpg"
import FooterBotoom from "../components/FooterBotoom";
import ContactForm from "../components/ContactForm";
import Newnavbar from "../components/Newnavbar";

function contact () {
    return(
        <>
         <Navbar />
         {/* <Newnavbar/> */}
         <Hero 
         cName="hero-absection"
         heroImg={Serv}
         title="Contact Us" 
         />
       <ContactForm />
         <FooterBotoom />
        </>
    )
}

export default contact;