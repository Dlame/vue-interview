const path = require("path");
const dayjs = require("dayjs");
function resolve(dir) {
	return path.join(__dirname, dir);
}

module.exports = {
	// 基本路径
	publicPath: "./",
	// 输出文件目录
	outputDir: "dist/bundle" + dayjs().format("YYYYMMDDHHmm"),
	assetsDir: dayjs().format("YYYYMMDDHHmm"), // 静态资源目录 (js, css, img, fonts)
	// eslint-loader 是否在保存的时候检查
	lintOnSave: true,
	productionSourceMap: false,
	devServer: {
		//  配置对应外网访问时对应的 host ,可从 window.location.host  取到
		// 解决外网访问无法热更新的问题
		sockHost: "",
		disableHostCheck: true,
		host: "0.0.0.0",
		port: 8000,
		hot: true,
		https: false,
		hotOnly: false,
		proxy: null,
	},
	chainWebpack: (config) => {
		config.resolve.alias.set("@", resolve("src"));
		if (process.env.NODE_ENV == "production") {
			config
				.plugin("webpack-bundle-analyzer")
				.use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
		}
	},
	configureWebpack: {
		externals: {
			vue: "Vue",
			"vue-router": "VueRouter",
			vuex: "Vuex",
			dayjs: "dayjs",
		},
	},
	parallel: require("os").cpus().length > 1,
};
