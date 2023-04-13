module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
		plugins: [
			'react-native-reanimated/plugin',
			[
				'module:react-native-dotenv',
				{
					envName: 'REACT_APP_API_BASE_URL',
					moduleName: '@env',
					path: '.env',
					blocklist: null,
					allowlist: null,
					safe: false,
					allowUndefined: true,
					verbose: false,
				},
			],
			['@babel/plugin-proposal-decorators', { legacy: true }],
			[
				'module-resolver',
				{
					root: ['./src'],
					extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
					alias: {
						'@assets': './src/assets',
						'@pages': './src/pages',
						'@components': './src/components',
						'@services': './src/services',
						'@errors': './src/errors',
						'@utils': './src/utils',
						'@databases': './src/databases',
						'@repositories': './src/repositories',
						'@models': './src/databases/tables',
						'@context': './src/context',
						'@globalComponents': './src/components/globalComponents',
						'@appTemplates': './src/templates/AppTemplates',
						'@authTemplates': './src/templates/AuthTemplates',
						'@atoms': './src/components/Atoms',
						'@molecules': './src/components/Molecules',
						'@organisms': './src/components/Organisms',
						'@routes': './src/routes',
						'@globalStyled': './src/global/styles/styles.ts',
						'@theme': './src/theme',
					},
				},
			],
		],
	};
};
