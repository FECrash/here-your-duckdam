import Image from 'next/image';
import Link from 'next/link';

import { Button, Description, Title } from '@/components/common';
import { Bottom } from '@/components/layout';
import error from '@/public/icons/halloween/404.png';
import theme from '@/styles/theme';

const Custom500 = () => {
    return (
        <>
            <Image src={error} alt="토끼가 카드를 고르는 중" />
            <Title>엇! 서버에 오류가 생겼어요!</Title>
            <Description>괜찮아요 토끼가 곧 구해드릴게요!</Description>

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

export default Custom500;
