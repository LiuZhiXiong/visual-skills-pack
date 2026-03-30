const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const fileArg = process.argv[2];
const widthArg = process.argv[3];
const heightArg = process.argv[4];

if (!fileArg) {
  console.error('用法: node scripts/export.js <HTML文件全名或相对路径> [画幅宽度px] [画幅高度px]');
  process.exit(1);
}

const htmlFile = path.resolve(process.cwd(), fileArg);
const outputFile = htmlFile.replace('.html', '.png');

if (!fs.existsSync(htmlFile)) {
  console.error(`找不到文件: ${htmlFile}`);
  process.exit(1);
}

const targetWidth = widthArg ? parseInt(widthArg) : 1080;
const targetHeight = heightArg ? parseInt(heightArg) : 1600;

(async () => {
  try {
    console.log(`🚀 正在启动定版无头渲染向导... (神级画幅引擎: ${targetWidth}x${targetHeight})`);
    const browser = await chromium.launch();
    const context = await browser.newContext({
      deviceScaleFactor: 2, 
      viewport: { width: targetWidth, height: targetHeight } 
    });
    const page = await context.newPage();
    
    console.log(`📂 加载画布: file://${htmlFile}`);
    await page.goto(`file://${htmlFile}`, { waitUntil: 'networkidle' });
    
    // 防错：如果网页还没完全生成好，跳过或者直接继续
    try { await page.evaluate(() => document.fonts.ready); } catch(e) {}
    
    console.log('⏳ 挂起等待视觉驻留与微动效落成 (3 秒)...');
    await page.waitForTimeout(3000); 

    // 暴力解决排版外溢导致横版截图被截断的问题，增强对不规范 HTML 的健壮性
    const { scrollWidth, scrollHeight } = await page.evaluate(() => {
      let bw = 0, bh = 0;
      if (document.body) {
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        bw = document.body.scrollWidth;
        bh = document.body.scrollHeight;
      }
      if (document.documentElement) {
        document.documentElement.style.overflowX = 'visible';
      }
      return {
        scrollWidth: Math.max(document.documentElement ? document.documentElement.scrollWidth : 0, bw),
        scrollHeight: Math.max(document.documentElement ? document.documentElement.scrollHeight : 0, bh)
      };
    });

    const finalWidth = Math.max(targetWidth, scrollWidth || targetWidth);
    const finalHeight = Math.max(targetHeight, scrollHeight || targetHeight);

    await page.setViewportSize({ width: finalWidth, height: finalHeight });

    console.log(`📸 全景无损画板按预设比例强取中 (实际捕获大小: ${finalWidth}x${finalHeight})...`);
    await page.screenshot({ 
      path: outputFile, 
      fullPage: true, 
      type: 'png',
      animations: 'allow' 
    });

    await browser.close();
    console.log(`\n================================`);
    console.log(`✅ [完美画幅] 极致信息图已脱壳！`);
    console.log(`👉 绝对出图路径: ${outputFile}`);
    console.log(`================================`);
  } catch (err) {
    console.error("❌ 致命错误：导出渲染失败！详细排查日志：", err);
    process.exit(1);
  }
})();
