import styled from '@emotion/styled';
import Image from 'next/image';
import copyIcon from 'public/images/copy-icon.svg';
import React from 'react';

type LinkCopyButtonProps = {
    children: React.ReactNode;
    ref?: any;
    onClick?: () => void;
};

const LinkCopyButton = (props: LinkCopyButtonProps) => {
    return (
        <Container>
            <Result ref={props.ref}>{props.children}</Result>
            <CopyButton onClick={props.onClick}>
                <StyledImage src={copyIcon} />
            </CopyButton>
        </Container>
    );
};

export default LinkCopyButton;

const Container = styled.div`
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    justify-content: space-between;
    /* justify-content: flex-start; */
    align-items: center;
    position: relative;
    font-size: 18px;
    letter-spacing: 1px;
    height: 50px;
    width: 80%;
    border-radius: 5px;
`;

const Result = styled.span`
    word-wrap: break-word;
    padding: 0px 7px;
    max-width: calc(100% - 40px);
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ::-webkit-scrollbar {
        width: 1rem;
    }
`;

const CopyButton = styled.button`
    background-color: ${({ theme }) => theme.color.brown};
    font-size: 16px;
    width: 12%;
    height: 100%;
`;

const StyledImage = styled(Image)`
    width: 80%;
    height: 80%;
    color: ${({ theme }) => theme.color.white};
`;
