# Cyber-HUD 御用赛博数据控制台 (Sci-Fi Data Depth)

放弃普通网页概念，你在为深空探测器或超级 AI 的后台书写一块极度冷酷的数据监测大屏。

## 📍 核心视觉法则 (Aesthetics)
- **真·星空黑子域 (Abyss Background)**：底色拒绝单纯靠一种黑，是用暗紫黑 `#08080C` 到极黑的 `radial-gradient` 圆锥晕影。甚至建议手打一个 `linear-gradient` 创建的隐约蓝色微方格（网格基带）。
- **核弹级高光 (Reactor Neon)**：不要乱用红绿蓝。核心点睛颜色必须在 赛博冷青 `#00E5FF`、毒药绿 `#CCFF00` 之中挑选，辅以高穿透的 `text-shadow: 0 0 10px var(--neon)` 制造发光污染效果。
- **等宽机甲数字符 (Terminal Mono)**：数据读取和核心 KPI，请使用冷冰冰的等宽编码体 `JetBrains Mono` 甚至 `Space Mono`。装饰标题配上切割感重型体 `Syne` 或 `Orbitron`。

## 🛠 原生 CSS 数据绘图大招 (CSS Visaul Hacks)
你要用内联魔法代替笨重的组件库：
- **发光液冷能量条 (Glowing Meters)**：利用极薄（`height: 4px`）发着青色光晕的 `div` 当做进度条，外嵌套一个虚线框来表达“读取进度 80%”。
- **HUD 异形瞄准框 (Sniper Cutouts)**：普通的圆角太低级，这套系统下卡片四个角需要物理切割！纯 CSS 绝技法：`clip-path: polygon(20px 0%, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0% 20px);`。
- **动态虚线光标 (Scanlines)**：如果需要一些小图表走势，可以直接用高对比透明色在黑胶板上敲出锯齿状梯田波形，这就是极高阶的控制面板 UI。
