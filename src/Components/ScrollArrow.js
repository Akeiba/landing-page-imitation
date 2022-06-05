import scrollArrowImg from "../Assets/arrow-image.png";
import "../Styles/contactSection.css";
import "../Styles/scrollArrow.css";


const ScrollArrow = () => {
    return (
        <div className="arrow-container">
            <img src={scrollArrowImg} alt="scroll down arrow" className="arrow" ></img>
        </div>
    )
}

export default ScrollArrow;