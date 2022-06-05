import Socials from "./Socials";
import Phones from "./Phones";
import ScrollArrow from "./ScrollArrow";
import "../Styles/contactSection.css";

const ConstactSection = () => {
    return (
        <>
            <div className="contact-container">
                <Socials />
                <Phones />
                <ScrollArrow />
            </div>
        </>
    )
}

export default ConstactSection;