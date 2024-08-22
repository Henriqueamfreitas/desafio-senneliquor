import styled from "styled-components"

export const StyledDiv = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% - 2vw);
    height: 100%;
    background-color: rgba(0,0,0,0.25);
    padding: 0rem 1vw;
    
    div{
        border-radius: .5rem;
        max-width: 397px;
        background-color: white;
        width: calc(100% - 8vw);
        display: flex;
        flex-direction: column;
    }
`