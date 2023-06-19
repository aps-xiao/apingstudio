---
icon: edit
date: 2023-02-06
category:
  - 教程
tag:
  - 红
---

# Building a Blog Tutorial

Blog Framework: VuePress\
VuePress Theme: https://theme-hope.vuejs.press/\
Editor: vscode\
nodejs: 16.18.1\
Project Manager: pnpm

## 1. Environmental construction

### 1.1 Install nodejs

https://nodejs.org/en/
Download the LTS version

### 1.2 Install pnpm

Install pnpm by typing the following command in the end point

```sh
corepack enable
corepack prepare pnpm@7.24.3 --activate
```

### 1.3 Install vscode

https://code.visualstudio.com/

## 2、Create a VuePress Theme Hope Project

It is recommended to use a plain English path (eg: D:\ projects\ vuepress-theme-hope\).

```sh
pnpm create vuepress-theme-hope my-docs

# 或

npm init vuepress-theme-hope my-docs
```

::: tip Folder Argument

Here `my-docs` is an argument representing the folder name of the VuePress Theme Hope project. In this tutorial, we will generate the project to the `my-docs` folder in the current directory.

You can change this parameter to use a new folder if you want.

:::

::: tip Dev Server

If you choose to start the development server after the template is initialized, you can enter `localhost:8080/` in the browser address bar to access the development server after the dev server starts.

## Common Commands

- `vuepress dev [dir]` will start a development server to allow you to develop your VuePress site locally.
- `vuepress build [dir]` will build your VuePress site into static files for your subsequent deployment.

::: info Using Template

If you are using the VuePress Theme Hope template, you can find the following three commands in `package.json`:

```json
{
  "scripts": {
    "docs:build": "vuepress build src",
    "docs:clean-dev": "vuepress dev src --clean-cache",
    "docs:dev": "vuepress dev src"
  }
}
```

This means you can use:

- `pnpm docs:dev` starts the development server
- `pnpm docs:build` builds the project and outputs
- `pnpm docs:clean-dev` to clear cache and start development server

:::

::: info Terminate DevServer

To terminate the development server, please click on the terminal and press `Ctrl + C` twice.

:::

## 3、Create github warehouse

### 3.1 The warehouse name is the same as the user name

If you are going to publish to `https://<USERNAME>.github.io/`, you must upload the entire project to the `https://github.com/<USERNAME>/<USERNAME>.github.io` repository . You don’t need to make any changes in this case, since base defaults to `"/"`.

> Note: base is modified in src . Vuepress  config.ts.

### 3.2 The warehouse name is different from the user name

If your repository link is in a normal format like `https://github.com/<USERNAME>/<REPO>`, the website will be published to `https://<USERNAME>.github.io /<REPO>/` , so you need to set base to `"/<REPO>/"`.

## 4、Publish to github

Different branches have different functions
branch main：source code
branch gh-pages：distance code

```sh
@echo off
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
```