// 简单的构建脚本
const fs = require('fs');
const path = require('path');

console.log('🚀 开始构建项目...');

// 创建dist目录
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
  console.log('✅ 创建dist目录');
}

// 复制index.html
const htmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const timestamp = new Date().toISOString();
const updatedHtml = htmlContent.replace(
  '<span id="time"></span>',
  `<span id="time">${timestamp}</span>`
);

fs.writeFileSync(path.join(distDir, 'index.html'), updatedHtml);
console.log('✅ 复制并更新index.html');

// 创建构建信息文件
const buildInfo = {
  buildTime: timestamp,
  gitCommit: process.env.GITHUB_SHA || 'local',
  branch: process.env.GITHUB_REF || 'local',
  buildNumber: process.env.GITHUB_RUN_NUMBER || '1'
};

fs.writeFileSync(
  path.join(distDir, 'build-info.json'),
  JSON.stringify(buildInfo, null, 2)
);
console.log('✅ 创建build-info.json');

console.log('🎉 构建完成！');
console.log('构建信息:', buildInfo);