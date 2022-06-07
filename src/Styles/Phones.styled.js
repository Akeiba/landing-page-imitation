import styled from 'styled-components'

const StyledPhones = styled.div`
    width: 80vw;
    height: 100vh; 
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly; 

img {
    justify-content: center;
    width: 65%;
    height: 90%;
    padding: 0;
    margin: 0 70px 0;
    box-shadow: 0 0 80px rgba(0, 0, 0, 0.6);
}
`;

export default StyledPhones;