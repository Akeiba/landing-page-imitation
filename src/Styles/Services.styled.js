import styled from 'styled-components'

const StyledServices = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
z-index: -10;


.phone-image {
    height: 90vh;
    width: auto;
    z-index: 2; 
    padding-right: 4vw;
}

.services-phone-container {
    width: 50vw;
    padding: 0;
    margin: 0 8em 0 0;
    text-align:right;
    position: relative;
    z-index: 2;
}

.services-phone-container::after {
    content: " ";
    background-color: rgb(30,90,249);
    z-index: -1;
    position: absolute;
    height: 55%;
    width: 85%;
    left: 25%;
    top: 35%;
    border-radius: 10px;
}

.services-text-container {
    width: 50vw;
    padding: 0;
    margin: 0 0 0 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: #000F38;
}

.services-title {
    font-weight: bolder;
    font-size: 2.4em;
    width: 80%;
    padding: 0;
    margin-bottom: 0.5em;
}

.services-text-container p {
    width: 65%;
    font-size: 1em;
    margin: 0;
    padding: 0;
    text-align: left;
}

.services-learn-btn {
    background-color: #000F38;
    color: #fff;
    border-radius: 8px;
    margin-top: 2em;
    padding: 1em;
    width: 12vw;
    background-clip: border-box;
    cursor: pointer;
    border: none;
}
`;

export default StyledServices;