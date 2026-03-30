# SaaS Bento Grid 高阶便当盒面板 (Bento Box)

当代顶级硅谷 SaaS（如 Apple, Linear, Stripe 等厂页）统治级营销范式产品宣发面板流派。

## 📍 核心法则 (Aesthetics)
- **规整即正义**：使用一种极高质量的银白光泽界面或者午夜碳黑模式，要求高质感卡片拼贴（如底色 `#F7F7F9`、卡片 `#FFFFFF`。或者极深灰色的 Bento 卡片搭配发散微白光圈）。
- **极致力场圆弧**：每个便当格统一必须被套嵌着极光润的倒圆（例如 `border-radius: 32px`），并辅佐微光描边（`border: 1px solid rgba(0,0,0,0.04)`）
- **高知字体学**：不要搞怪也不用过度拉伸。排版严谨要求调用大一统的优雅硅谷系统无衬线字组组合（推荐 `Inter`, `SF Pro Display` 的回退 `system-ui` 加粗，或极其圆润有爱的 `Quicksand` / `Outfit` 做特征值点拨）。

## 🛠 原生纯 CSS 可视化指南 (Pure Visual Code)
拒绝调用 CDN JS 图表，利用原生的布局属性本身呈现最高级的 SaaS Dashboard 的快感：
- **殿堂级 CSS Grid 拼接 (Masterpiece Grid)**：整体页面是几块巨大会呼吸的异形模块包裹。利用 `display: grid` 及强烈的 `grid-row: span 2` / `grid-column: span 1` 去把画布切分成 5~6 块有重心高矮胖瘦的“盒饭区”。
- **微量化图表指示器**：
   - 比如在某个小格子里面，用几十根纯净的、同度粗细的竖线 `div` 和不同的 `height: XX%` 实现迷你波浪柱状图走势（`gap: 4px` 的极致矩阵排列）。
   - 在某个横条格子里放一个巨大的圆锥渐变 `conic-gradient` 半圆弧模拟汽车迈速表。
- **无处不在的高光标签**：每个 KPI 数字旁一定要伴生一个极其精致小巧的纯 CSS 描边/背景渐变成长圆角徽章 (Badges)，如 `+32.6% Growth`。
