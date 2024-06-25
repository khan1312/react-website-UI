import AboutsectionImg from "../assets/img1.jpg";
import AboutsectionImg1 from "../assets/abacimg.jpg";

import "./Home-aboutsection.css"
import HomeaboutsectionData from "./Home-aboutsectionData";


const HomeAboutsection = () => {
  return (
    <>
      <div className="home-about">
        <h1>About Vibez Estates </h1>
        <p>
       Vibez in recruiting high-quality, skilled individuals for businesses in
the following industries:
        </p>

        <HomeaboutsectionData
        className="about-des-sec"
        
        heading="About Maxsys Staffing"
        text="• Domestic CLM and BPO
        • Internation CLM and BPO
        • E-Commerce
        • Farma
        • Manufacturing
        • Outsource services
        • Domestic IT Services
        • Digital Transformation services"
        img={AboutsectionImg}
        img1={AboutsectionImg1}
        />
         {/* <HomeaboutsectionData
         className="about-des-sec-revers"
        heading="About Vibez Estates"
        text="Welcome to Vibez Estates! Since 2009, with over 16 successful
        projects under our belt, we stand proud in our consistent track
        record and we are the first people leading the way in introducing
        the concept of managed farm lands in India. We have brought joy
        and fulfillment to more than 1000 valued customers. Our vision
        goes beyond selling parcels of land. We believe in promoting
        larger plots of agricultural land, giving you the freedom to build
        your dream farm homes. But our commitment doesn’t end there. Once
        you become a landowner, we kickstart the plantation process with
        our highly qualified agriculture team. This not only enhances the
        value of your land but also helps you generate revenue from the
        farm land and farm houses you build."
        img={AboutsectionImg}
        // img1={AboutsectionImg1}
        /> */}
      </div>
    </>
  );
};

export default HomeAboutsection;
