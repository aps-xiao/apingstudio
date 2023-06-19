<template><div><h1 id="搭建博客教程" tabindex="-1"><a class="header-anchor" href="#搭建博客教程" aria-hidden="true">#</a> 搭建博客教程</h1>
<p>博客框架：VuePress <br>
VuePress主题：<a href="https://theme-hope.vuejs.press/" target="_blank" rel="noopener noreferrer">https://theme-hope.vuejs.press/<ExternalLinkIcon/></a> <br>
编辑器：vscode/marktext \ 
nodejs: 16.18.1 <br>
项目管理器：pnpm</p>
<h2 id="一、环境搭建" tabindex="-1"><a class="header-anchor" href="#一、环境搭建" aria-hidden="true">#</a> 一、环境搭建</h2>
<h3 id="_1-1-安装nodejs" tabindex="-1"><a class="header-anchor" href="#_1-1-安装nodejs" aria-hidden="true">#</a> 1.1 安装nodejs</h3>
<p><a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">https://nodejs.org/en/<ExternalLinkIcon/></a>
下载LTS版本</p>
<h3 id="_1-2-安装pnpm" tabindex="-1"><a class="header-anchor" href="#_1-2-安装pnpm" aria-hidden="true">#</a> 1.2 安装pnpm</h3>
<p>在终端中输入下列命令安装 pnpm</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>corepack <span class="token builtin class-name">enable</span>
corepack prepare pnpm@7.24.3 <span class="token parameter variable">--activate</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-安装vscode-marktext" tabindex="-1"><a class="header-anchor" href="#_1-3-安装vscode-marktext" aria-hidden="true">#</a> 1.3 安装vscode/marktext</h3>
<p><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">https://code.visualstudio.com/<ExternalLinkIcon/></a></p>
<p><a href="https://github.com/marktext/marktext/releases/tag/v0.17.1" target="_blank" rel="noopener noreferrer">Release 0.17.1 · marktext/marktext · GitHub<ExternalLinkIcon/></a></p>
<h2 id="二、创建vuepress-theme-hope-项目" tabindex="-1"><a class="header-anchor" href="#二、创建vuepress-theme-hope-项目" aria-hidden="true">#</a> 二、创建VuePress Theme Hope 项目</h2>
<p>建议使用纯英文路径 (如：D:\projects\vuepress-theme-hope)。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> create vuepress-theme-hope my-docs

<span class="token comment"># 或</span>

<span class="token function">npm</span> init vuepress-theme-hope my-docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">文件夹参数</p>
<p>这里的 <code v-pre>my-docs</code> 是一个参数，代表 VuePress Theme Hope 项目的文件夹名称，在本教程中，我们将项目生成至当前目录下的 <code v-pre>my-docs</code> 文件夹。</p>
<p>如果你有需求，你可以更改此参数来使用一个新文件夹名称。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">中文显示</p>
<p>如果你的英语很不好，请在第一次选择中通过键盘 <code v-pre>↓</code> 选择 <code v-pre>简体中文</code> 并回车来在后续流程中使用中文进行显示。</p>
</div>
<h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2>
<ul>
<li><code v-pre>vuepress dev [dir]</code> 会启动一个开发服务器，以便让你在本地开发你的 VuePress 站点。</li>
<li><code v-pre>vuepress build [dir]</code> 会将你的 VuePress 站点构建成静态文件，以便你进行后续部署。</li>
</ul>
<div class="hint-container info">
<p class="hint-container-title">使用模板</p>
<p>如果你在使用 VuePress Theme Hope 模板，你可以在 <code v-pre>package.json</code> 中发现下列三个命令:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"docs:build"</span><span class="token operator">:</span> <span class="token string">"vuepress build src"</span><span class="token punctuation">,</span>
    <span class="token property">"docs:clean-dev"</span><span class="token operator">:</span> <span class="token string">"vuepress dev src --clean-cache"</span><span class="token punctuation">,</span>
    <span class="token property">"docs:dev"</span><span class="token operator">:</span> <span class="token string">"vuepress dev src"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这意味着你可以使用:</p>
<ul>
<li><code v-pre>pnpm docs:dev</code> 启动开发服务器</li>
<li><code v-pre>pnpm docs:build</code> 构建项目并输出</li>
<li><code v-pre>pnpm docs:clean-dev</code> 清除缓存并启动开发服务器</li>
</ul>
</div>
<div class="hint-container tip">
<p class="hint-container-title">终止开发服务器</p>
<p>如果你需要终止开发服务器，请点击终端，并连续两次按下 <code v-pre>Ctrl + C</code>。</p>
</div>
<h2 id="三、创建github仓库" tabindex="-1"><a class="header-anchor" href="#三、创建github仓库" aria-hidden="true">#</a> 三、创建github仓库</h2>
<h3 id="_3-1-仓库名与用户名相同" tabindex="-1"><a class="header-anchor" href="#_3-1-仓库名与用户名相同" aria-hidden="true">#</a> 3.1 仓库名与用户名相同</h3>
<p>如果你准备发布到 <code v-pre>https://&lt;USERNAME&gt;.github.io/</code>，你必须将整个项目上传至 <code v-pre>https://github.com/&lt;USERNAME&gt;/&lt;USERNAME&gt;.github.io</code> 仓库。在这种情况下你无需进行任何更改，因为 base 默认就是 <code v-pre>&quot;/&quot;</code>。</p>
<blockquote>
<p>注：base在src.vuepress\config.ts中修改。</p>
</blockquote>
<h3 id="_3-2-仓库名与用户名不同" tabindex="-1"><a class="header-anchor" href="#_3-2-仓库名与用户名不同" aria-hidden="true">#</a> 3.2 仓库名与用户名不同</h3>
<p>如果你的仓库地址是一个普通的形如 <code v-pre>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code> 的格式，网站将会被发布到 <code v-pre>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code> ，也就是说，你需要将 base 设置为 <code v-pre>&quot;/&lt;REPO&gt;/&quot;</code>。</p>
<h2 id="四、发布到github" tabindex="-1"><a class="header-anchor" href="#四、发布到github" aria-hidden="true">#</a> 四、发布到github</h2>
<p>不同的分支有不同的功能
main分支：源代码
gh-pages分支：生成的代码</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>@echo off
ssh-keygen <span class="token parameter variable">-t</span> ed25519 <span class="token parameter variable">-C</span> <span class="token string">"your-email"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"push source"</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"push"</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:aps-xiao/apingstudio.git
<span class="token function">git</span> branch <span class="token parameter variable">-M</span> main
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin main
<span class="token function">yarn</span> docs:build
@echo off
<span class="token builtin class-name">echo</span> <span class="token string">"push distance"</span>
<span class="token builtin class-name">cd</span> .<span class="token punctuation">\</span>src<span class="token punctuation">\</span>.vuepress<span class="token punctuation">\</span>dist<span class="token punctuation">\</span>
<span class="token builtin class-name">echo</span> <span class="token string">'www.example.com'</span> <span class="token operator">></span> CNAME
<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">'deploy'</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:aps-xiao/apingstudio.git
<span class="token function">git</span> branch <span class="token parameter variable">-M</span> gh-pages
<span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:aps-xiao/apingstudio.git gh-pages
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span><span class="token punctuation">\</span><span class="token punctuation">..</span><span class="token punctuation">\</span><span class="token punctuation">..</span><span class="token punctuation">\</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>如果您是从网络上克隆下来的项目，那么，您需要在根目录执行yarn install，安装相关的模块依赖，然后执行yarn docs:dev</p>
</div>
</div></template>


