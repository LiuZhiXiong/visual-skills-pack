# 🍱 Apple SaaS 便当盒极尽收纳系 (Bento Grid Supreme)

这是过去几年风靡全球、尤其被 Apple 大量采用于高管级宣发图的顶级长图呈现方式：一切庞杂的信息，都被极致收缩和规整进严密的网格区块（Bento盒子）内。每一个大小各异的无暇圆角盒子都散发出致命的精致工业美学。

## 📍 :root 极净便当变量
在便当盒排版中，背景常常是灰色（桌面），而内部全部是极白无瑕的模块卡。

```css
:root {
  /* 桌面背景必须稍有区分度，提供下坠空间 */
  --bg-bento-desk: #F0F2F5;
  --bg-bento-card: #FFFFFF;
  
  /* 信息强调色，如薄荷或者灰调紫 */
  --color-bento-accent: #21C063; /* 无比显眼的增量颜色 */
  --text-bento-primary: #1D1D1F; /* 绝对纯正的苹果高级灰黑 */
  --text-bento-secondary: #86868B;
  
  /* 精湛的一级悬浮边距光效阴影 */
  --shadow-bento: 0px 8px 32px 0px rgba(0, 0, 0, 0.04);
  /* 有时为了营造物理隔离，加上丝滑的 1px Border */
  --border-bento: 1px solid rgba(0, 0, 0, 0.05);

  --radius-bento: 32px; /* 惊人的大圆角度 */
}
```

## 📍 高效秩序字体组 (Systematic Typography)
- 为了完美契合方块中的精细内容控制，你需要使用极其工整无瑕疵的系统默认字体栈或者类似于 `SF Pro Display`, `Inter` 的强识别性现代字。
- **标题控制在极尽工整的水平线**。绝不要用那些拉伸错拉的排版！所有文字严格在盒子内靠左上或中下整齐堆叠，标题需要紧凑的粗体 `font-weight: 600; font-size: 1.5rem; letter-spacing: -0.02em;`，且所有文字要遵循与边缘严格保持平衡的 padding (例如 `32px` 四面均等留白)。

## 📍 Bento Grid 神工排布法 (Masonry Rules)
- 主容器 `body` 或 `main` 必须强制启用 `display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;`（对于海报长宽比例，如果纵向可以是 `repeat(2, 1fr)` 的分栏），甚至可以使用 CSS Grid 中绝妙的跨行跨列：
  ```css
  .bento-large { grid-column: span 2; grid-row: span 2; }
  .bento-wide { grid-column: span 2; grid-row: span 1; }
  .bento-tall { grid-column: span 1; grid-row: span 2; }
  .bento-small { grid-column: span 1; grid-row: span 1; }
  ```
  这样，不论你产生多少数据模块，全都会完美地嵌合成一个高能的长方形！

## 📍 模块内部的全覆满视觉图 (Full-Bleed Charts)
- 这是让便当盒立刻变得无比昂贵的秘密：
  某个 `bento-card` 中呈现底部进度或图表时，应该让这个色块**完全贴底溢出**、并跟随大圆角切口！
  只需要确保卡片自带 `overflow: hidden; border-radius: var(--radius-bento);`，那么当你往它底部插入一个极其漂亮的翠绿色波浪 SVG 或者多层 `div` 数据柱时，它们就像被完美嵌在了这个树脂玻璃盒子里一样，令人窒息的高贵！
