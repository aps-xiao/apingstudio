# 参考主题

[主页 | vuepress-theme-hope (vuejs.press)](https://theme-hope.vuejs.press/zh/)

# github的ssh配置

## 1. 设置git的user name和email

你需要运行命令来配置你的用户名和邮箱：

```shell
# 查看配置
git config --list
#git status
git config --global user.name "docker"
git config --global user.email  "xxx@yeah.net"
```

## 2.检查是否存在SSH Key

```shell
git config --global --list
```

## 3.新建sshkey

```shell
ssh-keygen -t rsa -C "这里换上你的邮箱"
```

- `ssh-keygen`:这是用于生成SSH密钥对的命令行工具。

- `-t`:指定要生成的密钥类型。在这个例子中，`-t rsa` 表示要生成一个RSA类型的密钥对。

- `-c`:指定注释(comment)。这个选项用于为密钥添加注释，以便更好地描述密钥的用途。在这个例子中，`-c "这里换上你的邮箱"` 表示为密钥添加了一个注释，注释的内容是“这里换上你的邮箱”。
  
  查看生成的公钥
  
  ```shell
  cat ~/.ssh/id_rsa.pubgithub
  ```

## 4.关联github

<img src="https://img-blog.csdnimg.cn/66066e5c3d98485a888179e9ec60cf29.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5bm95b-n5YG25b-D,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述">

# # Marktext配合Github图床使用

## STEP 1：建立Github仓库

**【特别注意】需要将仓库设置为Public状态**

## STEP 2: 生成可供访问的token

![](https://img-blog.csdnimg.cn/img_convert/460ba91d720ec998777b0cf7b58e900d.png)

![](https://img-blog.csdnimg.cn/img_convert/407f760a7cd8d0651b4051a9099b1d0b.png)

![](https://img-blog.csdnimg.cn/img_convert/e64d4724b12496c7187b94fca522d6be.png)

![](https://img-blog.csdnimg.cn/img_convert/2de7bd0e8169410f9070626943c29956.png)

## STEP 3：在Marktext中设置图床

![](https://img-blog.csdnimg.cn/img_convert/cf2885c3e6be16f86171514c4eafcbde.png)



由于marktext即将不支持github，所以要专用picgo

[PicGo is Here | PicGo](https://picgo.github.io/PicGo-Doc/zh/guide/)

[Index of /github-release/Molunerfinn_PicGo/v2.3.1/](https://mirrors.sdu.edu.cn/github-release/Molunerfinn_PicGo/v2.3.1/)

![](https://cdn.jsdelivr.net/gh/aps-xiao/ImgGallery@main/20230618194358.png)

记得使用yarn构建：yarn install
否则会出现报错