# 🚀 自动发版演示项目

这是一个完整的自动发版系统演示项目。

## ✨ 功能特性
- ✅ **自动测试** - 提交代码后自动运行测试
- ✅ **自动打包** - 自动构建生产版本
- ✅ **自动部署** - 一键部署到服务器
- ✅ **自动通知** - 飞书实时通知部署状态
- ✅ **回滚机制** - 部署失败自动回滚
- ✅ **多环境** - 支持测试/生产环境

## 🛠️ 快速开始

### 1. 本地开发
```bash
# 安装依赖
npm install

# 运行测试
npm test

# 本地构建
npm run build
```

### 2. 自动发版流程
1. 修改代码并提交到GitHub
2. GitHub Actions自动运行测试
3. 测试通过后自动打包
4. 自动部署到服务器
5. 发送飞书通知

### 3. 手动部署
```bash
# 部署到测试环境
./deploy.sh staging

# 部署到生产环境（需要确认）
./deploy.sh production
```

## 📁 文件结构
```
├── .github/workflows/deploy.yml  # GitHub Actions工作流
├── index.html                    # 网站主页
├── package.json                  # 项目配置
├── build.js                      # 构建脚本
├── deploy.sh                     # 部署脚本
├── .env.example                  # 环境配置示例
└── README.md                     # 说明文档
```

## ⚙️ 配置说明

### 环境变量
复制 `.env.example` 为 `.env` 并填写：
- GitHub令牌（需要有repo和workflow权限）
- 服务器信息（IP、用户名、路径）
- 飞书Webhook URL

### 部署策略
- **自动触发**：推送到master分支自动部署到测试环境
- **时间窗口**：工作日09:00-18:00
- **生产部署**：需要手动确认

## 🔧 技术栈
- **CI/CD**: GitHub Actions
- **构建工具**: Node.js + npm scripts
- **部署方式**: SSH + Rsync
- **通知**: 飞书Webhook

## 📞 支持
- 问题反馈：GitHub Issues
- 自动通知：飞书群
- 部署状态：GitHub Actions页面

## 📊 状态监控
- GitHub Actions: https://github.com/wu18346579595/auto-deploy-demo/actions
- 部署历史：查看Actions运行记录
- 错误日志：Actions失败详情

---
*最后更新：2026-03-20*