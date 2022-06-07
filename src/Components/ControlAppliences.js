import phoneImg from "../Assets/single-phone.png";
import { LoremIpsum } from 'react-lorem-ipsum';
// import "../Styles/controlAppliences.css";
import StyledControlAppliences from "../Styles/ControlAppliences.styled";


const ControlAppliences = () => {
    return (
    <>
    <StyledControlAppliences>
        <div className="controlAppliences-phone-container">
            <img className="controlAppliences-phone-image" src={phoneImg} alt="phone"></img>
        </div>
        <div className="controlAppliences-text-container">
            <h2 className="controlAppliences-title">Control Electric Appliences</h2>
            <LoremIpsum p={1} className="controlAppliences-text" />
            <button className="controlAppliences-learn-btn">Learn More</button>
        </div> 
        </StyledControlAppliences>
</>
)
}

export default ControlAppliences;