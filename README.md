# 优学院网课助手 (Ulearning Helper)

适配 **优学院 (ulearning.cn)** 平台的 Tampermonkey / ScriptCat 用户脚本，全自动刷课。

## ✨ 功能

- 🎬 **自动刷视频** — 正常 1x 倍速播放，看完自动翻页
- 📝 **自动答题** — 匹配本地题库自动作答
- ⏭ **自动跳转下一节** — 视频/答题完成后自动前进
- 🧠 **防检测** — 模拟鼠标移动、滚动等真人行为
- 📊 **控制面板** — 右侧浮窗，一键全自动 / 暂停 / 跳过 / 收集题目

## 🚀 安装

### 1. 安装脚本管理器

| 浏览器 | 推荐扩展 |
|--------|----------|
| Chrome | [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) |
| Edge | [Tampermonkey](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd) |
| Firefox | [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/) |
| 所有浏览器 | [ScriptCat](https://scriptcat.org/)（脚本猫，开源替代） |

### 2. 安装脚本

**方式一：从 GitHub 安装（推荐）**

点击以下链接，脚本管理器会自动弹出安装提示：

```
https://raw.githubusercontent.com/Gulu319/ulearning-helper/main/ulearning-helper.user.js
```

**方式二：手动导入**

1. 下载 `ulearning-helper.user.js`
2. 打开 Tampermonkey → 管理面板 → 实用工具 → 导入
3. 选择下载的文件

### 3. 使用

1. 打开 [优学院](https://umooc.ulearning.cn) 并登录
2. 进入课程页面，右侧会出现 **控制面板**
3. 点击 **「▶ 一键全自动」** 开始刷课

## 📝 题库说明

脚本使用**本地存储**的题库（浏览器 localStorage / GM_setValue），**不会上传任何数据**。

### 题库格式

```json
[
  {
    "question": "题目文本",
    "type": "single",
    "answer": "A"
  }
]
```

### 如何积累题库

1. 手动完成几道题后，点击控制面板 **「📥 收集已答题目」**
2. 通过 **「📤 导出题库」** 可备份，**「📂 导入题库」** 可加载他人分享的题库

## ⚠️ 注意事项

1. **学术诚信** — 本工具仅供学习参考
2. **正常倍速** — 视频以 1x 速度播放，不会触发平台检测
3. **数据隐私** — 题库仅存储在本地，不会上传至任何服务器
4. **兼容性** — 同时兼容 Tampermonkey（油猴）和 ScriptCat（脚本猫）

## 📄 开源协议

MIT
