# 💳 Stripe 金融科技明亮风 (Fintech Clean & Pop)

抛弃传统的“廉价数据图表”，这是为最顶级的 SaaS 公司（如 Stripe、Linear）量身定做的极高转化率视觉方案。它要求极度纯净的白色背景、克制且高饱和的点缀色、以及如同真丝一样顺滑的多重弥漫阴影。

## 📍 :root 神级全局变量
必须将以下顶级硅谷 SaaS 调色板植入 `:root` 中全盘使用，绝不要在代码里乱写十六进制颜色的硬编码。

```css
:root {
  /* 基础底色：极度剔透的亮调 */
  --bg-canvas: #F7F9FC; /* 最底层的极浅灰蓝底色，而不是死白 */
  --bg-surface: #FFFFFF; /* 卡片的纯白底色 */
  
  /* 核心高饱和活力突刺色 (Stripe-esque) */
  --accent-primary: #635BFF; /* 极客紫蓝，绝对耀眼 */
  --accent-secondary: #00D4FF; /* 青蓝渐变协同色 */
  
  /* 信息展示色：极大反差层次 */
  --text-display: #0A2540; /* 标题采用极深的海军蓝，显得极其贵气且硬核 */
  --text-body: #425466; /* 正文使用高对比度但不出戏的灰蓝 */
  --text-muted: #8792A2;
  
  /* 最重要的：顶级 SaaS 多重弥散空间悬浮阴影 */
  --shadow-fintech: 0 50px 100px -20px rgba(50, 50, 93, 0.15),
                    0 30px 60px -30px rgba(0, 0, 0, 0.2), 
                    inset 0 -2px 6px 0 rgba(10, 37, 64, 0.05);
  
  --border-subtle: 1px solid rgba(0, 0, 0, 0.04);
  --radius-card: 24px;
}
```

## 📍 字体与暴力排版系统 (Typographic Scale & Harmony)
- **字体栈极简克制**：必须使用极具专业感的无衬线体（San Francisco 风格），例如强制设定：`font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, sans-serif;` 
- **大字暴击 (Clamp Headers)**：数据海报的标题必须极其显眼（带攻击性），使用 `font-size: clamp(3rem, 8vw, 5rem);` 以及超紧致字距 `letter-spacing: -0.04em;`，标题行高控制在绝对紧迫的 `line-height: 1.05;`。
- **纯粹字重拉扯**：标题字体极粗 (`font-weight: 800`) 与正文副标题变极其纤细 (`font-weight: 400; font-size: 1.1rem`) 并排出现，形成“大与微小”的强烈张力对拉。

## 📍 空间解构与像素级网格 (Spatial Metrics)
- 放弃传统的上中下流式排版；
- 容器必须采用极其严加防范的边距：`padding: 64px 80px;`（确保内视口宽阔得能跑马）。
- 内容卡片之间采用绝对严谨的 Grid 布局 (`gap: 32px`)，卡片悬浮使用 `--shadow-fintech`。

## 📍 巅峰图表捏造术 (CSS Visual Hacks)
1. **带光晕的背景 (Glow Meshes)**：在 `--bg-canvas` 基础上，创建一个绝对定位 (`position: absolute; z-index: 0;`) 的超大球体，设定背景色为 `--accent-primary` 加上 `filter: blur(200px); opacity: 0.15;`，这样干净的画布上会隐隐透出史诗级蓝紫光晕。
2. **纯 CSS 渐变折线图 (Data representation)**：
   不要引入 JS 库！利用 `mask-image` 手工切割 `linear-gradient`，或者使用连续 `div` 排列成精美的纯色（或高亮蓝渐变色）柱状图，顶部叠加强阴影凸显 3D 数据感知。
3. **标签的高亮设计 (Pill Tags)**：任何数据标记、增幅（如 "+24.5%"）都要做成极具精致感的微型胶囊：`padding: 4px 12px; border-radius: 999px; background: rgba(99, 91, 255, 0.1); color: var(--accent-primary); font-weight: 700;`。
