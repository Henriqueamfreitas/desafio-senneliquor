import styled from "styled-components"

export const StyledLoginForm = styled.form`
    background-color: var(--color-orange3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3.1056rem 1.5031rem;
    gap: 1.1031rem;
    border-radius: 0.2006rem;
    border: solid 2px var(--color-orange3);

    button{
        height: 2.5rem;
        border-radius: .25rem;
        width: 100%;
        font-family: "Inter", sans-serif;
        font-size: 0.75rem;
        font-weight: 500;
        color: var(--color-grey);
        border: none;
        padding: 0rem 1.3938rem;
        background-color: var(--color-grey2);
    }
`