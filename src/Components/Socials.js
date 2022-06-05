import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import "../Styles/contactSection.css";
import "../Styles/socials.css";


const Socials = () => {
    return (
        <div className="socials-container">
        <FaFacebookSquare className="icon" />
        <FaInstagramSquare className="icon" />
        <FaTwitterSquare className="icon" />
        <FaLinkedin className="icon" />
        </div>
    )
}

export default Socials;