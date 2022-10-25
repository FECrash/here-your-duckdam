import styled from '@emotion/styled';
import Image from 'next/image';
import logo from 'public/icons/halloween/main-logo.png';

const Logo = () => {
    return (
        <Wrapper>
            <Image src={logo} layout="responsive" alt="달토끼" />
        </Wrapper>
    );
};

export default Logo;

const Wrapper = styled.div`
    width: 100%;
`;
