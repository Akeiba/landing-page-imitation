import StyledTestimonials from "../Styles/Testimonials.styled";
import StyledH1 from "../Styles/H1.styled";
import { LoremIpsum } from 'react-lorem-ipsum';

import Description from "./Description";
import person1 from "../Assets/person-1.png"
import person2 from "../Assets/person-2.png"
import person3 from "../Assets/person-3.png"
import person4 from "../Assets/person-4.png"

const Testimonials = () => {
    return (
        <StyledTestimonials>
            <StyledH1>Testimonials</StyledH1>
            <Description />
            <div className="reviews">
                <div className="review-icon">    
                    <p className="review-text"><LoremIpsum avgWordsPerSentence={8} avgSentencesPerParagraph={4} /></p>
                    <div className="reviewer-details">
                        <img src={person1} alt="client reviews"></img>
                        <p className="reviewer-name"><span>Cham</span><br></br>Product designer - Besnik</p>
                    </div>
                </div>

                <div className="review-icon">
                    <p className="review-text"><LoremIpsum avgWordsPerSentence={8} avgSentencesPerParagraph={4} /></p>
                    <div className="reviewer-details">
                        <img src={person2} alt="client reviews"></img>
                        <p className="reviewer-name"><span>Scopic Software</span><br></br>Custom IT Solutions Firm</p>
                    </div>
                </div>

                <div className="review-icon">
                    <p className="review-text"><LoremIpsum avgWordsPerSentence={8} avgSentencesPerParagraph={4} /></p>
                    <div className="reviewer-details">
                        <img src={person3} alt="client reviews"></img>
                        <p className="reviewer-name"><span>Russell Lee</span><br></br>Writer</p>
                    </div>
                </div>

                <div className="review-icon">
                    <p className="review-text"><LoremIpsum avgWordsPerSentence={8} avgSentencesPerParagraph={4} /></p>
                    <div className="reviewer-details">
                        <img src={person4} alt="client reviews"></img>
                        <p className="reviewer-name"><span>Solace Engineers Inc.</span><br></br>Engineering Firm</p>
                    </div>
                </div>
            </div>
        </StyledTestimonials>
    )
}

export default Testimonials; 