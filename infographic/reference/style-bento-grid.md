# Apple SaaS 现代便当盒网格 (Bento Box Grid)

你在做当前全球 B端 Web 营销页面（如 Vercel, Linear, Stripe, Apple）最巅峰的通用解法——模块化便当盒。要求极致克制、纯平干净。

## 📍 核心视觉法则 (Aesthetics)
- **灰阶呼吸感 (Greyscale & Breath)**：拒绝任何大红大紫！大环境底色控制在 `F5F5f7` 或深空灰 `#0A0A0A`。所有的区块（Bento Cards）背景是微差的纯白 `#FFFFFF` 或 `#111`，并施加非常、非常、非常微凉的扩散极细阴影 `box-shadow: 0 4px 20px rgba(0,0,0,0.02)` 与极其克制的弱发丝描边 `border: 1px solid rgba(0,0,0,0.05)`。
- **绝对圆角公式 (Unified Radii)**：所有的数据格遵循完美的圆曲率（比如外围统一 `border-radius: 28px` 或者 `32px`，严谨工整，容不得一丝死角直线）。如果在子格里面放组件，子元素的圆角也是协调的（如 `16px`）。
- **硅谷精英排版 (Valley Typo)**：摒弃哗众取宠的花字。必须选用最严谨中性的 `Inter`, `SF Pro` 或是略微柔滑的 `Quicksand`。字号对比可以大，但权重（fontWeight）对比一定要讲究精细化。

## 🛠 原生 CSS 数据绘图大招 (CSS Visaul Hacks)
便当盒风格里面绝不可以出现大块臃肿第三方图表插件，只会搞乱 Grid 洁癖：
- **微量化状态灯 (Indicators)**：利用小圆点 `width:8px; height:8px; background:#10B981` 的纯 CSS 发光绿灯表示涨跌幅。
- **切片进度槽 (Segmented Bars)**：用 Flex 行内布局搞 10 根等宽但高度不一的极细竖线条 `border-radius: 99px; background: rgba(0,0,0,0.1)` 堆出一个高雅的内联状微型音轨走势图。
- **精准跨格控制 (Bento Grid Magic)**：父级 `.container { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }`，你随便用 `grid-column: span 2; grid-row: span 2;` 把某些重要的数字大屏撑成巨盒，次要数据留成小盒，完美切割版面。
