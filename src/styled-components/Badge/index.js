import styled from "styled-components";

export const BadgeWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 1px;
    mix-blend-mode: normal;
    border-radius: 4px;
    ${({sm, md, l, xl}) => {
        switch(true) {
            case sm: {
                return {
                    width: 53,
                    height: 22
                };
            }
            case md: {
                return {
                    width: 73,
                    height: 42
                };
            }
            case l: {
                return {
                    width: 93,
                    height: 62
                };
            }
            case xl: {
                return {
                    width: 113,
                    height: 82
                };
            }
            default: {
                return {
                    width: 53,
                    height: 22
                };
            }
        }
    }};

    ${(props) => {
        switch(props.type) {
            case 'primary': {
                return {
                    backgroundColor: `var(--primary-bg)`
                };
            }
            case 'secondary': {
                return {
                    backgroundColor: `var(--primary-bg)`,
                };
            }
            case 'regular': {
                return {
                    backgroundColor: `var(--regular-bg)`,
                };
            }
            case 'success': {
                return {
                    backgroundColor: `var(--success)`,
                };
            }
            case 'warning': {
                return {
                    backgroundColor: `var(--warning)`,
                };
            }
            case 'danger': {
                return {
                    backgroundColor: `var(--danger)`,
                };
            }
            default : {
                return {
                    backgroundColor: `var(--primary-bg)`,
                };
            }
        }
    } }
`;