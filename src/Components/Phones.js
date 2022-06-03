import "../Styles/phones.css";
import phonesImg from "../Assets/phones-image.png"
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';

const Phones = () => {
    return (<>
        <div className="contact-container">

        <div className="socials-container">
        <FaFacebookSquare className="icon" />
        <FaInstagramSquare className="icon" />
        <FaTwitterSquare className="icon" />
        <FaLinkedin className="icon" />
        </div>
        
        <div className="phones-container">
        <img src={phonesImg} ></img>

        </div>

        </div>
        </>
    )
};

export default Phones;