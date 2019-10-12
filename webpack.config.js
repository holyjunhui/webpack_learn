const path = require('path')
module.exports = {
	entry:{
		search:'./src/search.js'
	},
	output:{
		path:path.join(__dirname, 'dist'),
		filename:'[name].js'
	},
	mode:'production',
	module: {
		rules: [
			{
				test:/.js$/,
				exclude: /node_modules/, 
				use: "babel-loader"
			},
			{
				test:/.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			},
			{
				test:/.less$/,
				use:[
					'style-loader',
					'css-loader',
					'less-loader'
				]
			}
		]
	}
}