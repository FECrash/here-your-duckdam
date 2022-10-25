import styled from '@emotion/styled';
import React from 'react';

import { SubTitle } from '@/components/common';

type CustomCardProps = {
    key: number;
    card: any; //TODO: 타입 지정 예정
};
const CustomCard = ({ key, card }: CustomCardProps) => {
    return (
        <Card key={key}>
            <SubTitle>{card.title}</SubTitle>
            <div>
                <input
                    id={card.id}
                    name={card.id}
                    type="text"
                    required
                    placeholder={card.placeholder}
                />
            </div>
        </Card>
    );
};

export default CustomCard;

const Card = styled.div`
    flex-direction: column;
    width: 90%;
    height: 80px;
    position: relative;
    background: ${({ theme }) => theme.color.background.blur};
    border: 2px solid ${({ theme }) => theme.color.background.white};
    border-radius: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
        font-size: 15px;
        width: 250px;
        border: none;
        background: none;
        margin-top: 1em;
    }
    margin-top: 50px;
`;
