import StyledBottomDownload from "../Styles/Bottom.styled";
import StyledH1 from "../Styles/H1.styled";
import downloadImg from "../Assets/downloadimg.png"
import Description from "./Description";
import singlePhone from "../Assets/single-phone.png";

const BottomDownload = () => {
    return (
        <>
        <StyledBottomDownload>
            <div className = "download-text-container">
                <StyledH1 className="download-header">Download <br></br>App</StyledH1>
                <div className="download-description"><Description /></div>
                <img src={downloadImg} alt="download links" className="download-icons"></img>
            </div>
            <div className="download-phone-container">
                <img src={singlePhone}></img>
            </div>
        

        </StyledBottomDownload>
        </>
    )
}

export default BottomDownload;

// className="download-description"