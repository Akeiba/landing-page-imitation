import scrollArrowImg from "../Assets/arrow-image.png";
import StyledScrollArrow from "../Styles/ScrollArrow.styled";


const ScrollArrow = () => {
    return (
        <StyledScrollArrow>
            <img src={scrollArrowImg} alt="scroll down arrow" className="arrow" ></img>
        </StyledScrollArrow>    )
}

export default ScrollArrow;
