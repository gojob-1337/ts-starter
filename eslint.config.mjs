import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  { ignores: ['dist/**', 'coverage/**'] },
  // @gojob/eslint-config is still eslintrc-format, so it is bridged with
  // FlatCompat. Its rules are type-aware, which is why it is scoped to the
  // TypeScript sources rather than applied to every file.
  ...compat.extends('@gojob/eslint-config/typescript').map((config) => ({
    ...config,
    files: ['src/**/*.ts'],
  })),
  {
    files: ['src/**/*.ts'],
    languageOptions: { parserOptions: { project: 'tsconfig.json' } },
  },
];
