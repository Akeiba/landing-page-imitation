import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import StyledSocials from '../Styles/Socials.styled';


const Socials = () => {
    return (
        <StyledSocials>
            <FaFacebookSquare className="icon" />
            <FaInstagramSquare className="icon" />
            <FaTwitterSquare className="icon" />
            <FaLinkedin className="icon" />
        </StyledSocials>    
    )
}

export default Socials;