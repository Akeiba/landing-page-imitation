import phonesImg from "../Assets/phones-image.png";
import "../Styles/contactSection.css";
import  "../Styles/phones.css";


const Phones = () => {
    return (
        <>  
            <div className="phones-container">
            <img src={phonesImg} ></img>
        </div>
        </>
    )
};

export default Phones;