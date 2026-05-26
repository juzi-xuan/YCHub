# YCHub (青途校园) — 代理指南

纯静态 HTML/CSS/JS 校园活动平台。无构建工具，无 package.json，无测试，无 lint，无类型检查。

## 本地运行

```bash
python -m http.server 8000
# 或
npx serve .
```

或者直接在浏览器中打开 `index.html`。

## 架构

- **4 个页面**：`index.html`（首页 + 轮播 + 搜索）、`classify.html`（分类侧边栏 + 列表）、`detail.html`（活动详情）、`user.html`（个人中心 + 收藏）
- **1 个样式文件**：`style.css`（约 1570 行），每个 HTML 中还有页面专用的 `<style>` 块
- **内联 JS**：轮播、搜索、分类筛选、收藏——全部写在每个页面的 `<script>` 标签中
- **图片**：`images/posters/` — 40+ 张 AI 生成的 `.jpg` 海报（建议 800x600）

## 关键陷阱（代理若不知道会浪费时间）

- **数据在各文件中重复**。每个 HTML 都有自己的一份活动数组。添加/修改活动需要编辑所有引用它的文件（index.html 有 40 条，classify.html 有分类子集，user.html 有自己独立的列表且 ID 不同）。
- **活动 ID 不一致**。index.html 使用硬编码 ID 1–40；classify.html 运行时动态生成 ID；user.html 有自己独立的 ID 映射。编辑活动必须同时修改三者。
- **`FavoriteManager` JS 代码在全部 4 个 HTML 文件中复制粘贴**。对收藏逻辑的任何改动都必须同步到所有文件。
- **`.trae/` 目录**包含历史规划文档（中文），与代理工作无关，已在 `.gitignore` 中排除。
- **CSS 变量**定义在 `style.css` 的 `:root` 中。页面专用覆盖写在各自的 `<style>` 中。

## 约定

- **5 个分类**（按顺序）：学科竞赛、志愿公益、学术讲座、社团文体、招聘宣讲
- **CSS 标签类**映射：`tag-competition`、`tag-volunteer`、`tag-lecture`、`tag-sports`、`tag-recruitment`
- **收藏**存储在 `localStorage` 的 `ychub_favorites` 键中
- **URL 参数**：`detail.html?id=N`、`index.html?search=keyword`
- **Google 字体**：`Noto+Sans+SC` 在 `style.css:2` 中加载
- **主色调**：`#7BA1A9`（天青色）
