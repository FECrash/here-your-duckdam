import styled from '@emotion/styled';

type Item = {
    children: React.ReactNode;
};
const Card = ({ children }: Item) => {
    return <StyledCard>{children}</StyledCard>;
};

export default Card;

export const StyledCard = styled.div`
    background-color: ${({ theme }) => theme.color.background.message};
    box-shadow: ${({ theme }) => theme.shadow.dp_4};
    width: 90%;
    height: 80px;
    margin: 13px 0px;
    padding: 0 10px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    word-break: break-all;
`;
