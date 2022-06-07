import phoneImg from "../Assets/single-phone.png";
import { LoremIpsum } from 'react-lorem-ipsum';
import StyledDoAppliences from "../Styles/DoAppliences.styled";


const DoAppliences = () => { 
    return (
    <>
    <StyledDoAppliences>

        <div className="doAppliences-text-container">
            <h2 className="doAppliences-title">What app can do to your appliences?</h2>
            <LoremIpsum p={1} className="doAppliences-text" />
            <button className="doAppliences-learn-btn">Learn More</button>
        </div>

        <div className="doAppliences-phone-container">
            <img className="doAppliences-phone-image" src={phoneImg} alt="phone"></img>
        </div>

        </StyledDoAppliences></>
)
}

export default DoAppliences;