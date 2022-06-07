import StyledServices from "../Styles/Services.styled";
import phoneImg from "../Assets/single-phone.png";
import { LoremIpsum } from 'react-lorem-ipsum';

const Services = () => {
    return (
        <>
        <StyledServices>
                <div className="services-phone-container">
                    <img className="phone-image" src={phoneImg} alt="phone"></img>
                </div>
                <div className="services-text-container">
                    <h2 className="services-title">Smart Home's Smart Services</h2>
                    <LoremIpsum p={1} className="services-text" />
                    <button className="services-learn-btn">Learn more</button>
                </div>
                </StyledServices>        </>
    )
}

export default Services; 