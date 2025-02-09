//✅ .eslintrc.cjs file code ko clean aur error-free banane ke liye hoti hai.
//✅ Yeh file JavaScript & React rules set karti hai, jisse formatting aur errors ko control kiya jaye.
//✅ Rules set karein, unnecessary files ignore karein, aur React plugins add karein taki development smooth rah
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
