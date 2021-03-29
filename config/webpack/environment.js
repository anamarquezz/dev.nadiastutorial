/* Fix a bug for file inclusion like <img :src="require()"/> */
environment.loaders.get('file').use.find(item => item.loader === 'file-loader').options.esModule = false