import{_ as n,r as t,o as r,c as s,a as o,b as e,d as i,w as c,e as d}from"./app-e6af7656.js";const a={},g=d('<h1 id="光影问答" tabindex="-1"><a class="header-anchor" href="#光影问答" aria-hidden="true">#</a> 光影问答</h1><h2 id="为什么-mc-的光影优化如此糟糕" tabindex="-1"><a class="header-anchor" href="#为什么-mc-的光影优化如此糟糕" aria-hidden="true">#</a> 为什么 MC 的光影优化如此糟糕？</h2><p>有以下几个原因：</p><ul><li><code>OpenGL</code> 本身性能不差，但是选用的版本老旧，导致老旧的着色器代码具有<strong>极大的优化空间</strong>；</li><li><code>lwjgl</code> 封装加上 <code>Blaze3d</code> 封装让代码效率打了折扣；</li><li>游戏渲染和主进程绑定在一起，也就意味着虽然 <code>GPU</code> 可能有空闲，但是由于主进程运算阻塞，导致 <code>FPS</code> 降低；</li><li>部分优化完全可以达到很好的效果，但是 Mojang 没能力做（例如 <code>Sodium</code> 或者 <code>OptiFine</code> 的优化）。</li><li>换言之： <ul><li>从最底层看，御三家的 <code>OpenGL</code> 实现做的参差不齐；</li><li>往上看 <code>OpenGL</code> 本身历史包袱重，而且 <code>Mojang</code> 用的是旧的方法，新的也不会用；</li><li>看引擎： <code>lwjgl</code> 也就 <code>MC</code> 在用了，小厂自研，优化一般，单线程运作也限制了过多东西；</li><li>看游戏架构：渲染与其他操作绑定同步，只要别的地方出岔子，渲染就卡；</li><li>再看看渲染代码：优化二字完全没体现，能用就行；</li><li>最后看总体：一代不如一代。</li></ul></li></ul><h2 id="推荐一个漂亮-流畅的光影" tabindex="-1"><a class="header-anchor" href="#推荐一个漂亮-流畅的光影" aria-hidden="true">#</a> 推荐一个漂亮/流畅的光影</h2><p><strong>最清楚这个答案的是你和你的设备，而不是回答的任何人！</strong></p><ul><li>鉴于不同人对漂亮/流畅的定义不同，我们不可能直接给出答案，也不建议在 <code>已自行体验光影之前</code> 抛出该问题。</li><li>光影在游戏中的渲染是一个 <strong>动态</strong> 的过程，任何变量（<code>游戏版本</code>、<code>地图地形</code>、<code>材质</code>、<code>模组</code>、<code>数据包</code>，甚至 <code>游戏内朝着不同的东西看</code> 等等）都会对光影的帧数 <strong>产生影响</strong>，从而使帧数变得不稳定。</li><li>最快获取答案的方式是你自己逐个测试，而不是问其他人！</li></ul><h2 id="光影区分游戏版本吗" tabindex="-1"><a class="header-anchor" href="#光影区分游戏版本吗" aria-hidden="true">#</a> 光影区分游戏版本吗？</h2><p><strong>一般来说，光影不区分游戏版本</strong>，<code>GLSL</code> 的兼容性可以保证光影能够在 <strong>大多数设备</strong> 上运行。如果你遇到有部分光影不兼容当前游戏的情况，请检查原因是否为以下几点：</p>',9),h=o("li",null,[o("strong",null,[e("使用了 "),o("code",null,"OptiFine 最新预览版")]),e("，可能会导致一系列不兼容现象，有时候还会无法启用光影。")],-1),u=o("li",null,[o("strong",null,[e("使用了 "),o("code",null,"Iris")]),e("。该模组面向玩家设计，会有部分光影不支持。")],-1),p=o("li",null,[o("strong",null,"光影过于老旧"),e("，可能会出现语法不规范，内容不完善等问题。")],-1),_=o("strong",null,"Mod 兼容问题",-1),f=o("li",null,[e("视觉类 Mod（如： "),o("strong",null,"更好的树叶"),e("）；")],-1),m=o("li",null,[o("code",null,"自带渲染的 Mod"),e("（如： "),o("strong",null,"植物魔法"),e("）；")],-1),x=o("li",null,[e("声明了不支持 OptiFine 的 Mod（如："),o("strong",null,"暮色森林"),e("）。")],-1),L=d("<li><strong>使用了 AMD Radeon 系列显卡</strong>。自 2022 年 7 月开始， AMD 大幅重写了显卡驱动，在提升了一定性能的同时，把原本就不佳的兼容性破坏到无以复加。如果想要体验较多的光影，请将显卡驱动回滚至 <code>22.6.1 及以前</code>。</li><li><strong>使用了 Intel 系列显卡</strong>。Intel 系列显卡对光影的支持一直很糟糕。如果你的电脑还有独立显卡，请尽量调用独显来运行游戏。调用独显的具体方法根据显卡商，有不同分类，可通过搜索引擎获取，此不赘述。</li><li><strong>客户端游戏版本过于老旧</strong>。一些光影（如 <code>PTGI</code>） 不兼容 <code>1.7.10</code> 及以下的老版本，因为这些版本的 <code>OptiFine</code> 或 <code>Shadersmod</code> 年久失修，早已不兼容新的光影代码，属于正常现象；</li><li><strong>你所用的设备不兼容最新的OpenGL版本</strong>。 如苹果公司的 MacBook 最高只支持 <code>OpenGL 4.1</code>，而最新的版本为4.6。一旦光影文件内指定版本高于 <code>OpenGL 4.1</code>（即 <code>GLSL 410</code> ），便极有可能发生兼容性问题。</li>",4),S=d('<h2 id="加载光影后帧数远低于预期" tabindex="-1"><a class="header-anchor" href="#加载光影后帧数远低于预期" aria-hidden="true">#</a> 加载光影后帧数远低于预期？</h2><p>可搭配任务管理器分三步检查。</p><ol><li>检查 <strong>GPU 占用</strong> ：</li></ol><ul><li>在游戏内的 F3 信息界面或任务管理器 GPU 页可查看显卡使用率；</li><li>若发现核显运行满载而独立显卡空闲，则需在系统设置中启用高性能电源计划，或将 Java 目录中 <code>bin\\javaw.exe</code> 添加至显卡设置面板并启用独显渲染。此处不会可自行百度教程；</li><li>若独显使用率为 <code>100%</code> ，但帧率仍然低于同水平硬件，则可直接跳至第三步检查 RAM 占用；</li><li>若独显使用率低于 <code>80%</code> ，则可能是下方两个部件达到了瓶颈状态，或是第四点的特殊情况。</li></ul><ol start="2"><li>检查 <strong>CPU 占用</strong> ：</li></ol><ul><li>右键任务管理器中 CPU 的占用曲线图，将图形更改为 <code>逻辑处理器</code> ；</li><li>如果你发现 <code>其中一个线程是满载</code> ，那一般是因为 CPU 出现瓶颈，性能不足以调用全部 GPU 的性能；</li><li>原因一般是使用了 <strong>模组过多的整合包</strong> 或 <strong>分辨率过高/贴图数量过多的纹理包</strong>。可根据具体情况逐个调整，减少 CPU 的负载。</li></ul><ol start="3"><li>检查 <strong>运行内存（RAM）占用</strong> ：</li></ol><ul><li>检查任务管理器中 <code>已提交</code> 的 <strong>现有内存</strong> 是否已经超过了你的 <code>内存条容量</code> ；</li><li><code>已提交的总内存</code> = <code>内存条容量</code> + <code>系统从磁盘中划分的虚拟内存</code> ，虚拟内存仅能做到不让游戏崩溃，由于磁盘 IO 传输速率与运行内存带宽差距较大，两者无法互相平替；</li><li>若已超过，此时你需要更换容量更大的内存条，或调整游戏内的光影包、资源包、模组包以减少内存占用。</li></ul><ol start="4"><li>特殊情况：</li></ol><ul><li>部分光影（如 BSL ）本身就难以使 GPU 达到满载，但由于其运算量少，也难以做到帧率低；</li><li><code>不要在一个区块停留过久</code> ，尤其是一些方块物品数量过多的基地，可能会消耗过多的 CPU 或别的部件性能，从而导致无法调用全部 GPU 渲染；</li><li>部分独立显卡会提供驱动或硬件开关调整其运行模式。将其改为游戏模式即可发挥显卡全部性能。</li></ul><h2 id="放入光影后在选择界面没有看见光影包" tabindex="-1"><a class="header-anchor" href="#放入光影后在选择界面没有看见光影包" aria-hidden="true">#</a> 放入光影后在选择界面没有看见光影包</h2><ul><li><p><strong>光影包可能出现损坏，需要重新下载</strong></p><ul><li>一些浏览器（如 Safari）默认不能正确处理压缩文件。你可以关闭 &quot;下载后打开安全文件&quot;（只适用于 Safari），或者使用不同的浏览器，如火狐或谷歌。</li></ul></li><li><p><strong>光影包需要解压</strong></p><ul><li>有些光影包甚至可能一开始就被<strong>错误地压缩</strong>了。在这种情况下，试着<strong>手动解压文件</strong>。解压后的光影文件夹结构应该是<code>.minecraft/shaderpacks/光影名/shaders/光影文件</code>。</li><li>如果你不知道你的 <code>.minecraft</code> 文件夹在哪里，请在设置里打开<code>资源包</code>，点击<code>资源包文件夹</code>，再在弹出的资源管理器的地址栏修改定向至 <code>.minecraft</code> 文件夹。</li></ul></li><li><p><strong>光影包被放置在错误的文件夹中</strong></p><ul><li>请检查你的光影包放置路径是否正确。</li></ul></li></ul><h2 id="开光影后没有效果" tabindex="-1"><a class="header-anchor" href="#开光影后没有效果" aria-hidden="true">#</a> 开光影后没有效果</h2>',13),v=o("p",null,[o("strong",null,"光影包读取出现问题")],-1),G=d("<li>尝试将光影包解压之后再加载。有时光影包可能被有问题的压缩，或者光影包文件中含有无法读取的中文名说明文件，导致光影在压缩包状态下无法被正常读取。</li><li>若使用的光影 API 是 <code>Iris</code> ，则应切换为其它光影如 <code>BSL</code> 、 <code>Complementary Shader</code> 等。该 API 本身就不兼容许多光影，也不适合作为大多数入门玩家的第一选择。</li><li>若同时伴随着左下角的<code>一大串报错</code>，同时在切换光影界面的底部看到显卡型号为 <code>Intel 核显</code> ，应前往显卡驱动面板，<strong>启用独立显卡运行 MC 。</strong> 不理解的可直接百度<code>如何启用独立显卡</code> 。</li>",3),b=o("code",null,"需要更新至 OptiFine Z1 版本",-1),M=o("strong",null,"远低于",-1),O=o("code",null,"1.16.5 G7 及以上",-1),P=o("code",null,"1.12.2",-1),R=d('<h2 id="java-版光影能否用-rtx-的光追核心来提供更好的实时光线追踪效果" tabindex="-1"><a class="header-anchor" href="#java-版光影能否用-rtx-的光追核心来提供更好的实时光线追踪效果" aria-hidden="true">#</a> Java 版光影能否用 RTX 的光追核心来提供更好的实时光线追踪效果？</h2><p><strong>可能可以，但不是现在：</strong></p><ul><li>目前 <code>Java 版 Minecraft 光影</code> 使用的 <strong>图形渲染引擎</strong> 为 <code>OpenGL</code>，</li><li>它没有相关的 API 接口，并不能通过 <code>调用光追核心</code> 来 <strong>提高光追效率</strong>。</li><li>但是，Java 版 的以下两个模组，分别是： <ul><li><code>VulkanMod</code>；</li><li><code>Sodium</code> 模组新开的 <code>Vulkan</code> 分支。</li></ul></li><li>这两个模组，能够将 MC 的 <strong>图形渲染引擎</strong> 替换为 <code>Vulkan</code>，理论上可实现调用硬件来加速光线追踪渲染。</li><li>但以项目的开发速度来看，想要在短时间内实现对光影的支持，希望非常渺茫。</li></ul><h2 id="我喜欢-a-光影的水和-b-光影的云。我可以把这两个包结合起来吗" tabindex="-1"><a class="header-anchor" href="#我喜欢-a-光影的水和-b-光影的云。我可以把这两个包结合起来吗" aria-hidden="true">#</a> 我喜欢 A 光影的水和 B 光影的云。我可以把这两个包结合起来吗？</h2><p><strong>通常情况下，不能：</strong></p><ul><li>在 <code>Minecraft Java 版光影包</code> 中没有 <strong>标准</strong> 的做事方式，</li><li>所以 <strong>不同</strong> 的光影包 <strong>可以（而且经常会）</strong> 以不同的方式实现相同的效果，或者使用相同的缓冲区来保存不同的信息。</li><li>因此，通过 <strong>简单的添加删除文件</strong> 去结合效果是 <strong>几乎不可能</strong> 的。</li><li>但如果你擅长 <code>GLSL</code>，你当然可以试一试。</li><li>你也可以询问你想组合光影包的开发者，他们的效果是 <strong>如何/在哪里</strong> 实现的，以及在这些地方有 <strong>哪些信息</strong>，这些问题对于结合光影效果是 <strong>有必要的</strong>。</li><li>但是，不要指望让开发者 <strong>无条件</strong> 帮你改光影，或者 <strong>教你</strong> <code>GLSL</code>，<strong>这不是他们的义务！</strong></li><li>如果你对学习 <code>GLSL</code> 不感兴趣，你也可以提出 <strong>付费</strong> 让他人为你制作 <code>组合光影包</code>。</li></ul><h2 id="optifine-能与-iris、sodium-一起运行吗" tabindex="-1"><a class="header-anchor" href="#optifine-能与-iris、sodium-一起运行吗" aria-hidden="true">#</a> <code>OptiFine</code> 能与 <code>Iris</code>、<code>Sodium</code> 一起运行吗？</h2><p><strong>不能</strong>。OptiFine 与 Iris 在功能上是重复的，两者互不兼容。而钠属于优化模组，只能兼容开源的 Iris，无法兼容 OptiFine。</p><h2 id="java-版-光影能否搭配-dlss-fsr" tabindex="-1"><a class="header-anchor" href="#java-版-光影能否搭配-dlss-fsr" aria-hidden="true">#</a> <code>Java 版</code> 光影能否搭配 <code>DLSS / FSR</code>？</h2><p><strong>理论上：</strong></p><ul><li>FSR 可以，</li><li>DLSS 技术未开放，无法搭配。</li><li>需要注意的是， <code>PTGI HRR 版本</code> 也使用了与此类似的技术，<code>HRR</code> 的功能也是 <strong>降低分辨率提升帧数</strong>，</li><li>这也是很多人为什么说 <code>HRR系列</code> 看起来比 <code>E12</code> <strong>糊</strong> 的原因。</li><li></li></ul><h2 id="光线追踪光影-与-传统光影-的最本质区别是什么" tabindex="-1"><a class="header-anchor" href="#光线追踪光影-与-传统光影-的最本质区别是什么" aria-hidden="true">#</a> <code>光线追踪光影</code> 与 <code>传统光影</code> 的最本质区别是什么？</h2><p><strong>是否使用了光追算法:</strong></p><ul><li><p>也就是说，无论你使用的 <code>GPU</code> 是谁家的，只要光影文件里存在光追算法，</p></li><li><p>那就属于 <code>光线追踪光影</code>，而 <strong>不取决于是否采</strong> 用 <code>RTX</code> 或 <code>RX6000</code> 系列显卡。</p></li></ul><h2 id="java版-的着色器叫-光影-基岩版-的着色器就只能叫-着色器-或-伪光影" tabindex="-1"><a class="header-anchor" href="#java版-的着色器叫-光影-基岩版-的着色器就只能叫-着色器-或-伪光影" aria-hidden="true">#</a> <code>Java版</code> 的着色器叫 <code>光影</code>，<code>基岩版</code> 的着色器就只能叫 <code>着色器</code> 或 <code>伪光影</code>？</h2><ul><li><p>从图形学上讲， <code>光影</code> 的<strong>专业名称</strong>就是 <code>着色器</code> ：</p></li><li><p>光影只是 <strong>国内的另一种好听的说法</strong> ，就像你可以把 <code>引力波</code> 称作 <code>时空涟漪</code>。</p></li><li><p>基岩版由于 <code>接口</code> <strong>先天的缺乏</strong> 以及 <strong>移动设备性能不足</strong>，无法像 Java 版一样做出 <code>效果相对完整</code> 的着色器，但它仍然叫做光影。</p></li><li><p>有一种说法是，<code>基岩版 PE 端</code> 光影没有实时阴影，不配叫光影。</p></li><li><p>然而 <code>光影</code> 二字，<strong>从来都不是</strong> 指代实时阴影，也 <strong>不会有任何</strong> 一位光影作者会提出 <code>没有实时阴影就不是光影</code> 这种观点！</p></li></ul><h2 id="基岩版的光影是贴图直接糊上去的" tabindex="-1"><a class="header-anchor" href="#基岩版的光影是贴图直接糊上去的" aria-hidden="true">#</a> 基岩版的光影是贴图直接糊上去的？</h2><ul><li><p>上文提到基岩版无法做出与 <code>Java 版</code> 一样的光影，缺陷相对多很多，但也并 <strong>没有简单到使用</strong> <code>图片粘贴</code> 等技术的地步。</p></li><li><p>着色器的 <strong>渲染</strong> 由 <strong>算法</strong> 完成，可以是 <strong>简单粗暴</strong> 的 <code>镜面反射场景</code>，但 <strong>不可能用贴图做到</strong>。</p></li><li><p>提出该观点的人大可拆开他们所谓的 <code>贴图光影 文件</code>，通过找到所有 <strong>疑似使用</strong> 该技术的图片来 <strong>佐证</strong> 他们的观点，否则只能是以下两种情况：</p><ul><li><p><strong>道听途说的错误说法；</strong></p></li><li><p><strong>将同样加载形式的 <code>纹理包</code> 与 <code>光影包</code> 混淆了。</strong></p></li></ul></li></ul><h2 id="基岩版-的一些有特殊效果的纹理包叫做-伪光影" tabindex="-1"><a class="header-anchor" href="#基岩版-的一些有特殊效果的纹理包叫做-伪光影" aria-hidden="true">#</a> <code>基岩版</code> 的一些有特殊效果的纹理包叫做 <code>伪光影</code> ？</h2><ul><li><p><code>着色器</code> 与 <code>纹理包</code> 是不同的概念。</p></li><li><p>作为纹理包，其能实现的主要功能即<strong>纹理的替换</strong>。</p></li><li><p>假若通过一些 <code>特殊手段</code>（如修改雾气）使其表现出<strong>如同被着色器渲染出的效果</strong>，最终结果也是极其的勉强。</p></li><li><p>而实际上，<code>着色器</code> 支持的功能远不止这些。要达到 <code>伪</code> 的级别，也应当将一个着色器能实现的<strong>大部分效果</strong>复现出来，包括<code>光照</code>、<code>阴影</code>、<code>大气</code>、<code>水波</code>等<strong>主要场景因素</strong>。</p></li><li><p>显然，想要在一个主要功能为 <code>替换贴图</code> 的纹理包去实现这些效果<strong>并不现实</strong>。</p></li></ul>',20);function F(I,j){const l=t("RouterLink");return r(),s("div",null,[g,o("ul",null,[h,u,p,o("li",null,[_,e("，请检查所用 Mod 是否有不兼容 OptiFine 的说明，包括但不限于： "),o("ul",null,[f,m,x,o("li",null,[e("如果出现该类问题，请前往 "),i(l,{to:"/answer_java/mods.html"},{default:c(()=>[e("进阶问题——模组兼容")]),_:1}),e(" 寻找可能的解决方式。")])])]),L]),S,o("ul",null,[o("li",null,[v,o("ul",null,[G,o("li",null,[e("若读取时提示"),b,e(" ，而 OptiFine 已发布的最新版本号"),M,e("该版本时，意味着这个光影可能只支持 "),O,e("的 OptiFine。如果目前使用的是 "),P,e(" 客户端，可以尝试通过添加 "),i(l,{to:"/answer_java/science/shaders-base.html"},{default:c(()=>[e("AdvancedShader")]),_:1}),e(" 模组来解决问题。")])])])]),R])}const U=n(a,[["render",F],["__file","shader.html.vue"]]);export{U as default};
