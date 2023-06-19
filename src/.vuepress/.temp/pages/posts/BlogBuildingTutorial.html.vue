<template><div><h1 id="building-a-blog-tutorial" tabindex="-1"><a class="header-anchor" href="#building-a-blog-tutorial" aria-hidden="true">#</a> Building a Blog Tutorial</h1>
<p>Blog Framework: VuePress<br>
VuePress Theme: <a href="https://theme-hope.vuejs.press/%5C" target="_blank" rel="noopener noreferrer">https://theme-hope.vuejs.press/\<ExternalLinkIcon/></a>
Editor: vscode<br>
nodejs: 16.18.1<br>
Project Manager: pnpm</p>
<h2 id="_1-environmental-construction" tabindex="-1"><a class="header-anchor" href="#_1-environmental-construction" aria-hidden="true">#</a> 1. Environmental construction</h2>
<h3 id="_1-1-install-nodejs" tabindex="-1"><a class="header-anchor" href="#_1-1-install-nodejs" aria-hidden="true">#</a> 1.1 Install nodejs</h3>
<p><a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">https://nodejs.org/en/<ExternalLinkIcon/></a>
Download the LTS version</p>
<h3 id="_1-2-install-pnpm" tabindex="-1"><a class="header-anchor" href="#_1-2-install-pnpm" aria-hidden="true">#</a> 1.2 Install pnpm</h3>
<p>Install pnpm by typing the following command in the end point</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>corepack <span class="token builtin class-name">enable</span>
corepack prepare pnpm@7.24.3 <span class="token parameter variable">--activate</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-install-vscode" tabindex="-1"><a class="header-anchor" href="#_1-3-install-vscode" aria-hidden="true">#</a> 1.3 Install vscode</h3>
<p><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">https://code.visualstudio.com/<ExternalLinkIcon/></a></p>
<h2 id="_2、create-a-vuepress-theme-hope-project" tabindex="-1"><a class="header-anchor" href="#_2、create-a-vuepress-theme-hope-project" aria-hidden="true">#</a> 2、Create a VuePress Theme Hope Project</h2>
<p>It is recommended to use a plain English path (eg: D:\ projects\ vuepress-theme-hope).</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> create vuepress-theme-hope my-docs

<span class="token comment"># 或</span>

<span class="token function">npm</span> init vuepress-theme-hope my-docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Folder Argument</p>
<p>Here <code v-pre>my-docs</code> is an argument representing the folder name of the VuePress Theme Hope project. In this tutorial, we will generate the project to the <code v-pre>my-docs</code> folder in the current directory.</p>
<p>You can change this parameter to use a new folder if you want.</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Dev Server</p>
<p>If you choose to start the development server after the template is initialized, you can enter <code v-pre>localhost:8080/</code> in the browser address bar to access the development server after the dev server starts.</p>
<h2 id="common-commands" tabindex="-1"><a class="header-anchor" href="#common-commands" aria-hidden="true">#</a> Common Commands</h2>
<ul>
<li><code v-pre>vuepress dev [dir]</code> will start a development server to allow you to develop your VuePress site locally.</li>
<li><code v-pre>vuepress build [dir]</code> will build your VuePress site into static files for your subsequent deployment.</li>
</ul>
<div class="hint-container info">
<p class="hint-container-title">Using Template</p>
<p>If you are using the VuePress Theme Hope template, you can find the following three commands in <code v-pre>package.json</code>:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"docs:build"</span><span class="token operator">:</span> <span class="token string">"vuepress build src"</span><span class="token punctuation">,</span>
    <span class="token property">"docs:clean-dev"</span><span class="token operator">:</span> <span class="token string">"vuepress dev src --clean-cache"</span><span class="token punctuation">,</span>
    <span class="token property">"docs:dev"</span><span class="token operator">:</span> <span class="token string">"vuepress dev src"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This means you can use:</p>
<ul>
<li><code v-pre>pnpm docs:dev</code> starts the development server</li>
<li><code v-pre>pnpm docs:build</code> builds the project and outputs</li>
<li><code v-pre>pnpm docs:clean-dev</code> to clear cache and start development server</li>
</ul>
</div>
</div>
<div class="hint-container info">
<p class="hint-container-title">Terminate DevServer</p>
<p>To terminate the development server, please click on the terminal and press <code v-pre>Ctrl + C</code> twice.</p>
</div>
<h2 id="_3、create-github-warehouse" tabindex="-1"><a class="header-anchor" href="#_3、create-github-warehouse" aria-hidden="true">#</a> 3、Create github warehouse</h2>
<h3 id="_3-1-the-warehouse-name-is-the-same-as-the-user-name" tabindex="-1"><a class="header-anchor" href="#_3-1-the-warehouse-name-is-the-same-as-the-user-name" aria-hidden="true">#</a> 3.1 The warehouse name is the same as the user name</h3>
<p>If you are going to publish to <code v-pre>https://&lt;USERNAME&gt;.github.io/</code>, you must upload the entire project to the <code v-pre>https://github.com/&lt;USERNAME&gt;/&lt;USERNAME&gt;.github.io</code> repository . You don’t need to make any changes in this case, since base defaults to <code v-pre>&quot;/&quot;</code>.</p>
<blockquote>
<p>Note: base is modified in src . Vuepress  config.ts.</p>
</blockquote>
<h3 id="_3-2-the-warehouse-name-is-different-from-the-user-name" tabindex="-1"><a class="header-anchor" href="#_3-2-the-warehouse-name-is-different-from-the-user-name" aria-hidden="true">#</a> 3.2 The warehouse name is different from the user name</h3>
<p>If your repository link is in a normal format like <code v-pre>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code>, the website will be published to <code v-pre>https://&lt;USERNAME&gt;.github.io /&lt;REPO&gt;/</code> , so you need to set base to <code v-pre>&quot;/&lt;REPO&gt;/&quot;</code>.</p>
<h2 id="_4、publish-to-github" tabindex="-1"><a class="header-anchor" href="#_4、publish-to-github" aria-hidden="true">#</a> 4、Publish to github</h2>
<p>Different branches have different functions
branch main：source code
branch gh-pages：distance code</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>@echo off
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


