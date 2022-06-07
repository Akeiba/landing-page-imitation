import StyledOurClients from "../Styles/OurClients.styled";
import StyledH1 from "../Styles/H1.styled";

import Description from "./Description";
import travelIcon from "../Assets/travel.png"
import octaneIcon from "../Assets/octane.png"
import lifeIcon from "../Assets/life-fitness.png"
import smileIcon from "../Assets/smile.png"
import trueIcon from "../Assets/true.png"
import cybexIcon from "../Assets/cybex.png"
import mockupIcon from "../Assets/mockup.png"
import precorIcon from "../Assets/precor.png"

const OurClients = () => {
    return (
        <StyledOurClients>
            <StyledH1>Our Clients</StyledH1>
            <Description />
            <div className="upper-icon-row">
                <img src={travelIcon} alt=""></img>
                <img src={octaneIcon} alt=""></img>
                <img src={lifeIcon} alt=""></img>
                <img src={smileIcon} alt=""></img>
            </div>
            
            <div className="lower-icon-row">
                <img src={trueIcon} alt=""></img>
                <img src={cybexIcon} alt=""></img>
                <img src={mockupIcon} alt=""></img>
                <img src={precorIcon} alt=""></img>
            </div>
        </StyledOurClients>
    )
}

export default OurClients;