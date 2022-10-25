import styled from '@emotion/styled';
import React from 'react';

const Description = (props: { children: React.ReactNode }) => {
    return <StyledDescription>{props.children}</StyledDescription>;
};

export default Description;

const StyledDescription = styled.div`
    margin-top: 10px;
    font-size: 14px;
    word-break: break-all;
    color: ${({ theme }) => theme.color.text.white};
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
`;
