import styled from 'styled-components'

const StyledBottomDownload = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .download-text-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 50vw;
        margin-bottom: 20vh;
        margin: 0 0 20vh 6vw;
    } 

    .download-header {
        padding: 0;
        margin: 0;
        align-self: center;
        width: 24vw;
    }

    .download-description {
        width: 60vw;
        text-align: left;
        color: #606060;
    }
    
    .download-phone-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50vw;
        filter: drop-shadow(-30px 0px 34px #C7C7C7);

    }

    .download-icons {
        cursor: pointer;
        height: 3.5rem;
        width: 20rem;
        margin: 0;
        padding: 0;
    }
`;

export default StyledBottomDownload;