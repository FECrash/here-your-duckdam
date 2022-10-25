import { useEffect, useMemo, useState } from 'react';

import { PoliteKey } from '@/shared/types/Duckdam';
import { randomNewDuckdamMessage } from '@/shared/utils/duckdamGenerator';

const useAttitudeHooks = () => {
    const [politeRange, setPoliteRange] = useState<number>(50);
    const [[message1, message2], setMessage] = useState<string[]>([
        '..?',
        '..?',
    ]);
    const askMessage = useMemo(
        () => '(토끼의 새로운 덕담은 무엇일까요?🐰)',
        []
    );

    const politeLevel = useMemo((): PoliteKey => {
        if (politeRange >= 0 && politeRange < 30) {
            return 0;
        }
        if (politeRange > 33 && politeRange < 60) {
            return 50;
        }
        if (politeRange > 66 && politeRange <= 100) {
            return 100;
        }
        return 100;
    }, [politeRange]);

    useEffect(() => {
        return setMessage([
            randomNewDuckdamMessage(politeLevel),
            randomNewDuckdamMessage(politeLevel),
        ]);
    }, [politeLevel]);

    return {
        message1,
        message2,
        askMessage,
        politeLevel,
        setPoliteRange,
    };
};

export default useAttitudeHooks;
