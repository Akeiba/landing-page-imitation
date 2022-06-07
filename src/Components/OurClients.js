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
                <img src={travelIcon}></img>
                <img src={octaneIcon}></img>
                <img src={lifeIcon}></img>
                <img src={smileIcon}></img>
            </div>
            <div className="lower-icon-row">
            <image src={travelIcon}></image>
                <img src={trueIcon}></img>
                <img src={cybexIcon}></img>
                <img src={mockupIcon}></img>
                <img src={precorIcon}></img>
            </div>
        </StyledOurClients>
    )
}

export default OurClients;