import styled from '@emotion/styled';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { color } from '@/styles/theme';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    backgroundColor?: typeof color.background[keyof typeof color.background];
}

const Button = ({
    children,
    ...otherProps
}: PropsWithChildren<ButtonProps>) => {
    return (
        <Wrapper>
            <StyledButton {...otherProps}>{children}</StyledButton>
        </Wrapper>
    );
};

export default Button;

const Wrapper = styled.div`
    width: 100%;
    padding: 9px 0;
    text-align: center;
`;

const StyledButton = styled.button<ButtonProps>`
    width: 90%;
    /* color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor}; */
    color: ${({ theme }) => theme.color.text.black};
    background-color: ${({ theme }) => theme.color.background.button};
    border-radius: 10px;
    font-weight: bold;
    font-size: 1em;
    height: 60px;
    margin: auto;
`;
