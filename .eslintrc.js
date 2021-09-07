module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-undef': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-void': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
    'react/jsx-uses-react': 'off',
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    'no-console': 'off',
    'react/no-array-index-key': 'off',
    'no-underscore-dangle': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    'import/no-unresolved': 'off',
  },
};
