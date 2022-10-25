import { word_0, word_1, word_2 } from '@/shared/constant/CardMessage';
import type { DuckdamWithImg, PoliteKey } from '@/shared/types/Duckdam';
import { randomNumber } from '@/shared/utils/randomNumber';

import { getStorageImage } from './getStorageImage';

export const randomNewDuckdam = (politeLevel: PoliteKey): DuckdamWithImg => {
    const firstRandomIndex = randomNumber(word_0.length);
    return {
        img_url: getStorageImage(firstRandomIndex),
        first_word: word_0[firstRandomIndex],
        second_word:
            word_1[politeLevel][randomNumber(word_1[politeLevel].length)],
        third_word:
            word_2[politeLevel][randomNumber(word_2[politeLevel].length)],
    };
};

export const randomNewDuckdamMessage = (politeLevel: PoliteKey) => {
    const { first_word, second_word, third_word } =
        randomNewDuckdam(politeLevel);
    return `${first_word} ${second_word} ${third_word}`;
};
