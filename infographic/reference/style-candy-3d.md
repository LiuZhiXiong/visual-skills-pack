# 治愈果冻 3D 软彩风 (Candy Claymorphism)

抛开严肃，这是为高转化率、年轻世代、消费级产品量身定做的极致明亮、友好、多巴胺爆棚的微膨胀 3D 全原生理查德黏土风！

## 📍 核心视觉法则 (Aesthetics)
- **多巴胺马卡龙 (Macaron Canvas)**：大背景绝对明快！像婴儿蓝 `#E0F7FA`、香芋紫 `#F3E5F5` 或是 奶油黄 `#FFF9C4` 这种极其减压的色彩，整个就是一盒打翻的糖果盘！绝不用黑色。
- **极度软糯 3D 泥 (Clay Convex)**：重头戏来了！所有的数据容器全部做成胖胖的实体果冻块：利用极其巨大的圆角 `border-radius: 40px;` 和软泥内外发光阴影 `box-shadow: inset 8px 8px 16px rgba(255,255,255,0.6), inset -8px -8px 16px rgba(0,0,0,0.1), 10px 10px 20px rgba(0,0,0,0.06);`，瞬间让卡片变成一个可以被“捏一捏”的软糯 3D 橡皮泥按键！
- **胖熊般粗体字 (Chunky Typo)**：字距拉宽，不要锐利。去找 Google Fonts 里最友好、最圆润可爱的超粗字体（比如 `Fredoka One`, `Varela Round`，或者是极其胖乎乎的粗体），所有字都是笑盈盈的。

## 🛠 原生 CSS 数据绘图大招 (CSS Visaul Hacks)
你连画图表都要捏泥巴：
- **香肠进度卷 (Sausage Bars)**：进度条不要平的，进度条自身也是一个由 Claymorphism 制成的 3D 发亮胖香肠，颜色如薄荷绿 `#00E676` 并带有大高光内阴影。
- **药丸气泡飞浮 (Floating Pills)**：数据可以随意装在胖胖的长药丸 `border-radius: 100px` 里，用 CSS 的 `transform: rotate(...) scale(...)` 悬浮散乱落在页面周围。
- **极高饱和对碰色 (Playful Splashes)**：卡片的背景可以是浅粉色，那它里面的 3D 柱形图就可以是芒果黄和海洋蓝，这种高饱和度的明亮互补色让人心生欢喜！
