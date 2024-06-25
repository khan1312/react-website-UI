import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import heroImg from "../assets/banner-home.jpg"
import HomeAboutsection from "../components/Home-aboutsection";
import Services from "../components/Services";
import FooterBotoom from "../components/FooterBotoom";




function  Home (){
    return(
        <>
        <Navbar/>
        <Hero 
        cName="hero"
        heroImg={heroImg}
        title="Welcome to Vibez Estates"
        text="Managed Farmland & farmhouse"
        buttonText="Apply Now"
        url="/contact"
        btnClass="show"
        />
        <HomeAboutsection />
        <Services/>
        <FooterBotoom/>
       
        
        </>
    )
}

export default Home;