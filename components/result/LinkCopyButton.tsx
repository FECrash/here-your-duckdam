import styled from '@emotion/styled';
import Image from 'next/image';
import copyIcon from 'public/images/chuseok/copy-icon.svg';
import React, { useRef } from 'react';

const LinkCopyButton = (props: { children: React.ReactNode }) => {
    const linkRef = useRef<HTMLSpanElement>(null);

    const handleCopyToClipboard = () => {
        const link = linkRef.current?.innerText as string;
        navigator.clipboard.writeText(link);
        alert('링크가 복사되었습니다!');
    };

    return (
        <Container>
            <Result ref={linkRef}>{props.children}</Result>
            <CopyButton onClick={handleCopyToClipboard}>
                <Image src={copyIcon} alt="URL 클립보드 복사 아이콘" />
            </CopyButton>
        </Container>
    );
};

export default LinkCopyButton;

const Container = styled.div`
    background-color: ${({ theme }) => theme.color.background.white};
    box-shadow: ${({ theme }) => theme.shadow.dp_8};
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 1px;
    height: 50px;
    width: 85%;
`;

const Result = styled.span`
    color: ${({ theme }) => theme.color.background.button};
    padding: 0px 12px;
    overflow-y: auto;
    font-weight: bold;
    white-space: nowrap;

    ::-webkit-scrollbar {
        display: none;
    }
`;

const CopyButton = styled.button`
    background-color: ${({ theme }) => theme.color.background.button};
    font-size: 16px;
    width: 45px;
    height: 100%;
    padding-top: 5px;
`;
