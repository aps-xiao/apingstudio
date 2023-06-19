---
icon: edit
date: 2023-02-06
category:
  - 教程
tag:
  - 红
---

# 搭建博客教程

博客框架：VuePress \
VuePress主题：https://theme-hope.vuejs.press/ \
编辑器：vscode/marktext \ 
nodejs: 16.18.1 \
项目管理器：pnpm 

## 一、环境搭建

### 1.1 安装nodejs

https://nodejs.org/en/
下载LTS版本

### 1.2 安装pnpm

在终端中输入下列命令安装 pnpm

```sh
corepack enable
corepack prepare pnpm@7.24.3 --activate
```

### 1.3 安装vscode/marktext

https://code.visualstudio.com/

[Release 0.17.1 · marktext/marktext · GitHub](https://github.com/marktext/marktext/releases/tag/v0.17.1)

## 二、创建VuePress Theme Hope 项目

建议使用纯英文路径 (如：D:\projects\vuepress-theme-hope\)。

```sh
pnpm create vuepress-theme-hope my-docs

# 或

npm init vuepress-theme-hope my-docs
```

::: tip 文件夹参数

这里的 `my-docs` 是一个参数，代表 VuePress Theme Hope 项目的文件夹名称，在本教程中，我们将项目生成至当前目录下的 `my-docs` 文件夹。

如果你有需求，你可以更改此参数来使用一个新文件夹名称。

:::

::: tip 中文显示

如果你的英语很不好，请在第一次选择中通过键盘 `↓` 选择 `简体中文` 并回车来在后续流程中使用中文进行显示。

:::

## 常用命令

- `vuepress dev [dir]` 会启动一个开发服务器，以便让你在本地开发你的 VuePress 站点。
- `vuepress build [dir]` 会将你的 VuePress 站点构建成静态文件，以便你进行后续部署。

::: info 使用模板

如果你在使用 VuePress Theme Hope 模板，你可以在 `package.json` 中发现下列三个命令:

```json
{
  "scripts": {
    "docs:build": "vuepress build src",
    "docs:clean-dev": "vuepress dev src --clean-cache",
    "docs:dev": "vuepress dev src"
  }
}
```

这意味着你可以使用:

- `pnpm docs:dev` 启动开发服务器
- `pnpm docs:build` 构建项目并输出
- `pnpm docs:clean-dev` 清除缓存并启动开发服务器

:::

::: tip 终止开发服务器

如果你需要终止开发服务器，请点击终端，并连续两次按下 `Ctrl + C`。

:::

## 三、创建github仓库

### 3.1 仓库名与用户名相同

如果你准备发布到 `https://<USERNAME>.github.io/`，你必须将整个项目上传至 `https://github.com/<USERNAME>/<USERNAME>.github.io` 仓库。在这种情况下你无需进行任何更改，因为 base 默认就是 `"/"`。

> 注：base在src\.vuepress\config.ts中修改。

### 3.2 仓库名与用户名不同

如果你的仓库地址是一个普通的形如 `https://github.com/<USERNAME>/<REPO>` 的格式，网站将会被发布到 `https://<USERNAME>.github.io/<REPO>/` ，也就是说，你需要将 base 设置为 `"/<REPO>/"`。

## 四、发布到github

不同的分支有不同的功能
main分支：源代码
gh-pages分支：生成的代码

```sh
@echo off
ssh-keygen -t ed25519 -C "your-email"
echo "push source"
git add .
git commit -m "push"
git remote add origin git@github.com:aps-xiao/apingstudio.git
git branch -M main
git push -u origin main
yarn docs:build
@echo off
echo "push distance"
cd .\src\.vuepress\dist\
echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git remote add origin git@github.com:aps-xiao/apingstudio.git
git branch -M gh-pages
git push -f git@github.com:aps-xiao/apingstudio.git gh-pages
cd ..\..\..\
```

::: tip 提示

如果您是从网络上克隆下来的项目，那么，您需要在根目录执行yarn install，安装相关的模块依赖，然后执行yarn docs:dev

:::