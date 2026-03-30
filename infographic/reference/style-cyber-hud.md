# 🖥️ 赛博极客发光控制台 (Cyberpunk HUD Terminal)

为终极黑客、核心运维分析报告、硬核后端数据可视化定做的深渊暗网极光风！彻底封印所有白色底盘，营造出深不可测的军事级控制系统指令台界面（ HUD ）。每一根线条与字体，都必须在深邃黑暗中渗透出幽幽的霓虹激光。

## 📍 :root 幽微暗网变量
背景越暗如深渊，点缀数字越亮如激光。不再使用大面积色块，主要靠黑暗和光效塑造神明。

```css
:root {
  /* 深不见底的极夜蓝黑/代码终端黑 */
  --bg-deep-space: #050A10;
  --bg-panel: rgba(10, 16, 26, 0.75); /* 带极高斯模糊的磨砂黑 */
  
  /* 脉冲光核心：霓虹绿、镭射青、警报红！极其锐利的颜色 */
  --neon-cyan: #00F3FF;
  --neon-green: #39FF14;
  --neon-magenta: #FF00FF;
  --neon-red: #FF2A2A;

  /* 文字颜色：灰度处理，只在数据爆发点亮荧光 */
  --text-terminal: #8F9CAE;
  --text-glow-primary: var(--neon-cyan);

  /* 核心极客魔法：双重发光黑框内陷！ */
  --neon-shadow-cyan: 
    0 0 10px rgba(0, 243, 255, 0.3), 
    0 0 20px rgba(0, 243, 255, 0.2), 
    inset 0 0 15px rgba(0, 243, 255, 0.1);
    
  --border-neon-cyan: 1px solid rgba(0, 243, 255, 0.4);
}
```

## 📍 绝对代码字体墙 (Monospaced Command)
- **字体栈极权**：只准许运用最高级的编程等宽字体 (Monospace)！如 `var(--font-mono): 'Fira Code', 'JetBrains Mono', 'Courier New', monospace;`
- 控制台美学强调所有的排版间距看起来像是用字符堆叠出来的。大标题应当带上诸如 `[ SYSTEM METRICS _ ]` 之类的代码括号。
- 这是一种精密数学排版，字间距 `letter-spacing: 0.1em;`，哪怕是巨大的百分比数字，也得带着等宽字体的绝对严谨气息。

## 📍 特种切割面板 (Stealth Panels)
这不仅是为了酷炫，这还是数据军用化。
- 数据卡片不要用死板的四四方方的 `border-radius: 8px`，可以全部是纯直角 `0px`。还可以利用 CSS 的 `clip-path: polygon(...)` 工具，给右上角或左下角切出一个倒角，这叫做：机甲切割缝隙！
  `clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%);`
- 搭配面板的 `--bg-panel` 和极其微弱的边框。
- 面板内部加一层全网页级的 CSS 网格扫描线覆盖：
  ```css
  .scanline {
    background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2));
    background-size: 100% 4px; /* 形成类似 CRT 电视机的极细暗纹 */
  }
  ```

## 📍 发光镭射图谱构造 (Neon Laser Data)
- **折射进度光柱**：柱形图不再是实色块，而是纯黑底框带上一道耀眼的内发光条 `box-shadow`。
- **神级极客雷达圈**：使用 `conic-gradient` 制造。例如 `background: conic-gradient(from 0deg, transparent 0%, rgba(0, 243, 255, 0.2) 90%, var(--neon-cyan) 100%);` 再配合中心镂空和光晕边界，就能呈现完美的扫描雷达。
