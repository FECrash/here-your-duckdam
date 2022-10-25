import styled from '@emotion/styled';
import React from 'react';

const Title = (props: { children: React.ReactNode }) => {
    return <StyledTitle>{props.children}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.div`
    word-break: keep-all;
    font-size: 25px;
    font-weight: bold;
    letter-spacing: -0.29px;
    color: ${({ theme }) => theme.color.text.white};
`;
