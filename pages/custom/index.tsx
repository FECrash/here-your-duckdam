import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React from 'react';

import { SubTitle } from '@/components/common';
import CustomCard from '@/components/custom/CustomCard';
import { CustomMessageExample } from '@/shared/constant/CustomMessageExample';
import useCustomMessage from '@/shared/hooks/useCustomMessage';
import useDuckdam from '@/shared/hooks/useDuckdam';

const Custom = () => {
    const router = useRouter();
    const { customMessage, setCustomMessage } = useCustomMessage();
    const { addNewDuckdam } = useDuckdam(customMessage);

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const target = event.target as HTMLFormElement;

        const first_word = target.first_word.value;
        const second_word = target.second_word.value;
        const third_word = target.third_word.value;

        const wroteCustomMessage = {
            ...customMessage,
            first_word,
            second_word,
            third_word,
        };
        setCustomMessage(wroteCustomMessage);
        postMessage();
    };

    const postMessage = async () => {
        const id = await addNewDuckdam(customMessage);
        router.push(`load/?id=${id}`);
    };

    return (
        <>
            <Wrapper>
                <SubTitle>뭐라고 써서 말장난을 칠까?</SubTitle>
                <StyledForm onSubmit={handleSubmit}>
                    {CustomMessageExample.map((card, index) => {
                        return <CustomCard key={index} card={card} />;
                    })}

                    <CustomButton
                        type="submit"
                        value="이제 놀릴 준비 됐어..."
                    ></CustomButton>
                </StyledForm>
            </Wrapper>
        </>
    );
};
export default Custom;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const StyledForm = styled.form`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`;

const CustomButton = styled.input`
    position: absolute;
    bottom: 10%;
    width: 90%;
    height: 4em;
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.background.button};
    color: ${({ theme }) => theme.color.text.black};
    font-weight: bold;
    font-size: 1em;
`;
