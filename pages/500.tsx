import Link from 'next/link';

import { Button, Description, EmojiTitle, Title } from '@/components/common';
import { Bottom } from '@/components/layout';
import theme from '@/styles/theme';

const Custom500 = () => {
    return (
        <>
            <EmojiTitle>π’</EmojiTitle>
            <Title>μ! ν λΌμμ μ°κ²°μ΄ λκΈ΄ κ² κ°μμ!</Title>
            <Description>μ μ νμ λ€μ μ΄μ©ν΄μ£ΌμΈμπββοΈ</Description>

            <Bottom>
                <Link href="/">
                    <Button
                        color={theme.color.text.white}
                        backgroundColor={theme.color.background.button}
                    >
                        λλ΄ λ§λ€λ¬ κ°κΈ°
                    </Button>
                </Link>
            </Bottom>
        </>
    );
};

export default Custom500;
