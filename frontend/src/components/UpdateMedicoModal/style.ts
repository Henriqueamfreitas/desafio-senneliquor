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
        padding: 1.5rem;

        .closeModalButton{
            width: 1.5rem;
            height: 1.5rem;
            display: flex;
            align-self: flex-end;
            justify-content: center;
            align-items: center;
            border: none;
            background-color: transparent;
        }

        div{
            padding: 0rem;
            width: 100%;
        }

        form{
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
            button{
                border: solid 1px var(--color-orange1);
                background-color: var(--color-white);
                color: var(--color-orange1);
                padding: .5rem 1.3938rem;
                border-radius: .5rem;
            }
            button:hover{
            background-color: var(--color-orange1);
            color: var(--color-white);
            }
        }

        ul{
            margin-top: .5rem;
        display: flex;
        flex-direction: column;
        gap: .25rem;
    }
    }
`