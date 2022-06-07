import styled from 'styled-components'

const StyledDoAppliences = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    z-index: -10;

.phone-image {
    height: 90vh;
    width: auto;
    z-index: 2; 
    margin: 0;
    padding: 0;
    margin-left: 6em;

}

.doAppliences-phone-container { 
    width: 50vw;
    padding-right: 4em;
    margin: 0 8em 0 0;
    text-align: right;
    position: relative;
    z-index: 2;
}

.doAppliences-phone-container::after {
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

.doAppliences-text-container {
    width: 50vw;
    padding: 0;
    margin: 0 1em 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: left;
    color: #000F38;
}

.doAppliences-title {
    font-weight: bolder;
    font-size: 2.4em;
    text-align: left;
    width: 65%;
    padding: 0;
    margin-bottom: 0.5em;
}

.doAppliences-text-container p {
    width: 65%;
    font-size: 1em;
    margin: 0;
    padding: 0;
    text-align: left;
}

.doAppliences-learn-btn {
    background-color: #fff;
    color: #2A3757;
    font-weight: bold;
    border-color: #2A3757;
    border-radius: 8px;
    margin-top: 2em;
    left: 0;
    padding: 1em;
    width: 12vw;
    align-self: center;
    background-clip: border-box;
    cursor: pointer;
    /* border: none; */
}
`;

export default StyledDoAppliences;