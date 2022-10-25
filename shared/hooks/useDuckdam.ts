import axios from 'axios';

import type { DuckdamWithImg, PoliteKey } from '@/shared/types/Duckdam';
import { randomNewDuckdam } from '@/shared/utils/duckdamGenerator';

const useDuckdam = (customMessage?: object) => {
    const addNewDuckdam = async (arg: PoliteKey | DuckdamWithImg) => {
        let newDuckdam;

        if (typeof arg == 'number') {
            newDuckdam = {
                ...randomNewDuckdam(arg),
            };
        }

        if (typeof arg == 'object') {
            newDuckdam = {
                ...customMessage,
            };
        }

        const url = '/api/duckdam/add';
        const { data, status } = await axios.post(url, newDuckdam, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (status === 200) {
            return data;
        }
    };

    return { addNewDuckdam };
};

export default useDuckdam;
