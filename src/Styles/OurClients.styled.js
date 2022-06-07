import styled from 'styled-components'

const StyledOurClients = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
margin: 2em 0;

p {
    padding: 0;
    margin: 0;
    color: #606060;
}

img {
    width: 10em;
    height: 4em;
    padding: 3em; 
    margin: 0;
}

.upper-icon-row {
    display: flex;
    flex-direction: row;
    width: 80vw;
    height: 20vh;
    justify-content: stretch;
}

.lower-icon-row {
    display: flex;
    flex-direction: row;
    width: 80vw;
    height: 20vh;
    justify-content: stretch;
    // justify-content: space-evenly;
}
`;

export default StyledOurClients;