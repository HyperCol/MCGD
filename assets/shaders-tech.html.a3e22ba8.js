import{_ as n,r as i,o as s,c as p,a,b as e,d as r,e as o}from"./app.3bc2441d.js";const c={},l=o(`<h1 id="着色器技术科普" tabindex="-1"><a class="header-anchor" href="#着色器技术科普" aria-hidden="true">#</a> 着色器技术科普</h1><h2 id="一、光线追踪、路径追踪与-rtx" tabindex="-1"><a class="header-anchor" href="#一、光线追踪、路径追踪与-rtx" aria-hidden="true">#</a> 一、光线追踪、路径追踪与 RTX</h2><h3 id="_1-3-1-前言-传统渲染的局限性" tabindex="-1"><a class="header-anchor" href="#_1-3-1-前言-传统渲染的局限性" aria-hidden="true">#</a> 1.3.1 前言：传统渲染的局限性</h3><p>受限于计算机性能，早期游戏所渲染的画面都是二维的。所以我们平常看到的传统游戏的光照与反射等效果，都是在<strong>屏幕内计算</strong>的，只能看到屏幕内物体的反射与光线计算。但这样效果就太差了，于是我们可以利用<strong>光栅化渲染</strong>去<strong>预烘焙</strong>游戏世界，使得光线可以与预先写入程序的物体交互并返回到屏幕内，<strong>简单说就是游戏里各种光线反射都是程序员预先写好的，比如房间里有面镜子，程序员就要告诉它这个房间里有什么内容（预先写好的），然后镜子再计算反射</strong>。但这种方式<strong>局限性太大</strong>，预烘焙<strong>制作成本极高</strong>（一个完美的小场景远景预烘焙就需要数十小时），而且<strong>不适用于大多动态场景</strong>（例如 Minecraft ，受限于自由创造的游戏玩法，基本无法进行预烘焙）。于是<strong>基于三维空间实时渲染</strong>的光线追踪便进入了各大厂商的视野。然而，由于硬件性能不足，早期光追仅用于<strong>离线渲染</strong>（电影、CG等行业），直到 RTX 显卡为我们带来<strong>光线追踪加速核心</strong>后光线追踪才进入大众视野，应用到游戏中的<strong>实时渲染</strong>（ Minecraft 可以使用特殊手段来进行加速和降噪，故不算，下文会提到）。</p><h3 id="_1-3-2-光线追踪的概念" tabindex="-1"><a class="header-anchor" href="#_1-3-2-光线追踪的概念" aria-hidden="true">#</a> 1.3.2 光线追踪的概念</h3><pre><code>  **光线追踪在1968年由 Arthur Appel 首次提出**。在上一段中我们讲到，传统渲染是基于二维的，尽管可以预烘焙三维世界，但局限和破绽仍然很大。因此，光线追踪的目的即为直接运算得出三维图像。
    目前光线追踪算法均基于**构建体素空间**，即将游戏内的内容导入三维空间进行渲染，可分为切割立方体（基本是Minecraft专用）与切割三角面两种方式。
    目前光线追踪的方式可分为两大类，**正向光线追踪**与**逆向光线追踪**。
</code></pre><p><strong>正向光线追踪</strong>：在渲染时，场景中的光源会发射光线，光线在行进过程中与物体发生反射、折射等交互，最终撞击到摄像机（玩家视角）上，得出结果。 但这种方法过于消耗算力，而且物理学告诉我们<strong>光路可逆，<strong>于是游戏界光追采用了</strong>逆向光线追踪</strong>，即将上述过程反向，<strong>从玩家视角出发发射光源</strong>，并计算在这过程中的光线交互，最终撞击到光源或光线逸出场景后将结果返回给摄像机（玩家视角），我们将这个过程称为<strong>求交</strong>运算。</p><h3 id="_1-3-3-何为路径追踪" tabindex="-1"><a class="header-anchor" href="#_1-3-3-何为路径追踪" aria-hidden="true">#</a> 1.3.3 何为路径追踪</h3><p>路径追踪算法是基于<strong>蒙特卡洛采样算法</strong>的光线渲染方法，<strong>其核心思想与逆向光线追踪一致</strong>。 <strong>Kajiya 于1986年提出了路径追踪算法的理念</strong>，开创了基于蒙特卡洛采样算法的全局光照这一领域。路径追踪的基本思想是经过逆向光线追踪的一系列计算，撞击到光源后，用蒙特卡洛的方法，计算其贡献，作为像素的颜色值。 <strong>简单来说，路径追踪 = 光线追踪+ 蒙特卡洛采样算法</strong>。</p><h3 id="_1-3-4-光线追踪在-minecraft-中的应用" tabindex="-1"><a class="header-anchor" href="#_1-3-4-光线追踪在-minecraft-中的应用" aria-hidden="true">#</a> 1.3.4 光线追踪在 Minecraft 中的应用</h3>`,10),d=a("strong",null,"Minecraft：Java Edition",-1),g=a("strong",null,"使用路径追踪",-1),m=a("strong",null,"ShadowMap",-1),h=a("strong",null,"体素空间",-1),u=a("strong",null,"辐照度缓存",-1),_=a("strong",null,"SVGF过滤",-1),b={href:"https://www.bilibili.com/video/BV1X54y1v7za?zw",target:"_blank",rel:"noopener noreferrer"},f=o(`<ul><li>完全物理的光线追踪阴影和衔接阴影、光线追踪全局光照<img src="https://cdn.nlark.com/yuque/0/2022/png/25462013/1645539665399-a2d879b8-bccc-45fd-b735-019177c026f9.png#averageHue=%23008d00&amp;clientId=u44f12535-e88c-4&amp;crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;errorMessage=unknown error&amp;from=ui&amp;id=u9bbd05d8&amp;margin=[object Object]&amp;name=2022-02-22_21.35.16.png&amp;originHeight=1080&amp;originWidth=1920&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=true&amp;size=3700045&amp;status=error&amp;style=shadow&amp;taskId=u01023e91-b492-4d3f-82a4-7455d8da296&amp;title=Octray" alt="2022-02-22_21.35.16.png" title="Octray"><img src="https://cdn.nlark.com/yuque/0/2022/png/25462013/1645539678668-5e19f545-61ac-4e68-ae09-aa1de854747b.png#averageHue=%230c5991&amp;clientId=u44f12535-e88c-4&amp;crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;errorMessage=unknown error&amp;from=ui&amp;id=u47550d63&amp;margin=[object Object]&amp;name=2022-02-22_21.37.22.png&amp;originHeight=1080&amp;originWidth=1920&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=true&amp;size=1804879&amp;status=error&amp;style=shadow&amp;taskId=uf5a3c95c-8947-4cd8-b69f-0ecbd137f46&amp;title=传统光影" alt="2022-02-22_21.37.22.png" title="传统光影"></li><li>光源被阻挡形成的软阴影、正确的光照范围、光线在不同介质中的色散、不同光源不同颜色发光、光线混色<img src="https://cdn.nlark.com/yuque/0/2022/png/25462013/1645539852349-1208cb8d-41f5-4aae-a715-abcea00e79a1.png#averageHue=%231d152b&amp;clientId=u44f12535-e88c-4&amp;crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;errorMessage=unknown error&amp;from=ui&amp;id=u9adb4a5a&amp;margin=[object Object]&amp;name=2022-02-22_21.50.10.png&amp;originHeight=1080&amp;originWidth=1920&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=true&amp;size=3473181&amp;status=error&amp;style=shadow&amp;taskId=u841373c3-75e2-43c2-88c4-d7262c49efd&amp;title=SEUS PTGI GFME" alt="2022-02-22_21.50.10.png" title="SEUS PTGI GFME"><img src="https://cdn.nlark.com/yuque/0/2022/png/25462013/1645539903973-1e347288-6ca8-4ffa-b388-c13bd8b88f6e.png#averageHue=%23ab9272&amp;clientId=u44f12535-e88c-4&amp;crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;errorMessage=unknown error&amp;from=ui&amp;id=u4fad21dc&amp;margin=[object Object]&amp;name=2022-02-22_21.51.41.png&amp;originHeight=1080&amp;originWidth=1920&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=true&amp;size=2201183&amp;status=error&amp;style=none&amp;taskId=u118bed89-f210-42f1-b2f6-26e2ade0e49&amp;title=传统光影" alt="2022-02-22_21.51.41.png" title="传统光影"></li><li>可以反射/折射视野外的物体、多次反射/折射、真实的粗糙与金属质感<img src="https://cdn.nlark.com/yuque/0/2022/png/25462013/1666795467177-d2d83a0b-3a9f-45e8-946f-8326bf34f373.png#averageHue=%234c2d0e&amp;clientId=u2833c759-124f-4&amp;crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;from=ui&amp;id=u7725a101&amp;margin=[object Object]&amp;name=2022-10-26_22.39.04.png&amp;originHeight=1080&amp;originWidth=1920&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=true&amp;size=4509001&amp;status=done&amp;style=shadow&amp;taskId=u6d58c369-8175-4664-8228-065a7ec766b&amp;title=Kappa PT" alt="2022-10-26_22.39.04.png" title="Kappa PT"><img src="https://cdn.nlark.com/yuque/0/2022/png/25462013/1666795483594-8fa82b7e-cb0d-4651-955f-8cc22274ff8f.png#averageHue=%23472b0b&amp;clientId=u2833c759-124f-4&amp;crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;from=ui&amp;id=u65e4cc16&amp;margin=[object Object]&amp;name=2022-10-26_22.40.13.png&amp;originHeight=1080&amp;originWidth=1920&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=true&amp;size=5025902&amp;status=done&amp;style=shadow&amp;taskId=u4ef62f2a-2843-4048-83db-48a7f898b52&amp;title=传统光影" alt="2022-10-26_22.40.13.png" title="传统光影"></li></ul><h3 id="_1-3-5-rtx-与光线追踪的联系、-伪光追" tabindex="-1"><a class="header-anchor" href="#_1-3-5-rtx-与光线追踪的联系、-伪光追" aria-hidden="true">#</a> 1.3.5 RTX 与光线追踪的联系、“伪光追”</h3><pre><code>    本段主要谈论 RTX 光追原理与伪光追。在阅读本段之前我们建议你先查看以下内容进行简单了解。
</code></pre>`,3),T={href:"https://mgchelp.yuque.com/docs/share/29cd3ba2-e040-4ad3-874c-2edbb7103ec3?view=doc_embed&inner=V8q0R",target:"_blank",rel:"noopener noreferrer"},y=a("strong",null,"RT CORE",-1),w=a("strong",null,"光线追踪加速核心",-1),k=a("strong",null,"求交",-1),R=a("strong",null,"而 RT CORE 的主要作用即为加速求交运算",-1),v=a("strong",null,"RTX 只是用于加速光线追踪运算用",-1),I=a("ul",null,[a("li",null,"下面的第一二张图摘自英伟达20系显卡发布会")],-1),M=a("img",{src:"https://cdn.nlark.com/yuque/0/2022/png/25462013/1666676677936-0777c11a-fdcd-4904-9963-5a7a1137f92e.png#averageHue=%230a0a02&clientId=u2fa0191d-1146-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown error&from=ui&id=u9023d872&margin=[object Object]&name=QQ截图20221025102723.png&originHeight=1077&originWidth=2062&originalType=binary&ratio=1&rotation=0&showTitle=true&size=388825&status=error&style=shadow&taskId=ub74b5758-fa74-4bdb-9bfc-70861f7c83c&title=可见，即使是GTX系列也有着光追计算能力",alt:"QQ截图20221025102723.png",title:"可见，即使是GTX系列也有着光追计算能力"},null,-1),V=a("img",{src:"https://cdn.nlark.com/yuque/0/2022/png/25462013/1666676711250-69e861fb-933b-49a2-a96f-d040d6494390.png#averageHue=%2318150b&clientId=u2fa0191d-1146-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown error&from=ui&id=ud58e675e&margin=[object Object]&name=QQ截图20221025103226.png&originHeight=1114&originWidth=1827&originalType=binary&ratio=1&rotation=0&showTitle=true&size=1209636&status=error&style=shadow&taskId=u190f94ac-0cf6-4885-b0e9-fe7c56c5b0f&title=图中最上面的一句话“Turing 架构相比 Volta 架构的光线追踪性能提升了六倍”",alt:"QQ截图20221025103226.png",title:"图中最上面的一句话“Turing 架构相比 Volta 架构的光线追踪性能提升了六倍”"},null,-1),x=a("img",{src:"https://cdn.nlark.com/yuque/0/2022/png/25462013/1666676922096-8f09118f-3f01-4500-861b-b01961dd3d36.png#averageHue=%23fbfbfa&clientId=u2fa0191d-1146-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown error&from=ui&id=u2b089075&margin=[object Object]&name=QQ截图20221025104558.png&originHeight=153&originWidth=1500&originalType=binary&ratio=1&rotation=0&showTitle=true&size=12546&status=error&style=shadow&taskId=u308b35db-d483-4d3c-832c-9280a749c1d&title=TITAN V 是唯一使用 Volta 架构的显卡，其并没有搭载光追核心",alt:"QQ截图20221025104558.png",title:"TITAN V 是唯一使用 Volta 架构的显卡，其并没有搭载光追核心"},null,-1),S=a("strong",null,"光追性能六倍提升于没有光追核心",-1),H=a("strong",null,"上世纪",-1),j=a("strong",null,"数学科学组织提出",-1),X=a("strong",null,"离线渲染",-1),E=a("strong",null,"在线渲染",-1),O=a("strong",null,"英伟达并不是第一个在游戏界中应用光追",-1),P=a("strong",null,"SEUS 光影作者",-1),Q=a("strong",null,"2017年",-1),z=a("strong",null,[e("路径追踪测试，"),a("strong",null,"并于"),e("18年年初")],-1),G=a("strong",null,"发布第一个开发进度贴",-1),A=a("strong",null,"RTX 20系显卡首次发布在2018下半年",-1),C=a("img",{src:"https://cdn.nlark.com/yuque/0/2022/png/25462013/1645368279299-314daf8e-64fa-4e42-a8ad-c073d1a63ac7.png#averageHue=%23d7d7d6&clientId=u4f41a58e-c5b8-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown error&from=ui&height=480&id=u184f9e77&margin=[object Object]&name=QQ截图20220220224158.png&originHeight=572&originWidth=1013&originalType=binary&ratio=1&rotation=0&showTitle=true&size=293108&status=error&style=shadow&taskId=u4afd83ac-2d3e-40cb-9fde-a6d1bd90971&title=援引自视频《BSL到底是不是光追？光追为mc带来了什么？》&width=850",alt:"QQ截图20220220224158.png",title:"援引自视频《BSL到底是不是光追？光追为mc带来了什么？》"},null,-1),L=a("strong",null,"光线追踪技术只是一系列算法，不取决于硬件是否支持",-1),q=a("strong",null,"CPU（不依靠GPU） 也可以运行 PC 光追",-1),B={href:"https://player.bilibili.com/player.html?bvid=BV1MU4y137Yi",target:"_blank",rel:"noopener noreferrer"},W=a("strong",null,"所以说光线追踪并不是英伟达或 AMD 的专属名词或专利技术",-1),N=a("strong",null,"Tensor Core",-1),U=a("strong",null,"所以DLSS与光追技术并无直接联系",-1),D=a("br",null,null,-1),J={href:"https://player.bilibili.com/player.html?bvid=BV1X54y1v7za",target:"_blank",rel:"noopener noreferrer"},F=a("strong",null,"现在绝大多数游戏的光追都是 光栅化+光追 混合",-1),K=a("em",null,[a("strong",null,"顺带一提，RTX 光追在部分 GTX 显卡上也可以开启，只是 Mojang 刻意限制罢了，一般的3A大作都有支持，甚至 GTX 1660 能在《古墓丽影：暗影》的 1080p 最高档光线追踪下取得复杂场景平均 30fps 的成绩"),e("。")],-1),Y=o('<h2 id="_4-全局光照" tabindex="-1"><a class="header-anchor" href="#_4-全局光照" aria-hidden="true">#</a> 4. 全局光照</h2><h3 id="_1-4-1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-4-1-介绍" aria-hidden="true">#</a> 1.4.1 介绍</h3><p>一般来说，<strong>全局光照=直接光照+间接光照</strong>。全局光照，表现了直接照明和间接照明的综合效果。它有多种实现方法，例如<strong>辐射度、光线追踪、环境光遮蔽（ambient occlusion）、光子贴图、Light Probe</strong>等。当光从光源被发射出来后，碰到障碍物就反射和折射，经过无数次的反射和折射，物体表面和角落都会有光感，像真实的自然光。 全局光照计算量很大。渲染带有全局光照效果的图片，耗时会较长（取决于场景复杂度）。渲染静态图片可以接受这较长的耗时，但渲染视频或者应用到游戏时，要求的渲染时间就要减少很多，于是便有了<strong>反向追踪算法（即蒙特卡洛算法）</strong>。此算法以摄像机视角为基准，仅计算可见的地方，这样就可以在不牺牲质量的情况下提高渲染效率。</p><h3 id="_1-4-2-reflective-shadow-maps" tabindex="-1"><a class="header-anchor" href="#_1-4-2-reflective-shadow-maps" aria-hidden="true">#</a> 1.4.2 Reflective Shadow Maps</h3><p>Reflective Shadow Maps，简称RSM。它是一种实现全局光照的方式，原理为：将直接光照能够照亮的像素点作为次级光源，让它们照亮以它们为中心的像素。 参考资料：</p><h3 id="_1-4-3-light-propagation-volumes" tabindex="-1"><a class="header-anchor" href="#_1-4-3-light-propagation-volumes" aria-hidden="true">#</a> 1.4.3 Light Propagation Volumes</h3><p>Light Propagation Volumes（光照传播体积），是CryEngine3 提出的一种实时的、无需任何预计算的全局光照技术，其在RSM和SH的基础上创造性地提出了使用体素来存储、传播间接光照的方法。 LPV首先将整个场景划分为一个个的小格子（体素），将整个场景离散开来，直接计算每个格子内的光照是不现实的，解决方法是让光照像墨滴一样在这些格子中弥散、传播，从而计算最终到达着色点的间接光照。 参考资料：</p><h3 id="_1-4-4-voxel-global-illumination" tabindex="-1"><a class="header-anchor" href="#_1-4-4-voxel-global-illumination" aria-hidden="true">#</a> 1.4.4 Voxel Global Illumination</h3><p>类似于LPV，Voxel Global Illumination（体素全局光照）也是一个两趟的、实时的全局光照算法，它以体积渲染作为算法核心，将场景通过体素离散化为树状结构并存储光照计算相关信息，并在渲染时通过体素圆锥追踪来计算光照，相比LPV拥有更好的效果。 参考资料：</p>',9);function Z($,aa){const t=i("ExternalLinkIcon");return s(),p("div",null,[l,a("p",null,[e("在"),d,e(" 中，我们"),g,e("算法。在上文中提到，Minecraft 由于其动态世界，故无法大范围使用预烘焙光栅。因此在 Minecraft 中是否存在光追，对画面的影响很大。具体方法为将 Optifine 自带的 "),m,e("（原本用于绘制阴影）转化到"),h,e("（即三维空间）内来计算路径追踪。 而不依靠 RT CORE ，JAVA 版光追光影又是如何做到高帧的实时运算呢？在这里，我们主要利用"),u,e("来优化光追运算量（实际 Bedrock 版的 RTX 光追也有用到这个技术），利用 "),_,e(" 进行降噪处理（ JE 和 BE 的辐照度缓存技术在 "),a("a",b,[e("https://www.bilibili.com/video/BV1X54y1v7za?zw"),r(t)]),e(" 这个视频的 5:30、8:38 分别有讲到）。 下面展示一些光线追踪在MC中与传统光影不同的效果：")]),f,a("p",null,[a("a",T,[e("MGC 歧义及观点纠正"),r(t)]),e(" RTX / RX 显卡内有一个特殊的光线追踪运算部分，叫做 "),y,e(" ，中文名称“"),w,e("”。在光线追踪的概念里我们提到过"),k,e("运算，"),R,e("。所以说"),v,e("，并不直接计算全部光追过程。")]),I,a("p",null,[M,V,x,e(" 基于第一张图，没有什么好说的，事实就是事实。基于第二张图和第三张图，如果你认为不使用光追核心运算的就是伪光追，那么请问基于 Turing 架构的20系显卡，"),S,e("的 Volta 架构显卡 TITAN V ，提升是从哪来的呢？伪光追性能乘六，还是零乘六不等于零？这显然是说不通的。 此外，我们在上文提到过，计算机图形学的光线追踪早在"),H,e("就已经由"),j,e("了，况且，在计算机领域最早使用的光线追踪属于"),X,e("（例如C4D、Blender和电影渲染一类），直到近年硬件飞速发展，英伟达才首次将其推广到"),E,e("领域。但即便如此，"),O,e("的厂商。例如 "),P,e("早在"),Q,e("就已经开始"),z,e("在其 Patreon 上"),G,e("，而"),A,e("。"),C,e(" 而且，"),L,e("，"),q,e("。在极客湾的一期视频中，演示了手机上运行 Windows 11 on ARM 系统，并在视频末尾（约 23:40 左右开始演示）展示了用骁龙845运行 PC 端实时RTX光追 demo ，视频如下： "),a("a",B,[e("点击查看【bilibili】"),r(t)]),W,e("。 至于 DLSS ，则是通过训练人工智能，将游戏分辨率降低后再智能放大回原分辨率，与 SEUS PTGI 的 HRR 技术相似（只不过 HRR 并没有用到人工智能的一系列功能，而是单纯采用时间性抗锯齿算法——TAA，进行多帧超采样放大），而且DLSS是依靠RTX显卡中的 "),N,e(" 来运算，与 RT CORE 并无联系，"),U,e("。 关于 Minecraft for Windows10 官方的 RTX 光追技术分析，详见这篇文章（纯技术性文章）："),D,e(" 关于 JAVA 版光追，详见这个视频： "),a("a",J,[e("点击查看【bilibili】"),r(t)]),e(" 至于光栅化，引用内容内已经说过，"),F,e("，并无混合光追就是伪光追的说法。 "),K]),Y])}const ta=n(c,[["render",Z],["__file","shaders-tech.html.vue"]]);export{ta as default};
