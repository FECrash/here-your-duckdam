export const color = {
    background: {
        white: '#ffffff',
        black: '#000000',
        halloween_black: '#1c184e',

        primary: '#fdf5e6',
        button: '#FEAF77',
        range: '#3A3A3A',
        message: '#FFC075',

        blur: 'rgba(255, 255, 255, 0.5)',
    },
    text: {
        white: '#ffffff',
        black: '#000000',

        primary: '#493F37',
        link: '#493F37',
        button: '#f8f8f8',
        description: '#3A3A3A',
    },
} as const;

export const shadow = {
    dp_2: '0px 1px 2px rgba(58, 58, 68, 0.24), 0px 2px 4px rgba(90, 91, 106, 0.24)',
    dp_4: '0px 2px 4px rgba(58, 58, 68, 0.2), 0px 4px 8px rgba(90, 91, 106, 0.2)',
    dp_8: '0px 4px 8px rgba(58, 58, 68, 0.16), 0px 8px 16px rgba(90, 91, 106, 0.16)',
    dp_16: '0px 8px 16px rgba(58, 58, 68, 0.12), 0px 16px 32px rgba(90, 91, 106, 0.12)',
    dp_24: '0px 12px 24px rgba(58, 58, 68, 0.08), 0px 24px 48px rgba(90, 91, 106, 0.08)',
} as const;

export const theme = {
    color,
    shadow,
};

export default theme;
