# VOGUE Editorial Chic 极度戏剧先锋杂志 (Magazine Editorial)

你的画布必须具备一种《VOGUE》或者纽约曼哈顿先锋艺术画廊的冷酷报导感。没有任何冗杂的色彩和修饰，只要极端的数据压迫力。

## 📍 核心视觉法则 (Aesthetics)
- **剧院光影舞台 (Theatrical B&W)**：色调几乎被封印在刺眼的纯白背景 `#FFF` 与极黑纯度 `#08080A` 的对抗里，这让人觉得你发布的是史诗级重磅。
- **克莱斯勒纯金斩 (Gold/Blood Splice)**：画面极其大面积的黑与白之中，突然被一根甚至细到 `1px`，但长达半个屏幕的血红/赤红线条 `#D30000` 割裂，或者是一小个绝对明亮的 克莱斯勒金色 `#D4AF37` 方块填充，成为整屏画芯。
- **变态比例拉扯字体 (Extreme Editorial Fonts)**：无视可读性！大标题需要那种纵向往死里压扁/横向往死里拉长的无情无衬线大写英文字（直接拉取 Google Fonts 神级杂志系 `Bebas Neue`, `Anton`），搭配下方被无限缩小只当做注释花纹的打字机风格字体（`Space Mono` 或 `IBM Plex Mono`）。

## 🛠 原生 CSS 数据绘图大招 (CSS Visaul Hacks)
不需要 AntV，因为你画的是前卫数据观念艺术，不需要规矩：
- **巨大视网膜割裂 (Retina Shatter)**：最大的 KPI 指标直接干到 `font-size: 240px; line-height: 0.7; letter-spacing: -8px`！直接把它铺在画面的底层作为一种背景水纹或者巨大切断物。而所有详实数据只能在它的夹缝里生存。
- **金融透骨子弹图 (Bullet Grid Rules)**：别留圆角 `border-radius: 0`！直接使用 CSS Grid，把长短不一的黑色/红色细直棍形图表紧密地塞在只靠 `border-bottom: 1.5px solid #000` 兜底的数据行里，制造出穿透纸背的高定报表感。
- **非中轴线失衡 (Diagonal / Off-Axis)**：部分信息容器，你要运用 `margin-left: -50px; transform: rotate(-3deg)` 这些绝对非对称的设计逼近视觉危险边缘，这才是打破刻板无聊 AI 痕迹的最强武器！
