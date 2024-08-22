import { Link } from "react-router-dom"
import styled, { css } from "styled-components"

interface IHeadlineStylesProps {
    fontSize: "10" | "12" | "14" | "16" | "18" | "19" | "20" | "22" | "24" | "32" | "38" | "44" | "60",
    fontWeight: "400" | "500" | "600" | "700" | "800" | "900",
    color: "grey0" | "grey1" | "grey2" | "grey3" | "grey4" | "negative" | "success",
    fontFamily: "Oswald" | "Roboto",
}

export const HeadlineStyles = css<IHeadlineStylesProps>`
    font-family: ${({ fontFamily }) => {
        switch (fontFamily) {
            case "Oswald":
                return `"Oswald", sans-serif`
            case "Roboto":
                return `"Roboto", sans-serif`
        }
    }};

    font-size: ${({ fontSize }) => {
        switch (fontSize) {
            case "10":
                return "0.625rem"
            case "12":
                return "0.75rem"
            case "14":
                return "0.875rem"
            case "16":
                return "1rem"
            case "18":
                return "1.125rem"
            case "19":
                return "1.1875rem"
            case "20":
                return "1.25rem"
            case "22":
                return "1.375rem"
            case "24":
                return "1.5rem"
            case "32":
                return "2rem"
            case "38":
                return "2.375rem"
            case "44":
                return "2.75rem"
            case "60":
                return "3.75rem"
        }
    }};

    font-weight: ${({ fontWeight }) => {
        switch (fontWeight) {
            case "400":
                return "400"
            case "500":
                return "500"
            case "600":
                return "600"
            case "700":
                return "700"
            case "800":
                return "800"
            case "900":
                return "900"
        }
    }};

    color: ${({ color }) => {
        switch (color) {
            case "grey4":
                return "var(--color-grey4)"
            case "grey3":
                return "var(--color-grey3)"
            case "grey2":
                return "var(--color-grey2)"
            case "grey1":
                return "var(--color-grey1)"
            case "grey0":
                return "var(--color-grey0)"
            case "success":
                return "var(--color-success)"
            case "negative":
                return "var(--color-negative)"
            default: 
                return "var(--color-black)"
        }
    }};

    @media (min-width: 720px) {
        font-size: ${({ fontSize }) => {
        switch (fontSize) {
            case "10":
                return "0.625rem"
            case "12":
                return "0.75rem"
            case "14":
                return "0.875rem"
            case "16":
                return "1.5rem"
            case "18":
                return "1.125rem"
            case "20":
                return "1.25rem"
            case "22":
                return "1.375rem"
            case "24":
                return "1.5rem"
            case "44":
                return "3.75rem"
            case "60":
                return "6.25rem"
        }
    }};
    }
`

export const StyledH1 = styled.h1<IHeadlineStylesProps>`
    ${HeadlineStyles}
`

export const StyledH2 = styled.h2<IHeadlineStylesProps>`
    ${HeadlineStyles}
`
export const StyledH3 = styled.h3<IHeadlineStylesProps>`
    ${HeadlineStyles}
`

export const StyledP = styled.p<IHeadlineStylesProps>`
    ${HeadlineStyles}
`

export const StyledLabel = styled.label<IHeadlineStylesProps>`
    ${HeadlineStyles}
`

export const StyledSpan = styled.span<IHeadlineStylesProps>`
    ${HeadlineStyles}
`

export const StyledLink = styled(Link) <IHeadlineStylesProps>`
    ${HeadlineStyles}
`;