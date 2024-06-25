import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Serv from "../assets/img3.jpg"
import FooterBotoom from "../components/FooterBotoom";
import Services from "../components/Services";


function Service () {
    return(
        <>
       
        <Navbar />
        <Hero cName="hero-absection"
        heroImg={Serv}
        title="Our Services" />
        <Services/>
        <FooterBotoom />
        </>
    )
}

export default Service;