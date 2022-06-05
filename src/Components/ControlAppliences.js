import phoneImg from "../Assets/single-phone.png";
import { LoremIpsum } from 'react-lorem-ipsum';
import "../Styles/controlAppliences.css";


const ControlAppliences = () => {
    return (
    <>
    <div className="controlAppliences-container">
        <div className="controlAppliences-phone-container">
            <img className="phone-image" src={phoneImg} alt="phone"></img>
        </div>
        <div className="services-text-container">
            <h2 className="controlAppliences-title">Control Electric Appliences</h2>
            <LoremIpsum p={1} className="controlAppliences-text" />
            <button className="controlAppliences-learn-btn">Learn More</button>
        </div>

    </div>
</>
)
}

export default ControlAppliences;