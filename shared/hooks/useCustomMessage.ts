import { useState } from 'react';

import { DefaultPreviewImageUrl } from '@/shared/constant/DefaultPreviewImageUrl';

const useCustomMessage = () => {
    const [customMessage, setCustomMessage] = useState({
        img_url: DefaultPreviewImageUrl,
        first_word: '',
        second_word: '',
        third_word: '',
    });

    return {
        customMessage,
        setCustomMessage,
    };
};

export default useCustomMessage;
