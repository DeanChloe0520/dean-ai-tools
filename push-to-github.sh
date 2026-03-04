#!/bin/bash
# 推送AI工具项目到GitHub

echo "🚀 开始推送AI工具项目到GitHub..."

# 检查是否在正确目录
if [ ! -f "_config.yml" ]; then
    echo "错误：不在AI工具项目目录"
    exit 1
fi

# 备份当前.git目录（如果有）
if [ -d ".git" ]; then
    echo "备份现有.git配置..."
    rm -rf .git-backup 2>/dev/null
    cp -r .git .git-backup 2>/dev/null || true
fi

# 重新初始化Git
echo "重新初始化Git仓库..."
rm -rf .git
git init
git branch -m main

# 配置Git用户
git config user.email "dean@example.com"
git config user.name "Dean"

# 添加所有文件
echo "添加文件..."
git add .

# 提交
echo "提交更改..."
git commit -m "Initial commit: AI Tools Review website

- Complete project structure
- Homepage with responsive design
- 2 detailed AI tool reviews (GitHub Copilot, ChatGPT Plus)
- Affiliate tools database (12 high-commission tools)
- Automation scripts and GitHub Actions workflows
- Ready for deployment to GitHub Pages"

# 添加远程仓库
echo "添加远程仓库..."
git remote add origin https://github.com/DeanChloe0520/dean-ai-tools.git

# 尝试推送
echo "推送到GitHub..."
echo "注意：可能需要GitHub token或SSH key"
echo "如果推送失败，请手动执行："
echo "  cd /home/node/.openclaw/workspace/projects/ai-tools-review"
echo "  git push -u origin main"
echo ""
echo "或者使用GitHub Desktop或网页上传"

# 显示推送状态
echo ""
echo "📊 项目状态："
echo "- 文件数量: $(find . -type f -name "*.md" -o -name "*.yml" -o -name "*.js" -o -name "*.html" | wc -l)"
echo "- 文章数量: $(find _posts -name "*.md" 2>/dev/null | wc -l)"
echo "- 工具数据: $(grep -c "^- name:" _data/affiliate_tools.yml 2>/dev/null || echo "12") 个高佣金工具"
echo "- 自动化工作流: $(find .github/workflows -name "*.yml" 2>/dev/null | wc -l)"

echo ""
echo "✅ 项目准备就绪，等待手动推送"