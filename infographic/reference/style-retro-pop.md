# 80s Retro Memphis 波普反叛乐园 (Retro Pop / Memphis)

告别无聊，现在是多巴胺大爆炸时间！这是极富幽默感、毫无规则以及充斥着怀旧任天堂机房和 80 年代迷笛波点文化的拼接视觉实验。

## 📍 核心视觉法则 (Aesthetics)
- **多巴胺糖果爆弹 (Candy Bomb)**：色彩要明亮、挑逗、完全不互溶的高对比互补色。大面积刷存在感的水绿 `#00FFAA`、高亮玫红 `#FF0066`、橘橙 `#FF5500`。任何背景都应该是高明度（但别用渐变，而是纯实色大面积对撞）。
- **Base64 波点拼贴 (Polka Dot Overload)**：不要放空！背景层或者卡片里必须丢一些类似 `background-image: radial-gradient(#000 2px, transparent 2px); background-size: 16px 16px;` 的波点或者黑白斑马斜纹理。这些是它拥有复古灵魂的基础装扮。
- **粗放玩具感边缘 (Toy Outlines)**：把所有主视觉组件套上夸张厚重的纯黑、纯蓝甚至纯黄的大描边 `border: 4px solid #111;`，并且强制丢一个偏离中心的实色厚影 `box-shadow: 8px 8px 0px #FF0066;` 这让页面看起来像不拘小节的粗糙剪纸海报。
- **复古粗口排版 (Chunky Display)**：大字标题请不要扭捏，去拿那些拥有极粗笔画的呆萌/夸张复古英文字体，比如像气球一样的胖字或者是像素风字。

## 🛠 原生 CSS 数据绘图大招 (CSS Visaul Hacks)
你不是在画图表，你是在往黑板上乱贴花里胡哨贴纸：
- **跳跃波浪块形 (Squiggles & Zigs)**：完全可以手工写一个 CSS 多边形遮罩 `<div style="clip-path: polygon(...)">` 来呈现一个齿轮状的图形当数据核心看板！
- **乐高拼装柱 (Lego Bars)**：不要连续的柱状图了！用一堆断开的小正方块（每个块之间 `gap: 4px` 的 Flex 列排布）粗鲁地垒叠起来，旁边贴个狗皮膏药般的巨大数值标签（`-webkit-transform: rotate(-5deg)`）。
- **乱跳的不对称圆环 (Offset Pies)**：不要完美的饼图，把里面某一块饼图（或者是某个纯色 `<div class="pie-slice">`）强行脱出大部队 `transform: translate(-10px, -10px)`，造成数据溢出的粗糙手工纸板感！
