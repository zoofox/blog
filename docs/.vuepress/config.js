module.exports = {
	base: '/blog/',
	title: 'blog',
	description: 'Vuepress blog',
	themeConfig: {
		// 你的GitHub仓库，请正确填写
		repo: 'https://github.com/zoofox/blog',
		// 自定义仓库链接文字。
		repoLabel: 'My GitHub',
		nav: [{
			text: 'Home',
			link: '/'
		}, {
			text: 'blog',
			link: '/blog/index.md'
		}],
		sidebar: [{
			title: "首页",
			collapsable: false,
			path: '/'
		},{
			title: "Vue",
			collapsable: false,
			sidebarDepth: 2, 
			children: [
				'blog/vue/test'
			]
		},{
			title: "Webpack",
			collapsable: false,
			sidebarDepth: 2, 
			children: [
				'blog/webpack/test'
			]
		}]
	}
}