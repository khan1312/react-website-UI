import { Component } from "react";
import "./styNav.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import logo from "../assets/vibelogo.webp"




class Navbar extends Component{

    state = { clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <div className="main-container">
            <nav className="NavbarItems">
                {/* <h2 className="navbar-logo">Vibez Estates</h2> */}
                <div className="navbar-logo" ><a href="/"><img  src={logo} alt="logo"/></a></div>
                  
                <div className="menu-icons" onClick={this.handleClick}>
                <i className={this.state.clicked ? "fa-solid fa-xmark ": "fa-solid fa-bars"}></i>
               
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index)=>{
                        return(
                             <li key={index}><Link className={item.cName} to={item.url}><i className={item.icon}></i>{item.title}</Link></li>
                        )
                    })}
                   
                   {/* <li><a href="/about"><i className="fa-solid fa-circle-info"></i>About Us</a></li>
                   <li><a href="/services"><i className="fa-solid fa-briefcase"></i>Our Services</a></li>
                   <li><a href="/contact"><i className="fa-solid fa-house"></i>Contact Us</a></li> */}
                   <a href="contact"><button className="hd-apply">Apply Now</button></a>
                </ul>

            </nav>
            </div>
        )
    }
}

export default Navbar;
