import styled from '@emotion/styled';
import React from 'react';

const SubTitle = (props: { children: React.ReactNode }) => {
    return <StyledSubTitle>{props.children}</StyledSubTitle>;
};

export default SubTitle;

export const StyledSubTitle = styled.div`
    position: absolute;
    top: 10px;
    word-break: keep-all;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: -0.29px;
`;
