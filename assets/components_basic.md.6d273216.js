import{o as a,c as s,a as n}from"./app.4252265e.js";const t='{"title":"Basic 基础组件","description":"","frontmatter":{},"headers":[{"level":2,"title":"BasicTitle","slug":"basictitle"},{"level":3,"title":"Usage","slug":"usage"},{"level":3,"title":"Props","slug":"props"},{"level":3,"title":"Slots","slug":"slots"},{"level":2,"title":"BasicArrow","slug":"basicarrow"},{"level":3,"title":"Usage","slug":"usage-1"},{"level":3,"title":"Props","slug":"props-1"},{"level":2,"title":"BasicHelp","slug":"basichelp"},{"level":3,"title":"Usage","slug":"usage-2"},{"level":3,"title":"Props","slug":"props-2"},{"level":3,"title":"Slots","slug":"slots-1"}],"relativePath":"components/basic.md","lastUpdated":1727509014711}',p={},e=n('<h1 id="basic-基础组件"><a class="header-anchor" href="#basic-基础组件" aria-hidden="true">#</a> Basic 基础组件</h1><p>一些比较基础的通用组件使用方式</p><h2 id="basictitle"><a class="header-anchor" href="#basictitle" aria-hidden="true">#</a> BasicTitle</h2><p>用于显示标题，可以显示帮助按钮及文本</p><h3 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BasicTitle</span> <span class="token attr-name">helpMessage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>提示1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BasicTitle</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BasicTitle</span> <span class="token attr-name">:helpMessage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>提示1<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>提示2<span class="token punctuation">&#39;</span>]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BasicTitle</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> BasicTitle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Basic/index&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span> BasicTitle <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h3 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>helpMessage</td><td><code>string｜string[]</code></td><td>-</td><td>标题右侧帮助按钮信息</td></tr><tr><td>span</td><td><code>boolean</code></td><td><code>false</code></td><td>是否显示标题左侧蓝色色块</td></tr><tr><td>normal</td><td><code>boolean</code></td><td><code>false</code></td><td>将文字默认化，不加粗</td></tr></tbody></table><h3 id="slots"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>标题文本</td></tr></tbody></table><h2 id="basicarrow"><a class="header-anchor" href="#basicarrow" aria-hidden="true">#</a> BasicArrow</h2><p>带动画的箭头组件</p><h3 id="usage-1"><a class="header-anchor" href="#usage-1" aria-hidden="true">#</a> Usage</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BasicArrow</span> <span class="token attr-name">:expand</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> BasicArrow <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Basic/index&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span> BasicArrow <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h3 id="props-1"><a class="header-anchor" href="#props-1" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>expand</td><td><code>boolean</code></td><td><code>false</code></td><td>箭头展开状态</td></tr><tr><td>top</td><td><code>boolean</code></td><td><code>false</code></td><td>箭头默认向上</td></tr><tr><td>bottom</td><td><code>boolean</code></td><td><code>false</code></td><td>箭头默认向下</td></tr><tr><td>inset</td><td><code>boolean</code></td><td><code>false</code></td><td>取消 padding/margin，用于内嵌</td></tr></tbody></table><h2 id="basichelp"><a class="header-anchor" href="#basichelp" aria-hidden="true">#</a> BasicHelp</h2><p>帮助按钮组件</p><h3 id="usage-2"><a class="header-anchor" href="#usage-2" aria-hidden="true">#</a> Usage</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BasicHelp</span> <span class="token attr-name">:text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>提示1<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>提示2<span class="token punctuation">&#39;</span>]<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BasicHelp</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>提示<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> BasicHelp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Basic/index&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span> BasicHelp <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h3 id="props-2"><a class="header-anchor" href="#props-2" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>可选值</th><th>说明</th></tr></thead><tbody><tr><td>fontSize</td><td><code>string</code></td><td><code>14px</code></td><td>-</td><td>字体大小</td></tr><tr><td>color</td><td><code>string</code></td><td>#fff</td><td>-</td><td>颜色</td></tr><tr><td>text</td><td><code>string｜string[]</code></td><td>-</td><td>-</td><td>文本列表</td></tr><tr><td>showIndex</td><td><code>boolean</code></td><td>true</td><td>-</td><td>是否显示序号,在 text 为 string[]情况下生效</td></tr><tr><td>maxWidth</td><td><code>string</code></td><td><code>600px</code></td><td>-</td><td>最大宽度</td></tr><tr><td>placement</td><td><code>string</code></td><td><code>right</code></td><td>-</td><td>显示方向，参考 Tooltip 组件</td></tr></tbody></table><h3 id="slots-1"><a class="header-anchor" href="#slots-1" aria-hidden="true">#</a> Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>默认图标</td></tr></tbody></table>',24);p.render=function(n,t,p,o,c,l){return a(),s("div",null,[e])};export default p;export{t as __pageData};
