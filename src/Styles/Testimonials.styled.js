import styled from 'styled-components'

const StyledTestimonials = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-bottom: 1em;
color: #606060;


.reviews {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    font-size: 0.9em;
}

.review-text {
    padding: 0;
    margin: 0;
}

p {
    padding: 0.2em;
    margin: 1em;
}

.review-icon {
    margin: 0.5em;
    width: 35vw;
    border: 1px solid rgba(49, 49, 49, 0.2);
    border-radius: 10px;
    height:35vh;
    color: #606060;
    background-color: #F8F8F8;
}

.reviewer-details {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 1.5em;
    margin: 0;
    font-size: 0.8em;
}

img {
    width: 4em;
    height: 4em;
    border-radius: 50%;
}

span {
    font-weight: bold;
}
`;



export default StyledTestimonials;