import { DefaultPreviewImageUrl } from '@/shared/constant/DefaultPreviewImageUrl';
import type { ShareKakaoType } from '@/shared/types/SharedKakao';

const useKakao = () => {
    const shareWithKakao = ({
        imageURL = DefaultPreviewImageUrl,
        resultURL,
    }: ShareKakaoType) => {
        const { Kakao } = window;

        Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: '비밀 덕담이 도착했습니다!',
                description: '여기를 눌러 덕담을 확인하세요 💌',
                imageWidth: 800,
                imageHeight: 420,
                imageUrl: imageURL,
                link: {
                    webUrl: resultURL,
                    mobileWebUrl: resultURL,
                },
            },
            buttons: [
                {
                    title: '나에게 어떤 덕담이 왔을까?',
                    link: {
                        webUrl: resultURL,
                        mobileWebUrl: resultURL,
                    },
                },
            ],
        });
    };

    const shareWithTwitter = (shareURL: string) => {
        window.open(
            `https://twitter.com/intent/tweet?url=${shareURL}&text=${'비밀 덕담이 도착했어요! 바로 확인해보세요🥁'}`
        );
    };

    const initKakao = () => {
        const { Kakao } = window;
        try {
            if (!Kakao.isInitialized()) {
                Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return { initKakao, shareWithKakao, shareWithTwitter };
};

export default useKakao;
