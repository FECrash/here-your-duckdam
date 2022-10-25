import styled from '@emotion/styled';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import duckdamPackage from 'public/icons/halloween/halloween_package.png';
import { useEffect } from 'react';

import { Button, Description, MessageBox, Title } from '@/components/common';
import { Bottom } from '@/components/layout';
import { LinkCopyButton } from '@/components/result';
import useKakao from '@/shared/hooks/useKakao';
import type { DuckdamWithImg } from '@/shared/types/Duckdam';
import { theme } from '@/styles/index';

type ResultProps = {
    data: DuckdamWithImg;
};

const Result = ({ data }: ResultProps) => {
    const { initKakao, shareWithKakao, shareWithTwitter } = useKakao();
    const { img_url } = data;
    const router = useRouter();
    const resultId = router.query.resultId as string;
    const resultURL = process.env.NEXT_PUBLIC_SITE_URL + 'secret/' + resultId;

    useEffect(() => {
        initKakao();
    }, [initKakao]);

    return (
        <>
            <Wrapper>
                <Image src={duckdamPackage} alt="달모양 덕담 패키지" />

                <MessageBox>
                    <Title>덕담이 만들어졌어요!</Title>
                    <Description>
                        * 남들에게 공유하기 전까지
                        <br />
                        덕담은 비밀로 유지됩니다! 🤫
                    </Description>
                </MessageBox>
                <LinkCopyButton>{resultURL}</LinkCopyButton>
            </Wrapper>
            <Bottom>
                <Button
                    onClick={() => {
                        const props = {
                            imageURL: img_url,
                            resultURL,
                        };
                        shareWithKakao(props);
                    }}
                    color={theme.color.text.white}
                    backgroundColor={theme.color.background.button}
                >
                    카톡으로 비밀덕담 나누기
                </Button>
                <Button
                    onClick={() => {
                        shareWithTwitter(resultURL);
                    }}
                    color={theme.color.text.white}
                    backgroundColor={theme.color.background.button}
                >
                    트위터로 비밀덕담 나누기
                </Button>
            </Bottom>
        </>
    );
};

export default Result;

export async function getServerSideProps(context: {
    params: { resultId: string };
}) {
    const { params } = context;

    const url = `${process.env.NEXT_PUBLIC_SITE_URL}/api/duckdam/${params.resultId}`;
    const { data } = await axios(url);

    return {
        props: { data, id: params.resultId }, // will be passed to the page component as props
    };
}

const Wrapper = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
