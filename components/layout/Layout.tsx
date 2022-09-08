import MetaHead from '@components/common/MetaHead';
import styled from '@emotion/styled';
import { KakaoSDK } from 'global';
import React, { useEffect } from 'react';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    useEffect(() => {
        const { Kakao } = window;
        try {
            if (Kakao) {
                Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
            }
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <>
            <MetaHead />
            <Wrapper>{children}</Wrapper>
        </>
    );
};

export default Layout;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    max-width: 480px;
    width: 100%;
    height: 100vh;
    background-color: #fcf5e6;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
