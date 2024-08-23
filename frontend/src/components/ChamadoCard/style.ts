import styled from "styled-components"

export const StyledChamadoCard = styled.li`
    padding: 1rem;
    margin: 1rem;
    background-color: var(--color-white);
    border: solid 2px var(--color-orange3);
    display: flex;
    border-radius: .5rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: sp;
    max-width: 200px;
    width: 200px;
    min-width: 200px;
    height: 250px;
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