module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'no-eol-whitespace': [
      true,
      {
        ignore: 'empty-lines',
      },
    ],
    'no-missing-end-of-source-newline': null,
    'no-empty-source': null,
    'value-keyword-case': null,
    'no-descending-specificity': null,
  },
};
