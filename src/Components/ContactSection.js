import Socials from "./Socials";
import Phones from "./Phones";
import ScrollArrow from "./ScrollArrow";
import StyledContactSection from "../Styles/Contact.styled";

const ContactSection = () => {
    return (
        <>
            <StyledContactSection>
                <Socials />
                <Phones />
                <ScrollArrow />
            </StyledContactSection>        
        </>
    )
}

export default ContactSection;