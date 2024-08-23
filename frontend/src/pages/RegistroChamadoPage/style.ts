import styled from "styled-components"

export const StyledRegistroChamadoPage = styled.main`
    padding: 0rem 5rem;
    background-color: var(--color-white);
    display: flex;
    flex-direction: column;
    max-width: calc(100vw - 10rem);
    width: calc(100vw - 10rem);
    min-width: calc(100vw - 10rem);
    h1{
        margin-top: 1.5rem;
        margin-bottom: .75rem;
        text-align: center;
    }
    div{
        display: flex;
        column-gap: 2rem;
        form, section{
            width: 50%;
        }
        section{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            ul{
                height: calc(50% - .5rem);
                min-height: calc(50% - .5rem);
                max-height: calc(50% - .5rem);
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                gap: .25rem;
            }
        }
    }
`

