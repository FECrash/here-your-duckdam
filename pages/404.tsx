import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/icons/halloween/404.png';

import { Button, Description, Title } from '@/components/common';
import { Bottom } from '@/components/layout';
import theme from '@/styles/theme';

const Custom404 = () => {
    return (
        <>
            <Image src={logo} layout="fixed" alt="❎" />
            <Title> 토끼가 찾을 수 없는 곳에 계신 것 같아요.</Title>
            <Description>
                하지만 저희가 도움을 드릴게요!👨‍💻 <br />
                아래 버튼을 클릭해주세요
            </Description>
            <Bottom>
                <Link href="/">
                    <Button
                        color={theme.color.text.white}
                        backgroundColor={theme.color.background.button}
                    >
                        덕담 만들러 가기
                    </Button>
                </Link>
            </Bottom>
        </>
    );
};

export default Custom404;
