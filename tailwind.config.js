/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#dce8f5',
        'bg-light': '#e8f0fa',
        card: '#e8f0fa',
        primary: '#1d6ae5',
        'primary-dark': '#1450b0',
        'primary-light': '#5b9cf6',
        text: '#1a2a4a',
        'text-muted': '#5a7090',
        'shadow-dark': '#b8cce0',
        'shadow-light': '#ffffff',
      },
      boxShadow: {
        neu: '8px 8px 16px #b8cce0, -8px -8px 16px #ffffff',
        'neu-sm': '4px 4px 8px #b8cce0, -4px -4px 8px #ffffff',
        'neu-inset': 'inset 4px 4px 8px #b8cce0, inset -4px -4px 8px #ffffff',
        'neu-hover': '12px 12px 24px #b8cce0, -12px -12px 24px #ffffff',
      },
      fontFamily: {
        sans: ['"Pretendard"', '"Noto Sans KR"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
