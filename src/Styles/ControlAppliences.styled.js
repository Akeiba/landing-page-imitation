import styled from 'styled-components'

const StyledControlAppliences = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
z-index: -10;
padding-top: 1em;


.controlAppliences-phone-image {
    z-index: 2; 
    padding-right: 4vw;
}

.controlAppliences-phone-container {
    width: 50vw;
    padding: 0;
    margin: 0 8em 0 0;
    text-align:right;
    position: relative;
    z-index: 2;
}

.controlAppliences-phone-container::after {
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

.controlAppliences-text-container {
    width: 50vw;
    padding: 0;
    margin: 0 0 0 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: #000F38;
}

.controlAppliences-title {
    font-weight: bolder;
    font-size: 2.4em;
    width: 80%;
    padding: 0;
    margin-bottom: 0.5em;
}

.controlAppliences-text-container p {
    width: 65%;
    font-size: 1em;
    margin: 0;
    padding: 0;
    text-align: left;
}

.controlAppliences-learn-btn {
    background-color: #fff;
    color: #2A3757;
    font-weight: bold;
    border-color: #2A3757;
    border-radius: 8px;
    margin-top: 2em;
    padding: 1em;
    width: 12vw;
    align-self: left;
    background-clip: border-box;
    cursor: pointer;
}
`;

export default StyledControlAppliences;