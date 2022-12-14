import Link from 'next/link';

import { Button, Description, EmojiTitle, Title } from '@/components/common';
import { Bottom } from '@/components/layout';
import theme from '@/styles/theme';

const Custom404 = () => {
    return (
        <>
            <EmojiTitle>π«₯</EmojiTitle>
            <Title>ν λΌκ° μ°Ύμ μ μλ κ³³μ κ³μ  κ² κ°μμ.</Title>
            <Description>
                νμ§λ§ μ ν¬κ° λμμ λλ¦΄κ²μ!π¨βπ» <br />
                μλ λ²νΌμ ν΄λ¦­ν΄μ£ΌμΈμ
            </Description>

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

export default Custom404;
