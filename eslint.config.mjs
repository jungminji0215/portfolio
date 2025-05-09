import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Next.js core rules
  ...compat.extends('next/core-web-vitals', 'plugin:prettier/recommended'),

  // Prettier + import sort 추가
  {
    plugins: {
      prettier: require('eslint-plugin-prettier'),
      'simple-import-sort': require('eslint-plugin-simple-import-sort'),
    },
    rules: {
      // Prettier 규칙 강제
      'prettier/prettier': 'error',

      // import 순서 자동 정렬
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      // Tailwind 클래스 순서 검사
      'tailwindcss/classnames-order': 'warn',

      // React JSX에서 React import 안 해도 됨
      'react/react-in-jsx-scope': 'off',
    },
  },
];

export default eslintConfig;
