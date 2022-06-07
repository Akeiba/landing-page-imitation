import StyledFAQS from "../Styles/FAQS.styled.js";
import StyledH1 from "../Styles/H1.styled.js";
import { LoremIpsum } from 'react-lorem-ipsum';


const FAQS = () => {
    return (
        <>
        <StyledFAQS>
            <StyledH1>FAQ's</StyledH1>
            <div className="expand-faqs">
                <div className="single-faq">
                    <span>+</span>
                    <p >Chamber reached do he nothing be?</p>
                </div>

                <div className="single-faq">
                    <span>-</span>
                    <p >Stuff sight equal of my woody?</p><br></br>
                </div> 



















                <div className="single-faq">
                    <span>+</span>
                    <p >At by pleasure of children be?</p>
                </div>

                <div className="single-faq">
                    <span>+</span>
                    <p >Amounted repeated as believed in confined?</p>
                </div>

                <div className="single-faq">
                    <span>+</span>
                    <p>In am do giving to afford parish settle easily garret</p>
                </div>




            </div>
        </StyledFAQS>
        </>
    )
}

export default FAQS;




{/* <div className="single-faq">
<span>-</span>
<div className="expanded-text">
<p >Stuff sight equal of my woody?</p><br></br>
<LoremIpsum className="expanded-paragraph" avgWordsPerSentence={6} avgSentencesPerParagraph={4} />
</div>
</div> */}