module.exports = {
    title: 'VuePress中文网',  // 设置网站标题
    description: 'vuepress=>test',// 网站描述。这将在页面 HTML 中表现为一个 <meta> 标签。
    lastUpdated: 'Last Updated',// 文档更新时间：每个文件git最后提交的时间,
    base: '/',// 这是部署到github相关的配置它应该始终以斜杠开始和结束
    head: [ // 注入到当前页面的 HTML <head> 中的标签   meta style script link 等等
        ['title', { rel: 'VuePress介绍 - VuePress中文网' }],
        ['link', { rel: 'icon', href: 'img/logo.png' }],
        ['meta', { rel: 'meta', href: './' }],
        ['link', { rel: 'link', href: './' }],
        ['script', { rel: 'script', href: './' }],
        ['style', { rel: 'style', href: './' }],
    ],
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    // 主题化(theming)
    themeConfig: {
        nav: [// 导航栏配置
            //------------------直接添加壹级导航-----------------------//
            { text: '指南', link: '/AAA/apiword' },
            { text: '配置参考', link: '/AAA/api' },
            { text: '默认主题配置', link: '/BBB/' },
            { text: 'vue', link: '/vue/' },
            { text: '百度', link: 'https://www.baidu.com/' },
            //------------------直接添加壹级导航-----------------------//
            {
                text: '下拉链接导航',
                items: [
                    { text: '指南', link: '/AAA/apiword' },
                    { text: '配置参考', link: '/AAA/api' },
                    { text: '默认主题配置', link: '/BBB/error' },
                    { text: '百度', link: 'https://www.baidu.com/' },
                ]
            },
        ],
        sidebar: {//侧边栏 侧边栏菜单( 一个模块对应一个菜单形式 )sidebar: auto=>自动使用标题侧边栏    !!!!!分组会将直接分组直接覆盖
            /**不分组菜单**/
            '/AAA/': [//直接显示无分组    
                "apiword", //指的是根目录的md文件 也就是 README.md 里面的内容
            ],
            /**多级菜单形式 **/
            '/AAA/': [//显示分组 => 多级菜单形式
                {
                    title: '指南',// 菜单名
                    collapsable: true, //是否可展开
                    children: [// 子菜单
                        // ['','']=>[路径,标题]
                        // 或者写成 '路径',标题自动识别为该地址的文件中的h1标题
                        // 不以 '/' 结尾的就是指向.md文件     
                        ['/AAA/apiword', 'apiword参数']
                    ]
                },
                {
                    title: '配置参考',
                    collapsable: false,
                    children: [
                        ['/AAA/api', 'api参数']
                    ]
                },
                {
                    title: '默认主题配置',
                    collapsable: true,
                    children: [
                        'api'
                    ]
                },
            ],
            '/BBB/': [//显示分组
                {
                    title: '默认主题配置',
                    collapsable: true,
                    children: [
                        ['/BBB/error', 'error参数']
                    ]
                },
            ],
            '/vue/': [//显示分组
                {
                    title: '组件通信',
                    collapsable: true,
                    children: [
                        ['/vue/组件通信', 'vue组件通信']
                    ]
                },
            ],
        },
        sidebarDepth: 2,//自定义此行为默认深度是 1,它提取 h2 标题。将其设置为 0 将禁用标题链接，最大值为2，同时提取 h2 和 h3 标题。
        // 假定 GitHub。也可以是一个完整的 GitLab 网址
        repo: 'https://github.com/youthlh/vuepress',
        // 如果你的文档不在仓库的根部
        docsDir: 'docs',
        // 可选，默认为 master
        docsBranch: 'master',
        // 默认为 true，设置为 false 来禁用
        editLinks: true
    }
}