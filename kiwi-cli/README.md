# 🐤 kiwi cli

Kiwi 的 CLI 工具

## 如何使用

npm link 生成软链接

cd xx 切换到项目目录

npm link kiwi-cli 绑定本地 kiwi-mod 命令


## CLI 参数
### kiwi-mod `--init`
初始化项目

### kiwi-mod `--import`
导入翻译文案，将翻译人员翻译得文案，导入到项目中

### kiwi-mod `--export`
导出未翻译的文案

```shell script
# 导出指定语言的未翻译文案
kiwi-mod --export=zh_CN
# 导出全部的文案（包含已翻译的文案） 待开发
kiwi-mod --export -f
```

### kiwi-mod `--sync`
同步各种语言的文案，同步未翻译文件并翻译

### kiwi-mod `--mock`  待定
使用 Google 翻译，生成语言文件 lang.ts

## Question:
  * 同步的文件为 .kiwi/zh-CN 下的文件,同步过来的文件不会被导入的文件覆盖，反而是生成一个语言包 text_lang.json ,导致每次导出都是全量导出
  * 修改为
    * 执行export导出时，比对 lang.ts  , 导出未翻译的词条，格式为 key raw translation 的 tsv 文件
    * 执行sync同步时, 同步各种语言的文案，优先使用 lang.ts 的翻译, 翻译未翻译的文案

## 使用流程
  * 初始化
  * 开发ing
  * 同步 / 导出
  * mock / 导入
  * 发布
