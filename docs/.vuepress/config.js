module.exports = {
	base: '/',
	title: 'blog',
	description: 'Vuepress blog',
	themeConfig: {
		// 你的GitHub仓库，请正确填写
		repo: 'https://github.com/xxxxxxx/blog-demo',
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
			title: "Index",
			collapsable: false,
			path: '/blog/'
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