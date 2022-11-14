module.exports = {
	mode: "development",

	entry: "./src/index.ts",
	output: {
		path: `${__dirname}/docs`,
		filename: "main.js"
	},
	resolve: {
		extensions: [".js"]
	}
}
