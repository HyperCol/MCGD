import{_ as s,r as t,o as d,c,a as o,b as e,d as l,f as g,w as a,e as r}from"./app-e394452e.js";const u={},h=o("h1",{id:"术语表",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#术语表","aria-hidden":"true"},"#"),e(" 术语表")],-1),p=o("p",null,"这篇文章列出了整个文档中可能会出现的术语，这些术语或常见或罕见，我们会尽可能多地收录。 在遇到不能理解的专有名词时，可以到此文章中进行查阅。",-1),S={href:"https://github.com/HyperCol/MGCD/issues",target:"_blank",rel:"noopener noreferrer"},m=r('<h2 id="游戏相关" tabindex="-1"><a class="header-anchor" href="#游戏相关" aria-hidden="true">#</a> 游戏相关</h2><ul><li><strong>JE</strong>：Minecraft Java Edition，即 Java 版游戏，在本文档中，也可以表示只能在<strong>Java版的光影模组</strong>下运行。</li><li><strong>BE</strong>：Minecraft Bedrock Edition，即基岩版游戏。 <ul><li>这里面也包含了原本的 <strong>PE</strong> ，即 Pocket Edition 版本。</li></ul></li></ul><p><strong>自此开始无特殊说明的名词均以JE为准。</strong></p><h3 id="各种文件包体" tabindex="-1"><a class="header-anchor" href="#各种文件包体" aria-hidden="true">#</a> 各种文件包体</h3>',4),E=o("strong",null,"资源包",-1),L=r('<li><strong>光影包</strong>：Shader Pack，亦称光影，由一个或数个 <a href="#%E5%9B%BE%E5%BD%A2%E5%9F%BA%E7%A1%80">着色器</a> 组成的一套流水线工程，用以计算每个像素的颜色。</li><li><strong>整合包</strong>：Modpack，由多个模组整合而成的文件包。 <ul><li>国内的整合包通常是<strong>懒人包</strong>，即：将游戏本体、启动器、模组以及其他配置和资源文件打包，玩家解压之后即可启动游玩。</li><li>国外标准的整合包是 <code>MultiMC</code> 格式，这种整合包只包含了需要调用的模组的信息，顾名思义，其由 <code>MultiMC</code> 启动器发起建立，是如今很多启动器都支持的格式，在启动器上<strong>在线安装</strong>好后即可启动，这通常需要<strong>正版</strong>账户，由启动器在下载安装API、MOD和外围资源时同时下载游戏本体和资源库。 <ul><li>国内的启动器如 <code>HMCL</code> 、 <code>PCL 2</code> 、 <code>BakaXL</code> 等启动器也均跟进支持了此格式。</li><li>此外，国内论坛 <code>MCBBS</code> 还提供了自己的整合包格式。</li></ul></li></ul></li><li><strong>模组和模组接口</strong>：MOD 和 MOD API，模组接口也称<strong>模组加载器</strong>，由<strong>第三方提供</strong>的接口在原版游戏基础上运行<strong>由玩家编写的扩展内容</strong>，目前主流的接口有 <code>Forge</code> 和 <code>Fabric</code> ，此外还有 <code>Fabric</code> 的分支版本 <code>Quilt</code> 以及自 <code>JE 1.12.2</code> 停止更新的 <code>LiteLoader</code> 。 <ul><li>早期的模组由于没有加载器，需要将文件全部<strong>覆盖</strong>入游戏<strong>源文件</strong>，因此如果出现两个模组同时需要覆盖同一文件时，这两个模组的兼容性就崩塌了。加载器的出现<strong>缓解</strong>了这一问题。</li></ul></li><li><strong>数据包</strong>：Datapack，<code>JE 1.13</code> 加入的<strong>由官方支持</strong>的可以修改<strong>世界内数据</strong>的文件包，自 <code>JE 1.16-pre1</code> 起可以在创建世界之前加载数据包。</li>',4),b=r('<h3 id="渲染模组和引擎" tabindex="-1"><a class="header-anchor" href="#渲染模组和引擎" aria-hidden="true">#</a> 渲染模组和引擎</h3><ul><li><p><strong>Blaze3D</strong><sup>JE</sup>：JE 现用的渲染引擎。</p></li><li><p><strong>Render Dragon</strong><sup>BE</sup>：渲染龙，臭名昭著的 BE 现用的渲染引擎。</p><ul><li>它的名字引用了游戏中末地的Boss <code>Ender Dragon</code>（末影龙）的名字。</li></ul></li><li><p><strong>GLSL Shader Core</strong>：光影核心模组，<strong>最早</strong>的JE光影模组。</p><ul><li>在 <code>OptiFine</code> 集成后其更新频率明显下降，不再提供新功能支持。</li><li>作为一个用于运行老旧光影的备选项，Shader Core 已于 <code>JE 1.12.2</code> 停止更新。</li></ul></li><li><p><strong>OptiFine</strong>：高清修复，<strong>简称 OF</strong>，老牌JE优化模组。作者为 <strong>sp614x</strong> 。</p><ul><li>最早是提供更大纹理分辨率支持的模组，这也是中文名被翻译为高清修复的原因。</li><li>在 <code>JE 1.8</code> 之后集成了 <code>GLSL Shader Core</code> ，开始提供光影支持。</li><li>在某一版本中整合了动态光源模组，让世界中所有的光源都可用于照明。</li></ul></li><li><p><strong>Sodium</strong><sup>Fabric</sup>：意为“钠”，伴随 <code>Fabric</code> 出现的新兴优化模组，旨在优化 <code>JE 1.14</code> 后的游戏性能。</p><ul><li>伴随钠而出现的许多优化模组开始仿效其使用化学元素来命名模组，被玩家们称为元素周期表/全家桶。</li></ul></li><li><p><strong>Iris</strong><sup>Fabric</sup>：伴随 <code>Fabric</code> 出现的新兴光影模组。由于 <code>OptiFine</code> 闭源导致很多<strong>模组无法兼容</strong>，而很多玩家想要在整合包中运行光影，Iris 由此而生。</p><ul><li>如今 Iris 已经在着手支持独占功能，并且与 <code>Sodium</code> 深度绑定，然而 <code>Sodium</code> 本身的兼容性并不好，通常需要依靠额外的模组如 <code>Indium</code>（铟）来确保其兼容性。</li></ul></li><li><p><strong>Oculus</strong><sup>Forge</sup>：<code>Iris</code> 的 <code>Forge</code> 分支，旨在提供与 <code>Iris</code> 一样的模组兼容性。</p></li><li><p><strong>Canvas</strong><sup>Fabric</sup>：另一新兴渲染模组，完全独立于 <code>OptiFine</code> 之外，通过 <code>资源包</code> 进行加载。具有<strong>极强的兼容性</strong>和更多特性。</p></li><li><p><strong>Blaze4D</strong><sup>Fabric</sup>：使用 <code>Vulkan</code> 的实验性渲染引擎。</p><ul><li>与 <code>OptiFine</code> 或 <code>Sodium</code> 不同，它的目的不是优化，但是也包含了一定的性能改进。 <ul><li>其唯一真正制作的优化工作是 <code>baked-entity-models</code> （烘焙实体模型），并将其提交给了 <code>Sodium</code> 以供所有人使用。</li></ul></li><li>未来将允许开发者将 <code>DLSS</code> 或 <code>FSR</code> 乃至 <code>硬件加速光线追踪</code> 引入到光影开发中，但是目前来说仍旧遥遥无期。</li><li>它的名字引用了目前 JE 所使用的渲染引擎 <code>Blaze3D</code> 。</li></ul></li><li><p><strong>Focal Engine</strong><sup>Forge / Fabric</sup>：由<strong>Continuum团队</strong>研发的渲染模组。</p><ul><li>目前是 <code>OptiFine</code> 的增强模组，主要用于他们自己的光影包 <code>Continuum</code> 的代码支持、加密和联网验证，同时支持 <code>Stratum</code> 的安装。</li><li>更长远的目标是独立于 <code>OptiFine</code> 在 <code>Vulkan</code> 上实现光影渲染，给其他作者提供加密和联网验证及其他支持，并引入 <code>硬件加速光线追踪</code> 。</li><li>它有一个前身名为 <code>Nova Render</code> ，但是由于核心开发人员的离开，这个MOD独立了出来，但是很快没了下文。</li></ul></li><li><p><strong>Advanced Shader</strong>：是一个 <code>OptiFine</code> 辅助模组，旨在 <code>JE 1.12.2</code> 兼容更高版本的光影。</p></li></ul><h2 id="计算机相关" tabindex="-1"><a class="header-anchor" href="#计算机相关" aria-hidden="true">#</a> 计算机相关</h2><h3 id="计算机基础" tabindex="-1"><a class="header-anchor" href="#计算机基础" aria-hidden="true">#</a> 计算机基础</h3><ul><li><strong>像素</strong>：Pixel，二维位图的<strong>最小显示</strong>单位。 <ul><li>在实际渲染或计算中，有<strong>子像素</strong>（Sub-Pixel）的概念，因此像素仅为位图的最小显示单位。</li></ul></li><li><strong>体素</strong>：Voxel，对应像素的定义，作为一种三维图形的表示方法，在此类空间中定义的三维图像，体素是<strong>最小坐标</strong>单位。</li><li><strong>位图</strong>：也称标量图，最小单位为像素的图像。计算机中存储的图片<strong>大多是位图</strong>，如 <code>.jpg</code> 、 <code>.png</code> 、 <code>.bmp</code> 等。</li><li><strong>矢量图</strong>：由<strong>顶点</strong>位置和连接顶点的<strong>线段</strong>信息所组成的图像。<code>.svg</code> 就是其中一种矢量图格式。</li><li><strong>颜色通道</strong>：在 <code>RGBA模式</code> 下由 <code>R</code> 、 <code>G</code> 、 <code>B</code> 、 <code>A</code> 四个通道构成<strong>光学三原色</strong>和<strong>不透明度</strong>。在没有特别注释的情况下，我们仅讨论 <code>RGBA</code> 情况。 <ul><li><code>R</code> ：Red，红色通道。</li><li><code>G</code> ：Green，绿色通道。</li><li><code>B</code> ：Blue，蓝色通道。</li><li><code>A</code> ：Alpha，希腊首字母α，在计算机图形中表示不透明度通道。</li></ul></li><li><strong>数据类型</strong>：在许多语言中，我们都需要在定义一个变量的时候同时定义它的数据类型。如 <code>int a;</code> 此时前面的 <code>int</code> 就是变量 <code>a</code> 的数据类型，这决定了计算机如何处理它们。 <ul><li>这里列出了一些<strong>C语言</strong> <em>（不包含扩展）</em> 中常见的数据类型。 <ul><li><code>int</code> ：整数。</li><li><code>float</code> ：浮点数，计算机中可以表示小数的类型。</li><li><code>char</code> ：单个字符。</li></ul></li></ul></li><li><strong>数组</strong>：许多数据的集合。通常在数据类型后加 <code>[N]</code> 来定义。<code>[]</code>的数量代表了数组的维度 例：<code>int[2]</code> 。</li><li><strong><code>代码块内容</code> 的阅读方法</strong>: <ul><li><code>&lt;尖括号&gt;</code> ：由尖括号括起来的内容表示在这个区域内应该填写的内容。例：<code>&lt;文件名&gt;.jpg</code> ，其中 <code>&lt;文件名&gt;</code> 部分可以使用任意<strong>符合尖括号内定义</strong>的内容替换，例：<code>图片.jpg</code> 。 <ul><li>在替换时应当将尖括号<strong>一同替换</strong>。</li></ul></li><li><code>[方括号]</code> ：由方括号括起来的内容通常是一个可填的<strong>数字</strong>，可能会使用字母代替，例：<code>vec[N]</code> 可以替换为 <code>vec3</code> 。 <ul><li>在数组中，方括号不需要被一同替换，因为在数组之前的<strong>数据类型</strong>已经<strong>完整</strong>了，例：<code>float[a][b]</code> 可以替换为 <code>float[1][3]</code> 。</li></ul></li><li><code>函数()</code> ：函数分为原型和调用两种情况。 <ul><li>当函数内<strong>参数</strong>含有 <code>数据类型</code> 时，表示这是这个函数的<strong>原型</strong>。例：<code>max(&lt;numA&gt;, &lt;numB&gt;)</code> 。</li><li>当函数内<strong>参数</strong>含有 <code>尖括号</code> 时，表示我们<strong>调用函数</strong>时应该在这个函数内填何种参数。例：<code>floor(float num)</code> 。 <ul><li>有些函数有<strong>多个</strong>可以传入的<strong>数据类型</strong>，此时会在数据类型处使用 <code>尖括号</code> ，这种情况下仍然表示为函数的原型。例： <code>min(&lt;int/float&gt; numA, &lt;int/float&gt; numB)</code> 。</li></ul></li></ul></li></ul></li><li><strong>程序接口</strong>：即API，程序接口提供了特定的算法，用以调用和修改该程序。 <ul><li>具象化来说，这就好比给手机（游戏本体）扩展存储（想要达到的光影效果），需要 SD 卡（算法），并且手机需要有 SD 卡槽（接口）才能插入。</li></ul></li></ul><h3 id="数学基础" tabindex="-1"><a class="header-anchor" href="#数学基础" aria-hidden="true">#</a> 数学基础</h3><ul><li><strong>标量</strong>：也称数量，一个<strong>数字</strong>就是一个标量。</li><li><strong>向量</strong>：也称矢量，在标量的基础上还有<strong>方向</strong>。 <ul><li><strong>模长</strong>：向量的长度称为模长。</li><li><strong>单位向量</strong>：模长为1的向量。</li><li>在 <code>GLSL</code> 中，我们使用形如 <code>vec3(1.0, 0.2, 3.5)</code> 的方式来表示三维向量。</li></ul></li><li><strong>点乘</strong>：<strong>两个向量</strong>运算为一个标量，我们使用形如 <code>dot(&lt;vectorA&gt;, &lt;vectorB&gt;)</code> 来表示点乘。</li><li><strong>向量/矩阵乘法</strong>：也称左乘，向量和矩阵之间的<strong>有序乘法</strong>。得出的值的类型与<strong>最右侧</strong>的值相同。左乘所使用的符号与<strong>标量的普通乘法一致</strong>。 <ul><li>左乘的参数存在一些限制，不过这里不做深入。</li></ul></li><li><strong>单位化</strong>：将一个<strong>非零向量</strong>转换为<strong>单位向量</strong>，我们使用形如 <code>normalize(&lt;vector&gt;)</code> 来表示单位化。</li><li><strong>长度</strong>：计算向量的<strong>模长</strong>，我们使用形如 <code>length(&lt;vector&gt;)</code> 来表示获取长度。</li></ul><h3 id="图形学-3d" tabindex="-1"><a class="header-anchor" href="#图形学-3d" aria-hidden="true">#</a> 图形学（3D）</h3><h4 id="图形基础" tabindex="-1"><a class="header-anchor" href="#图形基础" aria-hidden="true">#</a> 图形基础</h4><ul><li><strong>着色器</strong>：Shader，光影中包含一个或数个着色器，在渲染中，每个<strong>像素或顶点</strong>会运算都会运算<strong>所有</strong>的片段着色器 (Fragment Shader) 或顶点着色器 (Vertex Shader) 代码。 <ul><li>除此之外，还有计算着色器 (Compute Shader)、几何着色器 (Geometry Shader)，它们主要用以抽象计算和顶点生成。</li></ul></li><li><strong>渲染管线</strong>：Rendering Pipeline，用以规定每个着色器处理画面的顺序。</li><li><strong>三角形和法线</strong>：Normal，除了前文所述的体素，图形学中还有一种<strong>对应矢量</strong>的渲染方法。 <ul><li>这种方法在渲染中更常用，其依赖于<strong>三角形</strong>或四边形（四边形在现代不常用）。</li><li>在计算机图形学中，三角形的三个顶点以<strong>逆时针</strong>顺序所形成的平面就是这个形状的<strong>正面</strong>（约定俗成） <ul><li><strong>垂直</strong>于这个面<strong>朝外</strong>的方向就是这个三角形的<strong>法线</strong>。</li></ul></li></ul></li><li><strong>平行光源</strong>：也称无限光。距离玩家<strong>无穷远</strong>处的光源。 <ul><li>太阳和月亮的光照可以近似看作平行光。</li></ul></li><li><strong>点光源</strong>：从自身向所有方向发射光照的光源。 <ul><li>在MC中不存在严格意义上的点光源，但是 <code>OptiFine</code> 提供的<strong>动态光源</strong>和一些光影提供的<strong>手持光源</strong>可以被认为是点光源。</li></ul></li></ul><h4 id="opengl相关" tabindex="-1"><a class="header-anchor" href="#opengl相关" aria-hidden="true">#</a> OpenGL相关</h4><ul><li><strong>OpenGL</strong>：Open Graphics Library，<strong>开源图形库</strong>，JE所使用的<strong>图形接口</strong>。 <ul><li><strong>GLSL</strong>：(Open) GL Shader Language，<strong>OpenGL着色语言</strong>，顾名思义，它是 <code>OpenGL</code> 的着色器语言。</li><li>其它的图形接口还有如 <code>Vulkan</code> ，它的着色器语言也是 <code>GLSL</code> ； <code>DirectX</code> ，它的着色器语言是<code>HLSL</code>(High-Level Shader Language)。</li></ul></li><li><strong>GLSL类型</strong>：这里列出了常用的GLSL数据类型 <ul><li><code>int</code> <code>float</code> ：与 <a href="#%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80">上方</a> 一致。</li><li><code>bool</code> ：布尔值，可以为 <code>true</code>(<code>1</code>) 或 <code>false</code>(<code>0</code>)。</li><li><code>vec[N]</code> ：浮点向量，N可以为 <code>[1, 4]</code> 的整数，表示该向量的维度。 <ul><li><code>ivec[N]</code> 为整数向量，<code>bvec[N]</code> 为布尔值向量。</li><li>例：<code>vec3</code> 。</li></ul></li><li><code>mat[N]</code> <code>mat[N]x[M]</code> ：浮点矩阵，N、M可以为 <code>[2, 4]</code> 的整数，表示该矩阵的大小。 <ul><li><code>mat[N]</code> 表示 <code>N * N</code> 大小的矩阵，<code>mat[N]x[M]</code> 表示 <code>N * M</code> 大小的矩阵。</li><li>例：<code>mat3</code> ，<code>mat2x4</code> 。</li></ul></li><li><code>sampler[N]D</code> ：样本，可以通过纹理采样函数来获取样本的信息，N可以为 <code>[1, 3]</code> ，表示该样本的维度。 <ul><li><code>samplerCube</code> ：六面包围盒式的样本。</li><li>例：<code>sampler2D</code> 。</li></ul></li></ul></li><li><strong>GLSL函数</strong>：这里列出了一些常用的GLSL函数 <ul><li><code>texture[N]D(sampler[N]D texture, vec[N] texcoord)</code> ：纹理采样函数 <ol><li>与函数维度相等的样本，通常是 <code>纹理</code> 。</li><li>与函数维度相等的向量，通常是 <code>纹理坐标</code> 。</li></ol><ul><li>N的范围与样本一致。</li></ul></li></ul></li></ul><h4 id="贴图相关" tabindex="-1"><a class="header-anchor" href="#贴图相关" aria-hidden="true">#</a> 贴图相关</h4><ul><li><strong>灰度图</strong>：仅由黑白灰组成的图片。</li><li><strong>深度图</strong>：Depth Map，表观为灰度图，每个像素的亮度说明了该处与摄像机之间的距离。</li><li><strong>阴影贴图</strong>：Shadow Map，其运作原理大致如下： <ol><li>从<strong>光源视角</strong>绘制深度图并<strong>投射到玩家视角</strong>的整个场景作为距光源<strong>最近距离</strong>；</li></ol><ul><li>这里所说的最近距离是指<strong>该点与光源连线</strong>上从光源出发，最近可以遇到的物体。</li></ul><ol start="2"><li>将其与玩家视角里每个像素<strong>实际到光源的距离</strong>做比较；</li><li>如果实际距离比最近距离更大，就是阴影。</li></ol><ul><li>由于其算法特性，<strong>精度</strong>与<strong>贴图大小</strong>直接挂钩，同时会<strong>大幅影响性能</strong>。</li></ul></li><li><strong>法线贴图</strong>：Normal Map，偏移物体表面的朝向，这样就可以影响每个纹理像素的光照强度，从而产生<strong>额外的表面细节</strong>。 <ul><li>在计算机渲染中，我们通常使用法线信息与光源方向做<strong>点乘</strong> <code>dot(lightDir, Normal)</code> 来获得该像素的亮度，法线贴图在此时的作用就是偏移了前式中 <code>Normal</code> 这个量。所以实际上法线<strong>并没有真正偏移</strong>表面，而只是让该纹理像素的信息被改写。</li></ul></li></ul><h4 id="渲染技术相关" tabindex="-1"><a class="header-anchor" href="#渲染技术相关" aria-hidden="true">#</a> 渲染技术相关</h4><ul><li><strong>POM</strong>：Parallax Occlusion Mapping，即视差遮蔽映射，简称<strong>视差</strong>。和法线相似，视差贴图通过偏移表面的<strong>深度</strong>来创造原本不存在的凹凸感。 <ul><li>视差也<strong>并没有真正扭曲</strong>表面，只是让玩家从<strong>不同角度</strong>感受到纹理上某些像素被其他像素<strong>遮挡</strong>，从而创造凹凸的观感，这也是其名字中“映射”的含义。</li></ul></li><li><strong>PBR</strong>：Physically-Based Rendering，即<strong>基于物理的渲染</strong>。 <ul><li>它是一种着色和渲染的方法，更<strong>准确</strong>地表现<strong>光线</strong>如何与<strong>材料性质</strong>相互作用。</li><li>它有一些传统着色中没有考虑到的部分，如<strong>能量守恒</strong>、<strong>光电效应</strong>等。</li></ul></li><li><strong>GI</strong>：Global Illumination，即<strong>全局光照</strong>。是直接光照和间接光照的集合。 <ul><li><strong>直接光照</strong>：由光源发射的光照。在<strong>OptiFine光影</strong>中，直接光照的光源<strong>有且仅有</strong>太阳和月亮。 <ul><li>我们把<strong>可以投射阴影贴图</strong>的光源称为直接光源。</li><li>更准确地说是太阳和月亮的<strong>方向</strong>。</li><li>Iris提供了一个新光影特性，让<strong>手持光源</strong>可以投射阴影贴图，因此手持光源也可以算作一个直接光源。</li></ul></li><li><strong>间接光照</strong>：直接光照经过反弹所照亮的不能被光源直接照射到的地方。</li></ul></li><li><strong>AO</strong>：Ambient Occlusion，即<strong>环境光遮蔽</strong>。由于性能问题，很多游戏中通常使用了各种<strong>欺诈和近似</strong>来模拟全局光照。为了让<strong>原本应该</strong>或者<strong>似乎应该</strong>为暗处的地方暗下去而产生的技术。</li><li><strong>SSS</strong>：此简写包含以下两种概念 <ul><li><strong>次表面散射</strong>：Sub-surface Scattering，模拟光线透过物体在其内部反射后射出的效果。 <ul><li><strong>散射</strong>是漫反射、镜面反射、次表面散射的集合。</li><li><strong>折射</strong>是散射的一个<strong>特解</strong>。</li></ul></li><li><strong>屏幕空间阴影</strong>：Screen-space Shadow，由于阴影贴图的<strong>精度不足</strong>，容易在物体与地面接触的边缘产生<strong>锯齿和偏移</strong>。屏幕空间阴影就是用于这些地方来<strong>补足</strong>阴影的效果，因此也称为<strong>接触阴影</strong> (Contact Shadow)。</li></ul></li></ul><h5 id="抗锯齿-升采样技术相关" tabindex="-1"><a class="header-anchor" href="#抗锯齿-升采样技术相关" aria-hidden="true">#</a> 抗锯齿/升采样技术相关</h5><ul><li><strong>DLSS</strong>：由 <code>nVidia</code> 开发的一种升采样技术。通过降低分辨率并调用其 <code>张量核心</code>(Tensor Core) 来猜测原始分辨率下该处像素的内容。 <ul><li>在 <code>2.0</code> 以前，DLSS主要是靠已有画面内容来“猜”剩下的场景应该是何样</li><li>自 <code>2.0</code> 开始，DLSS主要是根据场景动态变化和 <strong>历史帧</strong> 来判断剩下的场景是何样，其从单一空间上升到了 <code>时域</code> 。</li><li><strong>DLAA</strong>：在原始分辨率下进行 DLSS 来平滑边缘的抗锯齿方法。</li></ul></li><li><strong>FSR</strong>：由 <code>AMD</code> 开发的一种升采样技术。相比较 <code>DLSS</code> 来说更为常规，但效果要比其他传统升采样方法好。</li><li><strong>XeSS</strong>：由 <code>Intel</code> 开发的一种升采样技术。在其他平台上和其本家含有特定核心的平台上所使用的算法有所区别，因而在其本家平台上能够获得更好的效果。</li></ul>',18);function f(B,x){const n=t("ExternalLinkIcon"),i=t("RouterLink");return d(),c("div",null,[h,p,o("p",null,[e("如果你有更多想要提供的术语，或者发现了术语中的疏漏，可以在 "),o("a",S,[e("GitHub"),l(n)]),e(" 上为我们提交建议。")]),g("To 其他文档编辑：如果你们有想要添加的术语，请添加到对应的板块，并在行前使用注释进行标记，我会在之后进行行文风格的统一。--亚克留"),m,o("ul",null,[o("li",null,[E,e("：Resource Pack，即通俗所说的材质包，详见："),l(i,{to:"/science/resourcepacks_compatibility.html#%E5%85%B3%E4%BA%8E%E8%B5%84%E6%BA%90%E5%8C%85%E7%BA%B9%E7%90%86%E5%8C%85%E5%92%8C%E6%9D%90%E8%B4%A8%E5%8C%85"},{default:a(()=>[e("资源包相关")]),_:1}),e(" 。")]),L]),b])}const D=s(u,[["render",f],["__file","terms.html.vue"]]);export{D as default};
