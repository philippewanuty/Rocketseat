import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        philippe: '#8257e6',
      },
    },
  },
  plugins: [],
};

