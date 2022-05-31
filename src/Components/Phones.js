import "../Styles/phones.css"
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';

export default function Phones() {
    return (<>
        <div className="contact-container">

        <div className="socials-container">
        <FaFacebookSquare className="icon" />
        <FaInstagramSquare className="icon" />
        <FaTwitterSquare className="icon" />
        <FaLinkedin className="icon" />
        </div>

        <div className="phones-container">
        <img src={"/phones-image.png"} ></img>
        </div>

        </div>
        </>
    )
};