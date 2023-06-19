import{_ as i,V as o,W as r,X as e,Y as s,Z as a,$ as t,F as l}from"./framework-1a587c83.js";const c={},d=e("h1",{id:"building-a-blog-tutorial",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#building-a-blog-tutorial","aria-hidden":"true"},"#"),s(" Building a Blog Tutorial")],-1),p=e("br",null,null,-1),u={href:"https://theme-hope.vuejs.press/%5C",target:"_blank",rel:"noopener noreferrer"},h=e("br",null,null,-1),m=e("br",null,null,-1),v=e("h2",{id:"_1-environmental-construction",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-environmental-construction","aria-hidden":"true"},"#"),s(" 1. Environmental construction")],-1),b=e("h3",{id:"_1-1-install-nodejs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-1-install-nodejs","aria-hidden":"true"},"#"),s(" 1.1 Install nodejs")],-1),g={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},f=t(`<h3 id="_1-2-install-pnpm" tabindex="-1"><a class="header-anchor" href="#_1-2-install-pnpm" aria-hidden="true">#</a> 1.2 Install pnpm</h3><p>Install pnpm by typing the following command in the end point</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>corepack <span class="token builtin class-name">enable</span>
corepack prepare pnpm@7.24.3 <span class="token parameter variable">--activate</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-install-vscode" tabindex="-1"><a class="header-anchor" href="#_1-3-install-vscode" aria-hidden="true">#</a> 1.3 Install vscode</h3>`,4),k={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},_=t(`<h2 id="_2、create-a-vuepress-theme-hope-project" tabindex="-1"><a class="header-anchor" href="#_2、create-a-vuepress-theme-hope-project" aria-hidden="true">#</a> 2、Create a VuePress Theme Hope Project</h2><p>It is recommended to use a plain English path (eg: D:\\ projects\\ vuepress-theme-hope).</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> create vuepress-theme-hope my-docs

<span class="token comment"># 或</span>

<span class="token function">npm</span> init vuepress-theme-hope my-docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Folder Argument</p><p>Here <code>my-docs</code> is an argument representing the folder name of the VuePress Theme Hope project. In this tutorial, we will generate the project to the <code>my-docs</code> folder in the current directory.</p><p>You can change this parameter to use a new folder if you want.</p></div><div class="hint-container tip"><p class="hint-container-title">Dev Server</p><p>If you choose to start the development server after the template is initialized, you can enter <code>localhost:8080/</code> in the browser address bar to access the development server after the dev server starts.</p><h2 id="common-commands" tabindex="-1"><a class="header-anchor" href="#common-commands" aria-hidden="true">#</a> Common Commands</h2><ul><li><code>vuepress dev [dir]</code> will start a development server to allow you to develop your VuePress site locally.</li><li><code>vuepress build [dir]</code> will build your VuePress site into static files for your subsequent deployment.</li></ul><div class="hint-container info"><p class="hint-container-title">Using Template</p><p>If you are using the VuePress Theme Hope template, you can find the following three commands in <code>package.json</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build src&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:clean-dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev src --clean-cache&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev src&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This means you can use:</p><ul><li><code>pnpm docs:dev</code> starts the development server</li><li><code>pnpm docs:build</code> builds the project and outputs</li><li><code>pnpm docs:clean-dev</code> to clear cache and start development server</li></ul></div></div><div class="hint-container info"><p class="hint-container-title">Terminate DevServer</p><p>To terminate the development server, please click on the terminal and press <code>Ctrl + C</code> twice.</p></div><h2 id="_3、create-github-warehouse" tabindex="-1"><a class="header-anchor" href="#_3、create-github-warehouse" aria-hidden="true">#</a> 3、Create github warehouse</h2><h3 id="_3-1-the-warehouse-name-is-the-same-as-the-user-name" tabindex="-1"><a class="header-anchor" href="#_3-1-the-warehouse-name-is-the-same-as-the-user-name" aria-hidden="true">#</a> 3.1 The warehouse name is the same as the user name</h3><p>If you are going to publish to <code>https://&lt;USERNAME&gt;.github.io/</code>, you must upload the entire project to the <code>https://github.com/&lt;USERNAME&gt;/&lt;USERNAME&gt;.github.io</code> repository . You don’t need to make any changes in this case, since base defaults to <code>&quot;/&quot;</code>.</p><blockquote><p>Note: base is modified in src . Vuepress config.ts.</p></blockquote><h3 id="_3-2-the-warehouse-name-is-different-from-the-user-name" tabindex="-1"><a class="header-anchor" href="#_3-2-the-warehouse-name-is-different-from-the-user-name" aria-hidden="true">#</a> 3.2 The warehouse name is different from the user name</h3><p>If your repository link is in a normal format like <code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code>, the website will be published to <code>https://&lt;USERNAME&gt;.github.io /&lt;REPO&gt;/</code> , so you need to set base to <code>&quot;/&lt;REPO&gt;/&quot;</code>.</p><h2 id="_4、publish-to-github" tabindex="-1"><a class="header-anchor" href="#_4、publish-to-github" aria-hidden="true">#</a> 4、Publish to github</h2><p>Different branches have different functions branch main：source code branch gh-pages：distance code</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>@echo off
<span class="token builtin class-name">echo</span> <span class="token string">&quot;push source&quot;</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;push&quot;</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:aps-xiao/apingstudio.git
<span class="token function">git</span> branch <span class="token parameter variable">-M</span> main
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin main
<span class="token function">yarn</span> docs:build
@echo off
<span class="token builtin class-name">echo</span> <span class="token string">&quot;push distance&quot;</span>
<span class="token builtin class-name">cd</span> .<span class="token punctuation">\\</span>src<span class="token punctuation">\\</span>.vuepress<span class="token punctuation">\\</span>dist<span class="token punctuation">\\</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;www.example.com&#39;</span> <span class="token operator">&gt;</span> CNAME
<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;deploy&#39;</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:aps-xiao/apingstudio.git
<span class="token function">git</span> branch <span class="token parameter variable">-M</span> gh-pages
<span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:aps-xiao/apingstudio.git gh-pages
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function y(q,w){const n=l("ExternalLinkIcon");return o(),r("div",null,[d,e("p",null,[s("Blog Framework: VuePress"),p,s(" VuePress Theme: "),e("a",u,[s("https://theme-hope.vuejs.press/\\"),a(n)]),s(" Editor: vscode"),h,s(" nodejs: 16.18.1"),m,s(" Project Manager: pnpm")]),v,b,e("p",null,[e("a",g,[s("https://nodejs.org/en/"),a(n)]),s(" Download the LTS version")]),f,e("p",null,[e("a",k,[s("https://code.visualstudio.com/"),a(n)])]),_])}const j=i(c,[["render",y],["__file","BlogBuildingTutorial.html.vue"]]);export{j as default};
