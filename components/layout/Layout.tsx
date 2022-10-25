import styled from '@emotion/styled';

import MetaHead from '@/components/common/MetaHead';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <MetaHead />
            <Wrapper>{children}</Wrapper>
        </>
    );
};

export default Layout;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    max-width: 480px;
    width: 100%;
    height: 100vh;
    box-shadow: ${({ theme }) => theme.shadow.dp_4};
    background: url('/images/halloween/background.png')
        ${({ theme }) => theme.color.background.halloween_black};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
`;
