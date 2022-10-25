import Link from 'next/link';

import { Button, Logo } from '@/components/common';
import { Bottom } from '@/components/layout';
import theme from '@/styles/theme';

const Main = () => {
    return (
        <>
            <Logo />

            <Bottom>
                <Link href="/select">
                    <Button
                        color={theme.color.text.white}
                        backgroundColor={theme.color.background.button}
                    >
                        덕담 만들러 가자!
                    </Button>
                </Link>
            </Bottom>
        </>
    );
};

export default Main;
