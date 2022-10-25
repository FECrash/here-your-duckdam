import Head from 'next/head';

import { DefaultPreviewImageUrl } from '@/shared/constant/DefaultPreviewImageUrl';

type MetaHeadProps = {
    tabTitle: string;
    title: string;
    description: string;
    url: string;
    img_url: string;
};
type OptionalMetaHeadProps = Partial<MetaHeadProps>;

const MetaHead = ({
    tabTitle = '여기 덕담이요!',
    title = '여기 덕담이요!',
    description = '가족, 친구들에게 따뜻한 한마디를 선물해보세요!',
    img_url = DefaultPreviewImageUrl,
    url = process.env.NEXT_PUBLIC_SITE_URL,
}: OptionalMetaHeadProps) => {
    return (
        <Head>
            <title>{tabTitle}</title>
            <meta name="description" content={description} key="description" />
            <link rel="icon" href="/images/favicon.ico" />

            {/* default og */}
            <meta property="og:type" content="website" key="ogType" />
            <meta property="og:image" content={img_url} key="ogImage" />
            <meta property="og:image:width" content="1200" key="ogImageWidth" />
            <meta
                property="og:image:height"
                content="600"
                key="ogImageHeight"
            />
            <meta property="og:url" content={url} key="ogURL" />
            <meta property="og:title" content={title} key="ogTitle" />
            <meta
                property="og:description"
                content={description}
                key="ogDescription"
            />

            {/* twitter og */}
            <meta
                name="twitter:card"
                content="summary_large_image"
                key="ogTwitterCard"
            />
            <meta name="twitter:title" content={title} key="ogTwitterTitle" />
            <meta
                name="twitter:description"
                content={description}
                key="ogTwitterDescription"
            />
            <meta name="twitter:image" content={img_url} key="ogTwitterImage" />
        </Head>
    );
};

export default MetaHead;
