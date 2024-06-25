import Services from "./Services";
import "./Services.css";

function ServicesData(props){
    return(
        <div className="Service-card">
            <div className="service-image">
                <img src={props.image} alt="service-image"/>

            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <a href="/resume"><button className="apply-btn">Apply Now</button></a>
        </div>
    );
}

export default ServicesData;