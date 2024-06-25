import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Serv from "../assets/img3.jpg"
import FooterBotoom from "../components/FooterBotoom";
import Jobseekers from "../components/Jobseekers";


function Jobseeker () {
    return(
        <>
       
        <Navbar />
        <Hero cName="hero-absection"
        heroImg={Serv}
        title="Our Services" />
        <Jobseekers/>
        <FooterBotoom />
        </>
    )
}

export default Jobseeker;