import styled from 'styled-components'

const StyledFAQS = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: #000F38;
font-size: 1em;
padding-bottom: 2em;

// .expand-faqs {
//     padding: 0;
//     margin: 0;
// }

.single-faq {
    display: flex;
    flex-direction: row;
    align-items: center;
    // justify-content: center;
    border: 1px solid rgba(49, 49, 49, 0.2);
    border-radius: 10px;
    color: #606060;
    background-color: #F8F8F8;
    margin: 1em;
}

span {
    color: #1A1239;
    font-size: 3em;
    font-weight: 1;
    width: 3vw;
    text-align: center;
    padding: 0 0 0 0.7em;
}

p {
    color: #4B4B4B;
    padding: 0 2em;
}

.expanded-text {
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: flex-start;
}

.expanded-paragraph {
    width: 30vw;
}

`;

export default StyledFAQS;