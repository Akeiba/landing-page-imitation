import StyledDownloads from "../Styles/Downloads.styled";
import downloadImg from "../Assets/downloadimg.png"


const Downloads = () => {
    return (
        <>
        <StyledDownloads>
            <img src={downloadImg} className="download-img" alt="Images of download options"></img>
        </StyledDownloads>        </>
    ) 
}

export default Downloads;