/**
 * WindiCSS 能够在开发中提供更快的加载时间和快速的 HMR。（ACSS、CSS-in-JS）
 * author: 胡江浩
 * description: 详情请参考WindiCSS：https://windicss.org/
 * @createTime: 1/6/2022, 2:02:52 PM
 */
import colors from 'windicss/colors';

export default {
	presets: [require('./src/configs/windicss/preset')],
	extract: {
		include: ['./src/**/*.{vue,nvue}'],
	},
	theme: {  // 项目主题配置（WindiCSS 具有开箱即用的暗模式支持）
		extend: {
			colors: {
				gray: colors.trueGray,
				'theme-primary': '#2b9939',
			},
		},
	},
	shortcuts: {  // 在此处为组件设置统一的UI风格样式，复杂实用程序也支持 CSS-in-JS 语法
		'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
		'btn-green': 'text-white bg-green-500 hover:bg-green-700',
	},
};
