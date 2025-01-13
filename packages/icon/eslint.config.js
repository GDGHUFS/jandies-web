import { config as reactConfig } from '@jandies/eslint-config/react-internal';

const config = [...reactConfig, { rules: { 'react/prop-types': 'off' } }];

/** @type {import('eslint').Linter.Config} */
export default config;
