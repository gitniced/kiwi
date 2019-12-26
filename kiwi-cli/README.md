# 🐤 kiwi cli

Kiwi 的 CLI 工具

## 如何使用

npm link 生成软链接

cd xx 切换到项目目录

npm link kiwi-cli 绑定本地 kiwi-mod 命令


## CLI 参数
### kiwi-mod `--init`
初始化项目，提取未翻译的文案

### kiwi-mod `--import`
导入翻译文案，将翻译人员翻译得文案，导入到项目中

### kiwi-mod `--export`
导出未翻译的文案

```shell script
# 导出指定语言的文案
kiwi-mod --export=zh_CN
```

### kiwi-mod `--sync`
同步各种语言的文案，同步未翻译文件

### kiwi-mod `--mock`
使用 Google 翻译，翻译未翻译的文案
