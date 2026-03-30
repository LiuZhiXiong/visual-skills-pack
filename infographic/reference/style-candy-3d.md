# 🍬 治愈果冻软彩 3D风 (Candy Claymorphism & Playful 3D)

抛开冰冷的技术感，这是为高转化率营销、Gen-Z 世代宣发、消费级社交产品量身定做的极致明亮、友好、多巴胺极速分泌的胖乎乎 3D 理查德黏土风（Claymorphism）。核心法则只有一个：一切视觉组件都要像被打翻的糖果盒里的甜美橡皮泥，极其欠捏！

## 📍 :root 极度多巴胺变量
丢弃中庸黑白。大背景必须是柔和明快的“马卡龙色盘”。

```css
:root {
  /* 打底马卡龙：婴儿蓝/薄荷绿/奶油黄，绝世治愈 */
  --bg-canvas: #FFF5F7; /* 例如这是水蜜桃粉白底 */
  
  /* 果冻组件底色 */
  --clay-cyan: #00E6F6;
  --clay-yellow: #FFD54F;
  --clay-purple: #D500F9;
  --clay-pink: #FF4081;
  --clay-surface: #FFFFFF; /* 白色泥块 */
  
  /* 厚重粘土专属神级阴影：巨幅内外阴影挤压出果冻感 */
  --clay-shadow-white: 
    inset 12px 12px 24px rgba(255, 255, 255, 0.9), 
    inset -12px -12px 24px rgba(174, 174, 192, 0.15),
    16px 16px 32px rgba(174, 174, 192, 0.25);
  
  --clay-shadow-colored:
    inset -10px -10px 20px rgba(0,0,0,0.1),
    inset 10px 10px 20px rgba(255,255,255,0.4),
    15px 15px 30px rgba(0,0,0,0.15);
  
  --text-title: #2A1B3D; /* 深紫代替纯黑 */
  --text-body: #6D5E7A;
}
```

## 📍 胖熊般字体排版 (Chunky Playful Typography)
- **字体栈极憨**：去寻找极具亲和力的“黑体”、“圆体”或厚重的卡通英文字体。
  `font-family: "Fredoka", "Varela Round", "Quicksand", system-ui, sans-serif;`
- **极端标题拉扯**：字距拉宽或压缩全凭喜好，但主视觉字重必须巨大（如 `font-weight: 900`），字号拉取到荒诞级别 `clamp(4rem, 12vw, 8rem)`，所有的英文字母看起来像用气球吹爆了一样！
- **阅读行高加大**：既然是年轻排版，行高就设定在充沛的 `line-height: 1.6`。

## 📍 胖胖的数据容器引擎 (Claymorphism Layout)
1. **超级大圆角 (Extreme Border Radius)**：不再使用严肃的 `8px`。所有卡片、图表容器、图例标签，起步就是 `border-radius: 40px;` 到 `100px`（胶囊状）。
2. **极度透亮边缘高光**：配合 `--clay-shadow-white`，让卡片看起来像是被光照射的实心硅胶材质。四周不留任何明确边界，纯靠阴影的内外对比凸拉。

## 📍 图形捏造黑魔法 (CSS Sausage Data Visualization)
- **香肠进度卷 (Sausage Bars)**：长条状数据可视化不要平的。通过设置背景色为纯色的 `--clay-cyan` 并挂载 `--clay-shadow-colored`，其立刻就变成了立体的果冻卷/泡泡糖柱！
- **饼图的 3D 厚度**：如果需要饼图，用 `conic-gradient` 且边缘加一层巨大体积感的 `box-shadow` 发散；最好在内部切一个洞并在内壁加上 `inset shadow` 以形成“3D 甜甜圈饼图”。
- **散落漂浮动效幻觉**：如果画布上空白过多，随手乱写几个带数据的高饱和度大圆球或长条药丸，通过 `transform: rotate(15deg) scale(1.1);` 等随机角度散落周围，假装有漫天飞舞的数据泡泡。
