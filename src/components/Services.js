import "./Services.css"
import ServicesData from "./ServicesData";
import service1 from "../assets/imgcallcenter.jpg";
import service2 from "../assets/account.jpg";
import service3 from "../assets/analits.jpg";
import service4 from "../assets/Software.jpg";
import service5 from "../assets/appdevelopment.jpg";
import service6 from "../assets/social.jpg";


function Services (){
    return (
        <div className="Services">
            <h1>Our Services</h1>
            <p>You can Discover our Services </p>
            <div className="serviccard">
                <ServicesData 
                image={service1}
                heading="Service1"
                text="lorem Line 8:17:  Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` 
                (or any specified custom words) in the alt pro lorem Line 8:17:  Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` 
                (or any specified custom words) in the alt pro"
                />
                <ServicesData 
                image={service2}
                heading="Service2"
                text="lorem Line 8:17:  Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` 
                (or any specified custom words) in the alt pro lorem Line 8:17:  Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` 
                (or any specified custom words) in the alt pro"
                />
                <ServicesData 
                image={service3}
                heading="Service3"
                text="lorem Line 8:17:  Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` 
                (or any specified custom words) in the alt pro lorem Line 8:17:  Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` 
                (or any specified custom words) in the alt pro"
                />
                
            </div><div className="serviccard">
                <ServicesData 
                image={service4}
                heading="Service1"
                text="lorem Line 8:17:  Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` 
                (or any specified custom words) in the alt pro lorem Line 8:17:  Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` 
                (or any specified custom words) in the alt pro"
                />
                <ServicesData 
                image={service5}
                heading="Service2"
                text="lorem Line 8:17:  Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` 
                (or any specified custom words) in the alt pro lorem Line 8:17:  Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` 
                (or any specified custom words) in the alt pro"
                />
                <ServicesData 
                image={service6}
                heading="Service3"
                text="lorem Line 8:17:  Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` 
                (or any specified custom words) in the alt pro lorem Line 8:17:  Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` 
                (or any specified custom words) in the alt pro"
                />
                
            </div>
            
        </div>
    );
}

export default Services;