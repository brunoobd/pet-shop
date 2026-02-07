import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    ignores: [
      'src/generated/prisma/**',
      'pgdata/**',
      '.next/**',
      'node_modules/**',
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
    },
  },
];

export default eslintConfig;
