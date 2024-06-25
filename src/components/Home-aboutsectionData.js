import { Component } from "react"
// import HomeAboutsection from "./Home-aboutsection"
// import "./Homeaboutsection.css"
// import AboutsectionImg from "../assets/project4.webp";
// import AboutsectionImg1 from "../assets/project3.webp";

class HomeaboutsectionData extends Component {
    render (){
        return(
            <div className={this.props.className}>
            <div className="des-text">
              <h2>{this.props.heading}</h2>
              <p>
                {this.props.text}
              </p>
            </div>
            <div className="ab-image">
              <img alt="img" src={this.props.img}/>
              <img alt="img" src={this.props.img1}/>
  
              
            </div>
          </div>
        )
    }
}

export default HomeaboutsectionData;