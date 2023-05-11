import{_ as l,r as s,o as d,c,a as e,b as i,d as n,w as a,e as t}from"./app.45987e60.js";const h="/images/instructions/安装optifine-1.png",p="/images/instructions/安装optifine-2.png",u="/images/instructions/安装optifine-3.png",g="/images/instructions/forge.png",_="/images/instructions/extract.png",f="/images/instructions/mods.png",F="/images/instructions/Iris安装列表.jpg",m={},b=t('<h1 id="通用教程-新手必看" tabindex="-1"><a class="header-anchor" href="#通用教程-新手必看" aria-hidden="true">#</a> 通用教程（新手必看）</h1><h2 id="新手指导" tabindex="-1"><a class="header-anchor" href="#新手指导" aria-hidden="true">#</a> 新手指导</h2><h3 id="入门必看" tabindex="-1"><a class="header-anchor" href="#入门必看" aria-hidden="true">#</a> 入门必看</h3><p><a href="#%E5%85%89%E5%BD%B1%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5">#光影基础概念</a></p><p><a href="%E5%85%B3%E4%BA%8E-optifine-iris-%E5%A6%82%E4%BD%95%E6%90%AD%E9%85%8D-forge-fabric">#关于 OptiFine / Iris 如何搭配 Forge / Fabric</a></p><p>在了解以上两栏内容后，再根据自己的情况选择下方对应的安装指南。</p><h3 id="安装前的准备" tabindex="-1"><a class="header-anchor" href="#安装前的准备" aria-hidden="true">#</a> 安装前的准备</h3><p>鉴于 PCL2 其优秀的界面设计与逻辑，我们建议新手入门使用该启动器。以下是该启动器的两个版本：</p>',8),O={href:"https://afdian.net/p/0164034c016c11ebafcb52540025c377",target:"_blank",rel:"noopener noreferrer"},x={href:"https://afdian.net/a/LTCat",target:"_blank",rel:"noopener noreferrer"},E=e("h2",{id:"光影基础概念",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#光影基础概念","aria-hidden":"true"},"#"),i(" 光影基础概念")],-1),C=e("p",null,"光影的专业名称为着色器。它基于MC提供的接口修改了许多MC的光照效果。这些接口由一些渲染模组控制，关于着色器的渲染模组介绍如下：",-1),I=e("h3",{id:"主要渲染模组",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#主要渲染模组","aria-hidden":"true"},"#"),i(" 主要渲染模组")],-1),B=e("strong",null,[e("code",null,"OptiFine"),i(" 是 Minecraft Java 版的一个 Mod")],-1),M={href:"https://www.optifine.net/home",target:"_blank",rel:"noopener noreferrer"},k=e("strong",null,[e("code",null,"Iris"),i(" 是 OptiFine 的衍生物")],-1),S=e("strong",null,"Fabric",-1),w=e("strong",null,"Forge",-1),A=e("code",null,"Oculus",-1),L={href:"https://irisshaders.net/",target:"_blank",rel:"noopener noreferrer"},v=e("p",null,"......",-1),D=e("h3",{id:"辅助渲染模组",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#辅助渲染模组","aria-hidden":"true"},"#"),i(" 辅助渲染模组")],-1),P=e("p",null,[e("code",null,"AdcanvedShader"),i(" 是一个 "),e("strong",null,"OptiFine"),i(" 的辅助模组，仅在 "),e("code",null,"1.12.2"),i(" 可用。它能够允许用户使用"),e("strong",null,"仅在更高版本中可用"),i("的着色器（如 iterationT 3.0.0 ）。")],-1),G={href:"https://www.curseforge.com/minecraft/mc-mods/advancedshader",target:"_blank",rel:"noopener noreferrer"},J=t('<hr><h2 id="关于-optifine-iris-如何搭配-forge-fabric" tabindex="-1"><a class="header-anchor" href="#关于-optifine-iris-如何搭配-forge-fabric" aria-hidden="true">#</a> 关于 OptiFine / Iris 如何搭配 Forge / Fabric</h2><p>很多人不清楚如何搭配 ，因此我们在这里简单叙述如何选择：</p><ul><li><p>OptiFine 的优点在于 <strong>一个模组解决所有功能</strong> ，方便新手入门。该模组适合在两种情况下使用：</p><ul><li>低版本 MC （1.7.10 - 1.16.5）；</li><li>玩法 <strong>以原版为主体</strong> 的高版本 MC （1.17 - 最新版）。</li></ul></li><li><p>Iris 的功能单一，需要搭配很多模组才能复现前者的大部分功能。适合 <em>愿意花时间</em> 的新手在遇到以下需求时使用：</p><ul><li>游戏里添加有 <strong>声明不支持 OptiFine</strong> 或 <strong>明显运行有冲突</strong> 的模组；</li><li>需要加载 <strong>Iris独占光影（如 Shrimple ）</strong> ；</li><li>在最新的 <strong>MC快照版</strong> ，OptiFine 尚未推出对应版本时（但也无法通过启动器直接下载。此类玩家需前往 Iris 的 Discord 服务器自行下载快照版对应的文件）</li></ul></li></ul><hr><h2 id="optifine-安装与光影加载" tabindex="-1"><a class="header-anchor" href="#optifine-安装与光影加载" aria-hidden="true">#</a> OptiFine 安装与光影加载</h2><ul><li><p>以下步骤分 <code>自动安装</code> 与 <code>手动安装</code> 两种形式。</p><ul><li><p><code>自动安装</code> 适用于<strong>初次安装游戏</strong>时；</p></li><li><p><code>手动安装</code> 适用于<strong>往整合包中添加新内容</strong>时。</p></li></ul></li></ul><h3 id="自动安装" tabindex="-1"><a class="header-anchor" href="#自动安装" aria-hidden="true">#</a> 自动安装</h3><p><img src="'+h+'" alt="安装optifine-1.png"><img src="'+p+'" alt="安装optifine-2.png"></p><p>安装步骤：</p><ul><li>打开 <code>PCL2</code> ；</li><li>点击 <code>下载</code> -&gt; <code>自动安装</code>，选择自己需要的游戏版本后，在 OptiFine 安装栏中点击选择最新版本（一般在最顶部）。</li></ul><h3 id="手动安装" tabindex="-1"><a class="header-anchor" href="#手动安装" aria-hidden="true">#</a> 手动安装</h3><p>安装步骤：</p>',13),N={href:"https://www.optifine.net/home",target:"_blank",rel:"noopener noreferrer"},R=t("<li>点击上面的 <code>Download</code> ；</li><li>下载对应版本的 <strong>最新</strong> OptiFine（如果广告无法跳过，点击旁边的 <code>Mirror</code> ）；</li><li>在启动器中 <strong>预先安装并启动一次</strong> 原版游戏；</li><li>双击打开下载到的文件，选择想要安装的客户端根目录，点击 <code>Install</code> 即可完成安装。</li>",4),T=t('<p><img src="'+u+'" alt="安装optifine-3.png"></p><h3 id="加载光影" tabindex="-1"><a class="header-anchor" href="#加载光影" aria-hidden="true">#</a> 加载光影</h3><p>启动安装后的游戏版本。点击 <code>设置</code> -&gt; <code>视频设置</code> -&gt; <code>光影</code> 即可选择加载 shaderpacks 文件夹内的任意光影包。</p><p>以下是 OptiFine 自带的两个光影选项说明：</p><ul><li><code>（内置）</code>： OptiFine 自带的一套基于原版的渲染系统，相较于原版会有较大的 FPS 提升。注意，有时候与一些模组（如交错次元）同时加载时会出现 BUG ，一般在第一次加载时模组也会警告，此时需要将加载选项改为 <strong>关闭</strong> 或 <strong>禁用 OptiFine</strong>。</li><li><code>（关闭）</code>：约等于没有安装 OptiFine ，适用于模组不兼容（内置）渲染系统时。</li></ul><h2 id="optifine-无法与-forge-兼容" tabindex="-1"><a class="header-anchor" href="#optifine-无法与-forge-兼容" aria-hidden="true">#</a> OptiFine 无法与 Forge 兼容</h2><ul><li>在较低版本中（如 <code>1.12.2</code> ），从官网下载的 <code>OptiFine JAR</code> 文件可以作为 <code>Mod</code> 使用 （即可以用 Forge 直接加载）；</li><li>但由于 <strong>Forge 更新速度快于 OptiFine</strong>，部分新版本的最新 Forge 可能会与 OptiFine 不兼容。此时需要前往 OptiFine 官网的 <code>更新日志</code>，<strong>检查支持的 Forge 版本并回退。</strong></li></ul><p><img src="'+g+'" alt="image.png"></p><h3 id="自动安装解决方案" tabindex="-1"><a class="header-anchor" href="#自动安装解决方案" aria-hidden="true">#</a> 自动安装解决方案</h3><ul><li>在 <strong>自动安装</strong> 界面直接选择上图中版本的 Forge 与 OptiFine 即可解决该问题。</li></ul><h3 id="手动安装解决方案" tabindex="-1"><a class="header-anchor" href="#手动安装解决方案" aria-hidden="true">#</a> 手动安装解决方案</h3><p><img src="'+_+'" alt="extract.png"></p><ul><li>双击 OptiFine 官网的 Jar 文件打开安装器，将目录引导至你的游戏根目录下。在预先装好原版游戏后，点击 <code>Extract</code> ，会自动生成一个<code>模组版 OptiFine</code> 。</li></ul><p><img src="'+f+'" alt="mods.png"></p><ul><li>将 <strong>模组版 OptiFine</strong> 放到 <code>mods</code> 文件夹，即可正常加载 OptiFine 。</li></ul><h2 id="optifine-无法与-fabric-兼容" tabindex="-1"><a class="header-anchor" href="#optifine-无法与-fabric-兼容" aria-hidden="true">#</a> OptiFine 无法与 Fabric 兼容</h2><p>一般分两种情况。</p><ul><li><strong>未添加 <code>OptiFabric</code> 模组。</strong> Fabric 与 OptiFine 的兼容由 <code>OptiFabric</code> 模组负责，绕过该模组直接添加或尝试用 Forge 的安装方式安装皆不可行。唯一的解决方案是将 OptiFine 与 OptiFabric <strong>一起放入</strong> <code>mods</code> 文件夹，再用 Fabric 加载。</li><li><strong>添加了 OptiFabric ，但仍然不兼容。</strong> 该情况多出现在新版本，一般是因为 OptiFabric 更新较慢的缘故。此时需要等待作者发布更新或换为<code>更旧版本</code>的 OptiFine 。</li></ul><h2 id="optifine-无法与-sodium-iris-等系列模组兼容" tabindex="-1"><a class="header-anchor" href="#optifine-无法与-sodium-iris-等系列模组兼容" aria-hidden="true">#</a> OptiFine 无法与 Sodium / Iris 等系列模组兼容</h2><p>直接删除 <strong>该系列所有模组</strong> 即可。</p><ul><li><p>OptiFine 的光影支持功能与 Iris 在功能上是 <code>重复</code> 的，两者<strong>互不兼容</strong>。</p></li><li><p>而钠属于 <strong>优化模组</strong> ，只能兼容开源的 <code>Iris</code>，无法兼容 <strong>原本就具备优化功能</strong> 的 <code>OptiFine</code> 。</p></li></ul><h2 id="optifine-无法与其他模组兼容" tabindex="-1"><a class="header-anchor" href="#optifine-无法与其他模组兼容" aria-hidden="true">#</a> OptiFine 无法与其他模组兼容</h2>',22),V=e("li",null,[e("p",null,[i("国外光影社区 ShaderLABS 整理了一份"),e("code",null,"不兼容的模组名单"),i("，并逐一写明了如何使它们与 OptiFine 光影兼容。我们将这些内容汉化并搬运到了 "),e("strong",null,"MGC 答疑手册 - Java版着色器(Shader)"),i("。内容如下：")])],-1),j=e("li",null,[e("p",null,"此外，该文档还记录了许多 OptiFine 设置上的问题与解决方法。如果你的 OptiFine 光影表现不正常，请一定要认真看完上述文档。")],-1),q=t('<hr><h2 id="iris-安装与光影的加载" tabindex="-1"><a class="header-anchor" href="#iris-安装与光影的加载" aria-hidden="true">#</a> Iris 安装与光影的加载</h2><ul><li><p>在 PCL2 的 <code>下载</code> -&gt; <code>自动安装</code> 中下载 <strong>只有 Fabric</strong> 的版本；</p></li><li><p>在 PCL2 的 <code>下载</code> -&gt; <code>Mod</code> 中，按照以下列表（由 Sundial 开发群的 <code>橙汁爷爷</code> 提供），搜索并下载所有模组（如只是开光影不接触材质包，可只下载 Sodium 与 Iris 两个模组）；</p></li><li><p>安装光影的过程与上方 <a href="#%E5%8A%A0%E8%BD%BD%E5%85%89%E5%BD%B1">加载光影</a> 的步骤大同小异，只是界面上的不同。</p></li></ul><p><img src="'+F+'" alt="Iris安装列表"></p><hr><h2 id="误区纠正" tabindex="-1"><a class="header-anchor" href="#误区纠正" aria-hidden="true">#</a> 误区纠正</h2><h3 id="常见误区纠正" tabindex="-1"><a class="header-anchor" href="#常见误区纠正" aria-hidden="true">#</a> 常见误区纠正</h3>',7),U=e("h3",{id:"光线追踪误区纠正",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#光线追踪误区纠正","aria-hidden":"true"},"#"),i(" 光线追踪误区纠正")],-1);function y(z,H){const r=s("ExternalLinkIcon"),o=s("RouterLink");return d(),c("div",null,[b,e("p",null,[e("a",O,[i("PCL2免费正式版"),n(r)])]),e("p",null,[e("a",x,[i("PCL2付费快照版"),n(r)])]),E,C,e("blockquote",null,[I,e("ul",null,[e("li",null,[B,i(" ，作者为 sp614x 。该模组属于独立开发者的闭源项目。其主要功能是加载光影包、性能优化与一些渲染改进功能，为玩家获得更好的视觉体验。其前身为 ShaderMod，目前 OptiFine 已将它集成进代码，并接管了它的后续更新工作。因此不建议玩家再去使用老旧的 ShaderMod。 "),e("ul",null,[e("li",null,[e("a",M,[i("相关链接 - OptiFine"),n(r)])])])]),e("li",null,[k,i("，属于多人开发的开源项目。与 Sodium（钠）模组共同开启时可以获得更好的游玩体验，同时为了 "),S,i(" 模组加载器社区的模组兼容性而生（ "),w,i(" 中也有移植版，名为 "),A,i(" ，由于社区的一些特性，不推荐使用）。但其开发方向与 OptiFine 相反（适配现有的光影），而光影的开发是与 Optfine 或 Canvas 同向的。而且 Iris 到目前为止对开发者并不友好。但随着 Iris 慢慢增加新的光影接口，它的新光影功能已经逐渐追上并赶超 OptiFine 。或许在未来的某个时候，我们可以看到 Iris 取代 OptiFine 的一天。 "),e("ul",null,[e("li",null,[e("a",L,[i("相关链接 - Iris"),n(r)])])])])]),v,D,e("ul",null,[e("li",null,[P,e("ul",null,[e("li",null,[e("a",G,[i("相关链接 - AdcanvedShader"),n(r)])])])])])]),e("p",null,[i("—— 引用自 "),n(o,{to:"/science/shader-base.html"},{default:a(()=>[i("MGC 大众科普")]),_:1})]),J,e("ul",null,[e("li",null,[i("点击进入 "),e("a",N,[i("OptiFine 官网"),n(r)]),i("；")]),R]),T,e("ul",null,[V,e("li",null,[e("p",null,[n(o,{to:"/answer_java/"},{default:a(()=>[i("MGC 答疑手册 - Java版着色器(Shader)")]),_:1})])]),j]),q,e("ul",null,[e("li",null,[n(o,{to:"/correct/"},{default:a(()=>[i("MGC 歧义及观点纠正")]),_:1})])]),U,e("ul",null,[e("li",null,[n(o,{to:"/correct/RT_mistakes.html"},{default:a(()=>[i("MGC 歧义观点 - 光线追踪")]),_:1})])])])}const Q=l(m,[["render",y],["__file","index.html.vue"]]);export{Q as default};
