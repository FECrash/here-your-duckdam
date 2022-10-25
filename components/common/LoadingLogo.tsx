import styled from '@emotion/styled';
import Image from 'next/image';
import loading from 'public/icons/halloween/loading.png';

const LoadingLogo = () => {
    return (
        <>
            <StyledImages>
                <span>
                    <Image src={loading} alt="토끼가 카드를 고르는 중" />
                </span>
            </StyledImages>
        </>
    );
};

const StyledImages = styled.div`
    span:nth-of-type(1) {
        position: relative;
        z-index: 20;
    }
    span:nth-of-type(2) {
        position: relative;
        left: 4.5rem;
        top: -10rem;
        z-index: 10;
    }
`;

export default LoadingLogo;
