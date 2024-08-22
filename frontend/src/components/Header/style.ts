import styled from "styled-components"

export const StyledHeader = styled.header`
    display: flex;
    height: 15vh;
    justify-content: space-between;
    padding: 0rem 3rem;
    align-items: center;
    border-bottom: var(--color-orange1) solid 3px;
    img{
        width: 160px;
        height: 80px;
    }
    div{
        a{
            text-decoration: none;
            color: var(--color-grey0);
            padding: .75rem;
            border-radius: .5rem;
        }
        display: flex;
        gap: 1rem;
    }
    div{
        a:hover{
            text-decoration: underline;
            color: var(--color-orange1);
        }
    }

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
`