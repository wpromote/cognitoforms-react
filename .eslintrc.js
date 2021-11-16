module.exports = {
	extends: [
		'airbnb',
		'airbnb/hooks',
		'prettier',
		'plugin:react-hooks/recommended',
	],
	plugins: ['react', 'prettier'],
	env: {
		browser: true,
		es2020: true,
		jest: true,
	},
	rules: {
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				'': 'never',
			},
		],
		'linebreak-style': 'off',
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
				printWidth: 80,
				trailingComman: 'es5',
				semi: true,
				jsxSingleQuote: true,
				singleQuote: true,
				useTabs: true,
			},
		],
	},
	overrides: [
		{
			files: ['*.jsx'],
			rules: {
				'max-classes-per-file': 'off',
				'no-param-reassign': 'off',
				'no-void': 'off',
				'import/prefer-default-export': 'off',
				'react/forbid-prop-types': 'off',
				'react/function-component-definition': 'off',
			},
		},
	],
};
