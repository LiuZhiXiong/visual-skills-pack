# 🟥 包豪斯绝对几何神庙 (Bauhaus Pure Geometry)

这是为极高学术严肃性、艺术展出、建筑工程宣发或史诗级硬数据打造的视觉天花板。它起源于一百年前包豪斯时代的哲学理念：“只有最基础的颜色（红、黄、蓝）和最纯粹的几何形体（圆、方、三角）构图才是终极真理”。这是一种近乎冷血理性的神圣美学设计。

## 📍 :root 绝对原色与冷峻架构
彻底抛弃小清新的多巴胺色谱，在这里哪怕多一种颜色杂乱都是犯罪。它是由这四大金刚统治的国度：

```css
:root {
  /* 基础铺底必须是泛黄古籍般的宣纸白或者极致的纯暗灰 */
  --bg-bauhaus: #EAE6D7; /* 或者非常苍白冰冷的 #F4F4F4 */
  
  /* 只能使用的是绝对经典三原色（允许微调至最佳对比度） */
  --color-absolute-red: #D92525;
  --color-absolute-blue: #1A3CBA;
  --color-absolute-yellow: #FFC800;
  
  /* 线条与字体只保留深不可测的纯粹墨黑 */
  --text-bauhaus: #111111;
  
  /* 没有任何阴影这种“虚伪的光影骗局” */
  --geometry-stroke: 4px solid var(--text-bauhaus); 
}
```

## 📍 理性至死の哥特排版体系 (Rational Typographic Architecture)
- **字体栈无情裁决**：如果可能，寻找最具建筑感与几何机械感的无衬线全大写字母结构，诸如 `Helvetica`, `Futura`, `DIN Alternate`, `system-ui`。
- 只有极其可怕的拉伸比例：超大字号大到仿佛钢筋巨柱（占据版面绝大篇幅）与旁边的附注小针字号交缠。
- **纵横交叉文字排版**：可以把有些极其重要的副标题设定为垂直倒置：
  `writing-mode: vertical-rl; transform: rotate(180deg); text-transform: uppercase;`
  以此打造惊人的包豪斯构成主义海报风采。

## 📍 不允许容错的几何空间 (Unforgiving Composition Grids)
不要那些庸俗随意的 `border-radius: 8px` 卡片堆叠！包豪斯的空间是：用完美的黑色直线把一个页面死死切割掉。
- 各个版块之间没有所谓的 `gap`，而是完全用黑线连接甚至通过重合形成严密的马赛克网格图谱。
- 巨大的装饰性原形：直接在纯白页面角落使用一个大到几乎覆盖1/4版面的红色正圆：
  `width: 800px; height: 800px; border-radius: 50%; background: var(--color-absolute-red); mix-blend-mode: multiply;` 从而带来绝对史诗级的强力构图与深层视觉压倒。

## 📍 最冰冷的原始图形呈现 (Geometric Data Plotting)
所有被展示的数据不要呈现成精妙柔和的趋势图，全部变回野兽派原色块大方块：
- 数据就是占据了红黄蓝比例的长方条，完全不带渐变，完全没有倒角。
- 你甚至可以使用纯粹极细斜线填充背景的 CSS `repeating-linear-gradient(...)`，呈现出极其硬核的老式工业工程蓝图质感，它既是一幅数据呈现报表，更是一幅可以刻在铁皮上的现代几何构成挂画！
