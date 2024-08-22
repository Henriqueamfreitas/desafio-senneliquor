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
/* 
    .modal__header{
        background-color: var(--color-primary);
        padding: .5rem 4vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-bottom-left-radius: 0rem;
        border-bottom-right-radius: 0rem;
        button{
            background-color: transparent;
            width: fit-content;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-grey0);
        }
    }

    .modal__cartProducts{
        display: flex;
        flex-direction: column;
        padding: .5rem 4vw;
        text-align: center;
        justify-content: center;
        height: 165px;
        max-height: 165px;
        ul{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            height: 100%;
            overflow-y: scroll;
            margin: .6rem 0rem;
        }
    }
    
    .modal__summary{
        border-radius: 0rem;
        border-top: solid 2px var(--color-grey100);
        width: calc(100% - 8vw);
        padding: .5rem 0rem 1rem 0rem;
        margin: 0rem 4vw;
        div{
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-between;
            margin-bottom: .5rem;
        }
        button{
            width: 100%;
            border: none;
            background-color: var(--color-grey300);
            color: var(--color-white);
            border-radius: .5rem;
            padding: .75rem;
        }
    } */
`