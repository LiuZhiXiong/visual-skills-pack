# 🌈 白石英极光毛玻璃 (Aurora Glassmorphism Light)

这种风格极其空灵、轻盈、透亮。它是为数字疗法、高端美妆、人工智能助手页面而生的顶级视觉语言。它的核心特点是：底层布置多组失焦的高明度（高饱和+高亮度）马卡龙色球体，并在上方包裹无边框的、带有微强反射切边的极度毛玻璃面板。

## 📍 :root 神级全局变量
必须丢弃全部深色，整个画布充满了光晕。

```css
:root {
  /* 白底与晶莹面板 */
  --bg-body: #FAFAFA;
  --glass-surface: rgba(255, 255, 255, 0.65); /* 强烈允许背景光晕穿透 */
  
  /* 极光失焦球体光色（绝美撞色组合） */
  --aurora-pink: #FFB6FF;
  --aurora-cyan: #80FFEA;
  --aurora-blue: #8AFFCE;
  --aurora-coral: #FFB3BA;

  /* 文字颜色尽量极简 */
  --text-display: #1E293B; /* 为了不刺眼，标题使用低饱和度的石板蓝黑 */
  --text-body: #64748B;
  
  /* 玻璃反射细节 */
  --glass-border: 1px solid rgba(255, 255, 255, 0.85); /* 提供玻璃厚度切边 */
  --glass-highlight: inset 0px 1px 0px rgba(255, 255, 255, 1);
  --glass-shadow: 0 30px 60px -10px rgba(116, 126, 153, 0.15); /* 影子也必须带有空气感 */
}
```

## 📍 字体与排版阶梯 (Typographic Grace)
- **字体栈选择**：必须要有极强的“呼吸感”。强烈采用带有明显字间距的无衬线英文字体（如果是系统字栈则优先使用苹果系统字），加入超细体大字：
  `font-family: "Outfit", "Plus Jakarta Sans", -apple-system, sans-serif;`
- **超清标题拉扯**：大字号尽量不要使用粗劣的 `bold`，请尝试 `font-weight: 300` 配合 `font-size: clamp(3rem, 10vw, 6rem);` 和 `letter-spacing: -2px;`，这样大字带有犹如印刷杂志上纤细、昂贵的质感。

## 📍 极致质感构建 (Glassmorphism Hooks)
这套风格能不能成功，完全取决于背景光和玻璃面板的真实感。
1. **背景极光交响乐 (Aurora Canvas)**：
   必须在主容器背后创建 3-4 个大体积极光光球。
   ```css
   .orb-cyan { position: absolute; width: 600px; height: 600px; border-radius: 50%; background: var(--aurora-cyan); filter: blur(120px) opacity(0.8); top: -10%; left: -10%; z-index: 0; }
   .orb-pink { /* ...类似 */ filter: blur(140px); bottom: -10%; right: 10%; }
   ```
2. **剔透玻璃折射卡片 (Glass Cards)**：
   一切数据图表的载体必须长这样：
   ```css
   .glass-card {
     position: relative; z-index: 10;
     background: var(--glass-surface);
     backdrop-filter: blur(40px) saturate(150%); /* 极其重要！模糊背景并让极光色溢出饱和度 */
     -webkit-backdrop-filter: blur(40px) saturate(150%);
     border: var(--glass-border);
     border-radius: 32px;
     box-shadow: var(--glass-shadow), var(--glass-highlight);
   }
   ```

## 📍 数据图表拟真手法 (CSS Charting)
禁止使用实心纯色绘制图表。如果是环形数据表，必须使用 `conic-gradient`，其内部颜色应像云母渐变般通透，并且整个环形上方盖一层内部 `backdrop-filter: blur(10px)` 小圆点，让图形的重叠处显示出类似显微镜下薄膜光学的美艳色彩互融！
