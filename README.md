# sunzekai795.github.io

> Peanut's Blog —— 基于 [Hexo](https://hexo.io/) 搭建的个人博客源码仓库。

线上地址：**https://sunzekai795.github.io**

## 博客内容

本站主要分享以下方向的学习笔记、论文解读与技术随笔，长期不定期更新：

- **大语言模型（LLM）**：重要模型技术报告解读、训练与后训练对齐、推理与评测。
- **情感计算与对话系统**：情感对话、共情回复生成、情感支持对话等方向的论文笔记。
- **LLM 评测**：从传统基准到 LLM-as-a-Judge、竞技场式排行榜的演进。
- **开源生态**：值得关注的高 star GitHub 项目与实用工具。
- **学习与生活随笔**。

论文类文章多为个人阅读笔记与总结评价，均标注原文出处；转载内容注明来源。

## 技术栈

- 静态博客框架：[Hexo](https://hexo.io/) `7.x`
- 主题：[Redefine](https://github.com/EvanNotFound/hexo-theme-redefine)
- 部署：GitHub Actions 自动构建 + GitHub Pages 托管（push 到 `main` 触发）

## 本地开发

```bash
# 安装依赖
npm install

# 本地预览（默认 http://localhost:4000）
npm run server      # 等价于 hexo server

# 生成静态文件
npm run build       # 等价于 hexo generate

# 清理缓存与已生成文件
npm run clean       # 等价于 hexo clean
```

## 写作

```bash
# 新建一篇文章，生成到 source/_posts/<title>.md
hexo new "文章标题"
```

文章 front-matter 示例：

```yaml
---
title: 文章标题
date: 2024-10-12 09:00:00   # 控制显示日期与排序，永久链接格式 /:year/:month/:day/:title/
categories:
  - 论文阅读
  - LLM评测
tags:
  - 标签1
  - 标签2
---
```

## 目录结构

```
.
├── _config.yml              # Hexo 主配置
├── _config.redefine.yml     # Redefine 主题配置
├── source/_posts/           # 所有文章（Markdown）
├── scaffolds/               # 新建文章/页面的模板
├── .github/workflows/       # GitHub Actions 自动部署
└── package.json
```

## License

文章内容版权归作者所有，转载请注明出处。
