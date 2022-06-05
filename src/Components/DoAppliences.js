import phoneImg from "../Assets/single-phone.png";
import { LoremIpsum } from 'react-lorem-ipsum';
import "../Styles/doAppliences.css";


const DoAppliences = () => {
    return (
    <>
    <div className="doAppliences-container">
        <div className="doAppliences-text-container">
            <h2 className="doAppliences-title">What app can do to your appliences?</h2>
            <LoremIpsum p={1} className="doAppliences-text" />
            <button className="doAppliences-learn-btn">Learn More</button>
        </div>

        <div className="doAppliences-phone-container">
            <img className="phone-image" src={phoneImg} alt="phone"></img>
        </div>

    </div>
</>
)
}

export default DoAppliences;