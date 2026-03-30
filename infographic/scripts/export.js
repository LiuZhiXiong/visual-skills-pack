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
  console.log(`🚀 正在启动定版无头渲染向导... (神级画幅引擎: ${targetWidth}x${targetHeight})`);
  const browser = await chromium.launch();
  const context = await browser.newContext({
    deviceScaleFactor: 2, 
    viewport: { width: targetWidth, height: targetHeight } 
  });
  const page = await context.newPage();
  
  console.log(`📂 加载画布: file://${htmlFile}`);
  await page.goto(`file://${htmlFile}`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  
  console.log('⏳ 挂起等待视觉驻留与微动效落成 (3 秒)...');
  await page.waitForTimeout(3000); 

  console.log(`📸 全景无损画板按预设比例强取中...`);
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
})();
