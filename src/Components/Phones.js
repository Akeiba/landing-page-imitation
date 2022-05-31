import "../Styles/phones.css";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa'; 

export default function Phones() {
    return (<>
        <div className="contact-container">
        <div className="socials-container">
            <FaFacebookSquare className="icon"/>
            <FaInstagramSquare className="icon" />
            <FaTwitterSquare className="icon" />
            <FaLinkedin className="icon" />
        </div>

        <div className="phones-container">
        <img className="phones-img" src={"/phones-image.png"} alt="image of three phones" ></img>
        </div>
        </div>
        </>
    )
};


/* <img className="icon" src={"/facebook.png"} alt={"facebook logo"}></img>
<img className="icon" src={"/instagram.png"} alt={"instagram logo"}></img>
<img className="icon" src={"/twitter.png"} alt={"twitter logo"}></img>
<img className="icon" src={"/linkedin.png"} alt={"linkeddin logo"}></img> */
