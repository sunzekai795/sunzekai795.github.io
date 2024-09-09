const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "szk-blogs",
  description: 'blog page for szk',
  base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,

  plugins: [
    // vssue 评论插件
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "Ov23liHK9xSSaGV8vhew",
        clientSecret: "6c935bd520c89d92f6989682ccdf13fda0a45190",
        owner: "sunzekai795",
        repo: "sunzekai795.github.io",
      },
    ],
    // Markdown 增强
    [
      "md-enhance",
      {
        // 启用流程图
        flowchart: true,
        // Enable mermaid
        mermaid: true,
        // 启用 TeX 支持
        tex: true,
      },
    ],
  ],
}