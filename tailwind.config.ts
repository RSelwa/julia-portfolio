import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#EBF3FA',
                    100: '#D7E7F4',
                    200: '#AFCFE9',
                    300: '#87B7DE',
                    400: '#5F9FD3',
                    500: '#112A3E',
                    600: '#2C6CA0',
                    700: '#215178',
                    800: '#163650',
                    900: '#0B1B28',
                    950: '#050D14',
                },
                secondary: {
                    50: '#FCFEE6',
                    100: '#FAFECD',
                    200: '#F5FD9B',
                    300: '#F0FC69',
                    400: '#EBFB37',
                    500: '#F0FC6F',
                    600: '#B8C804',
                    700: '#8A9603',
                    800: '#5C6402',
                    900: '#2E3201',
                    950: '#171901',
                },
                blue: {
                    50: '#E6F1FF',
                    100: '#CCE2FF',
                    200: '#9AC5FE',
                    300: '#67A8FE',
                    400: '#348CFE',
                    500: '#014195',
                    600: '#0159CB',
                    700: '#014298',
                    800: '#012C65',
                    900: '#001633',
                    950: '#000B19',
                },
            },
            borderRadius: {
                '4xl': '2rem',
            },
            fontFamily: {
                serif: ['"roslindale"', ...defaultTheme.fontFamily.serif],
            },
        },
    },
    plugins: [],
}
export default config
