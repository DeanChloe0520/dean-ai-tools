#!/usr/bin/env node
/**
 * AI工具评测内容生成脚本
 * 自动生成高质量的AI工具评测文章
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 项目根目录
const PROJECT_ROOT = path.dirname(__dirname);
const POSTS_DIR = path.join(PROJECT_ROOT, '_posts');
const DATA_DIR = path.join(PROJECT_ROOT, '_data');

// 确保目录存在
[POSTS_DIR, DATA_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// 工具数据
const tools = require(path.join(DATA_DIR, 'affiliate_tools.yml'));

// 文章模板
const ARTICLE_TEMPLATE = `---
layout: post
title: "{TITLE}"
date: {DATE} +0200
categories: [{CATEGORY}]
tags: [{TAGS}]
author: Dean
image: /assets/images/{SLUG}.jpg
description: "{DESCRIPTION}"
affiliate_link: "{AFFILIATE_LINK}"
commission: "{COMMISSION}"
rating: {RATING}
difficulty: "{DIFFICULTY}"
price: "{PRICE}"
best_for: "{BEST_FOR}"
---

## 🎯 概述

{OVERVIEW}

## 📊 核心功能

### 1. **{FEATURE1_TITLE}**
- {FEATURE1_DESC1}
- {FEATURE1_DESC2}
- {FEATURE1_DESC3}

### 2. **{FEATURE2_TITLE}**
- {FEATURE2_DESC1}
- {FEATURE2_DESC2}
- {FEATURE2_DESC3}

### 3. **{FEATURE3_TITLE}**
- {FEATURE3_DESC1}
- {FEATURE3_DESC2}
- {FEATURE3_DESC3}

### 4. **{FEATURE4_TITLE}**
- {FEATURE4_DESC1}
- {FEATURE4_DESC2}
- {FEATURE4_DESC3}

## 🧪 实际测试体验

### 测试环境
- **IDE/平台**: {TEST_ENV}
- **使用时长**: {TEST_DURATION}
- **测试场景**: {TEST_SCENARIOS}

### 正面体验 ✅

#### 1. **{POSITIVE1_TITLE}**
{POSITIVE1_DESC}

#### 2. **{POSITIVE2_TITLE}**
{POSITIVE2_DESC}

#### 3. **{POSITIVE3_TITLE}**
{POSITIVE3_DESC}

### 负面体验 ❌

#### 1. **{NEGATIVE1_TITLE}**
{NEGATIVE1_DESC}

#### 2. **{NEGATIVE2_TITLE}**
{NEGATIVE2_DESC}

#### 3. **{NEGATIVE3_TITLE}**
{NEGATIVE3_DESC}

## 💰 成本效益分析

### 投资回报率计算
| 指标 | 数值 | 说明 |
|------|------|------|
| **时间节省** | {TIME_SAVING} | {TIME_SAVING_DESC} |
| **效率提升** | {EFFICIENCY_GAIN} | {EFFICIENCY_GAIN_DESC} |
| **错误减少** | {ERROR_REDUCTION} | {ERROR_REDUCTION_DESC} |
| **月成本** | {MONTHLY_COST} | {PRICE} |
| **投资回报率** | {ROI} | {ROI_DESC} |

## 🆚 竞争对手对比

| 功能 | {TOOL_NAME} | 主要竞品1 | 主要竞品2 |
|------|-------------|-----------|-----------|
| **核心优势** | {COMPARISON_ADVANTAGE1} | {COMPETITOR1_WEAKNESS1} | {COMPETITOR2_WEAKNESS1} |
| **价格** | {PRICE_COMPARISON} | {COMPETITOR1_PRICE} | {COMPETITOR2_PRICE} |
| **易用性** | {USABILITY_RATING} | {COMPETITOR1_USABILITY} | {COMPETITOR2_USABILITY} |
| **功能完整性** | {FEATURE_COMPLETENESS} | {COMPETITOR1_FEATURES} | {COMPETITOR2_FEATURES} |

## 🎯 适合人群

### 强烈推荐 ✅
- **{RECOMMENDED1}**: {RECOMMENDED1_DESC}
- **{RECOMMENDED2}**: {RECOMMENDED2_DESC}
- **{RECOMMENDED3}**: {RECOMMENDED3_DESC}

### 谨慎考虑 ⚠️
- **{CAUTION1}**: {CAUTION1_DESC}
- **{CAUTION2}**: {CAUTION2_DESC}
- **{CAUTION3}**: {CAUTION3_DESC}

### 不推荐 ❌
- **{NOT_RECOMMENDED1}**: {NOT_RECOMMENDED1_DESC}
- **{NOT_RECOMMENDED2}**: {NOT_RECOMMENDED2_DESC}

## 📈 性能测试数据

### 实际使用数据
| 测试项目 | 结果 | 评价 |
|----------|------|------|
| **响应速度** | {RESPONSE_SPEED} | {RESPONSE_EVALUATION} |
| **准确率** | {ACCURACY_RATE} | {ACCURACY_EVALUATION} |
| **稳定性** | {STABILITY_RATING} | {STABILITY_EVALUATION} |
| **学习曲线** | {LEARNING_CURVE} | {LEARNING_EVALUATION} |

## 🔧 最佳实践建议

### 1. **配置优化**
\`\`\`
{CONFIG_EXAMPLE}
\`\`\`

### 2. **使用技巧**
- {TIP1}
- {TIP2}
- {TIP3}
- {TIP4}

### 3. **常见问题解决**
- **问题**: {COMMON_ISSUE1}
  **解决**: {SOLUTION1}
- **问题**: {COMMON_ISSUE2}
  **解决**: {SOLUTION2}

## 💡 高级技巧

### 提高效率的方法
1. **{ADVANCED_TIP1}**: {ADVANCED_TIP1_DESC}
2. **{ADVANCED_TIP2}**: {ADVANCED_TIP2_DESC}
3. **{ADVANCED_TIP3}**: {ADVANCED_TIP3_DESC}

### 集成建议
- {INTEGRATION_TIP1}
- {INTEGRATION_TIP2}
- {INTEGRATION_TIP3}

## 🎁 独家优惠

通过我们的链接注册{TOOL_NAME}，你可以：
- **{BENEFIT1}**
- **{BENEFIT2}**
- **{BENEFIT3}**

[👉 点击这里获取{TOOL_NAME}专属优惠]({AFFILIATE_LINK})

## 📊 最终评分

| 类别 | 评分（/5） | 说明 |
|------|------------|------|
| **功能完整性** | {FEATURE_SCORE} | {FEATURE_COMMENT} |
| **易用性** | {USABILITY_SCORE} | {USABILITY_COMMENT} |
| **性能表现** | {PERFORMANCE_SCORE} | {PERFORMANCE_COMMENT} |
| **性价比** | {VALUE_SCORE} | {VALUE_COMMENT} |
| **客户支持** | {SUPPORT_SCORE} | {SUPPORT_COMMENT} |
| ****总分** | **{TOTAL_SCORE}** | **{RECOMMENDATION}** |

## 🤔 常见问题

### Q: {FAQ1}
**A**: {FAQ1_ANSWER}

### Q: {FAQ2}
**A**: {FAQ2_ANSWER}

### Q: {FAQ3}
**A**: {FAQ3_ANSWER}

### Q: {FAQ4}
**A**: {FAQ4_ANSWER}

### Q: {FAQ5}
**A**: {FAQ5_ANSWER}

## 🚀 结论

{CONCLUSION}

**适合人群**: {TARGET_AUDIENCE}
**投资建议**: {INVESTMENT_ADVICE}
**最佳使用方式**: {BEST_USAGE}

---

*免责声明：本文包含联盟链接。当您通过我们的链接购买时，我们可能会获得佣金，这有助于支持本站运营，但不会增加您的成本。我们只推荐我们真正相信的产品。*

*最后更新：{UPDATE_DATE}*
*评测版本：{TOOL_VERSION}*`;

// 生成文章的函数
function generateArticle(tool, index) {
  const today = new Date();
  const postDate = new Date(today);
  postDate.setDate(today.getDate() + index); // 分散发布日期
  
  const slug = tool.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const dateStr = postDate.toISOString().split('T')[0];
  
  // 这里应该调用AI生成实际内容
  // 暂时使用模板，实际应该调用OpenAI API
  
  const content = ARTICLE_TEMPLATE
    .replace(/{TITLE}/g, `${tool.name} 深度评测：2026年是否值得投资？`)
    .replace(/{DATE}/g, dateStr)
    .replace(/{CATEGORY}/g, tool.category)
    .replace(/{TAGS}/g, tool.name.toLowerCase())
    .replace(/{SLUG}/g, slug)
    .replace(/{DESCRIPTION}/g, `${tool.name}是2026年最热门的${tool.category}之一。在这篇深度评测中，我们将分析它的优缺点、实际使用体验以及是否值得你投资。`)
    .replace(/{AFFILIATE_LINK}/g, tool.affiliate_url)
    .replace(/{COMMISSION}/g, tool.commission)
    .replace(/{RATING}/g, '4.5')
    .replace(/{DIFFICULTY}/g, tool.difficulty)
    .replace(/{PRICE}/g, tool.price || '$10-50/月')
    .replace(/{BEST_FOR}/g, tool.best_for || '专业用户')
    .replace(/{TOOL_NAME}/g, tool.name);
  
  const filename = `${dateStr}-${slug}-review.md`;
  const filepath = path.join(POSTS_DIR, filename);
  
  fs.writeFileSync(filepath, content, 'utf8');
  console.log(`✅ 生成文章: ${filename}`);
  
  return filepath;
}

// 主函数
function main() {
  console.log('🚀 开始生成AI工具评测文章...');
  
  // 读取工具数据
  const toolsData = fs.readFileSync(path.join(DATA_DIR, 'affiliate_tools.yml'), 'utf8');
  console.log(`📊 找到 ${tools.tools.length} 个工具`);
  
  // 为前5个工具生成文章
  const toolsToGenerate = tools.tools.slice(0, 5);
  
  toolsToGenerate.forEach((tool, index) => {
    try {
      generateArticle(tool, index);
    } catch (error) {
      console.error(`❌ 生成文章失败 ${tool.name}:`, error.message);
    }
  });
  
  console.log('🎉 文章生成完成！');
  console.log(`📁 文章保存到: ${POSTS_DIR}`);
  
  // 生成文章列表索引
  generateIndex();
}

// 生成文章索引
function generateIndex() {
  const posts = fs.readdirSync(POSTS_DIR)
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const content = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');
      const titleMatch = content.match(/title:\s*"([^"]+)"/);
      const dateMatch = content.match(/date:\s*(\d{4}-\d{2}-\d{2})/);
      const descMatch = content.match(/description:\s*"([^"]+)"/);
      
      return {
        file,
        title: titleMatch ? titleMatch[1] : file,
        date: dateMatch ? dateMatch[1] : '2026-03-04',
        description: descMatch ? descMatch[1] : '',
        url: `/blog/${file.replace('.md', '.html')}`
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date)); // 按日期倒序
  
  const indexContent = `---
layout: page
title: "所有评测文章"
permalink: /blog/
---

# 📝 所有AI工具评测文章

共 ${posts.length} 篇文章

{% for post in site.posts %}
## [{{ post.title }}]({{ post.url }})
*{{ post.date | date: "%Y年%m月%d日" }}*
{{ post.description }}

[阅读全文 →]({{ post.url }})
{% endfor %}

---

*最后更新: ${new Date().toISOString().split('T')[0]}*`;
  
  const indexPath = path.join(PROJECT_ROOT, 'blog.md');
  fs.writeFileSync(indexPath, indexContent, 'utf8');
  console.log(`✅ 生成文章索引: ${indexPath}`);
}

// 执行
if (require.main === module) {
  main();
}

module.exports = { generateArticle, generateIndex };