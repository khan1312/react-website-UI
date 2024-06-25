import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import abImg from "../assets/aboutus.webp"
import FooterBotoom from "../components/FooterBotoom";
import HomeAboutsection from "../components/Home-aboutsection";
import Aboutpage from "../components/aboutpage";
// import Newnavbar from "../components/Newnavbar";




function About () {
    return(
        <><Navbar />
        {/* <Newnavbar/> */}
        <Hero
        cName="hero-absection"
        heroImg={abImg}
        title="About Us"/>

        <HomeAboutsection />
        <Aboutpage/>
     <FooterBotoom/>
        </>
    )
}

export default About;