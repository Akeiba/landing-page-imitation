import "../Styles/downloads.css";
import downloadImg from "../Assets/downloadimg.png"


const Downloads = () => {
    return (
        <>
        <div className="download-container">
            <img src={downloadImg} className="download-img" alt="Images of download options"></img>
        </div>
        </>
    )
}

export default Downloads;