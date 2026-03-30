# 👾 80s 孟菲斯波普狂欢风 (Memphis Retro Pop)

极度张扬、甚至有些刺眼的 1980 年代孟菲斯视觉派！这是为文娱活动、潮流快闪、游戏宣发和狂欢级大促量身定做的。它故意违背传统的“优雅留白”，用大量高多巴胺互补色对撞、巨大的粗黑线条切割、以及胡乱飞舞的随机几何体来填满画幅。这套风格就是为了“吸引眼球”而存在的。

## 📍 :root 视觉高分贝变量
彻底抛弃柔和与平衡。所有的颜色必须采用极高亮度、毫无过渡的强对比色谱：

```css
:root {
  /* 底色可以是亮黄，或者是布满波点图案的浅紫 */
  --bg-canvas: #FFDE00; /* 高亢夺目的柠檬黄，或是 #FFF 加上下面波点背景 */
  
  /* 基础撞色组件色 (Memphis Palette) */
  --pop-pink: #FF3366;
  --pop-cyan: #00E5FF;
  --pop-purple: #8A2BE2;
  --pop-orange: #FF5722;
  
  /* 孟菲斯核心视觉标志：极致死黑硬阴影与硬描边 */
  --text-display: #000000;
  --border-epic: 4px solid #000000;
  
  /* 这种阴影完全不模糊，就是纯黑的硬位移块，犹如廉价贴纸被贴起！ */
  --shadow-sticker: 8px 8px 0px 0px #000000; 
  --shadow-sticker-reverse: -8px -8px 0px 0px var(--pop-pink);
}
```

## 📍 荒诞级不规矩排版 (Chaotic Grid & Spatial Hacks)
这不要“整齐的表格”。
- **卡片像乱飞的便利贴**：所有展示数据的容器使用巨大的圆角或者纯正直角，强制加上粗黑边框 `--border-epic` 和硬投影 `--shadow-sticker`。卡片甚至可以自带轻微的角度倾斜：`transform: rotate(-3deg);` 或者 `transform: rotate(2deg);`。
- **背景波点铺底贴图**：背景绝不能空！强烈建议使用 CSS 背景绘制网格或者经典波点：
  ```css
  body {
    background-color: #F8F8F8;
    background-image: radial-gradient(#000 15%, transparent 16%), radial-gradient(#000 15%, transparent 16%);
    background-size: 20px 20px;
    background-position: 0 0, 10px 10px;
  }
  ```

## 📍 惊叫字体组 (Screaming Typography)
- 选择具备张力、或者是块状堆叠的无衬线英文字体（如果可以找到的话），中文必须使用黑体或特粗大号的字体。
- `font-size: clamp(4rem, 15vw, 10rem);`
- 大字号的文字不仅要是粗体，更要带上**重影字效**（通过多层硬体 `text-shadow` 实现），例如：
  `text-shadow: 4px 4px 0 var(--pop-pink), 8px 8px 0 var(--pop-cyan);` —— 巨大的标题字犹如视觉炸弹轰炸画卷顶端。

## 📍 纯 CSS 的无厘头图表 (Drip & Stripe Charts)
- **斑马纹数据柱 (Zebra Bars)**：纯 CSS 可以极易打造极具表现力的条纹柱状图：
  ```css
  .chart-bar {
    background: repeating-linear-gradient(45deg, var(--pop-cyan), var(--pop-cyan) 10px, #000 10px, #000 20px);
    border: var(--border-epic);
    box-shadow: var(--shadow-sticker);
  }
  ```
- 大号乱飞的装饰图形：一定要随手用原生 CSS 加上一些带有粗边框和亮色的“三角形”、“纯正圆形”、“波浪线”漂浮在数据之间的空白处，以此引爆画面的荒诞感与狂欢属性。
