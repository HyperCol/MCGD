import{_ as n,r as o,o as s,c as d,a as e,b as r,d as i,e as a}from"./app.1410bcfb.js";const h={},c=a('<h1 id="模组兼容问题" tabindex="-1"><a class="header-anchor" href="#模组兼容问题" aria-hidden="true">#</a> 模组兼容问题</h1><h2 id="advanced-rocketry-高级火箭" tabindex="-1"><a class="header-anchor" href="#advanced-rocketry-高级火箭" aria-hidden="true">#</a> Advanced Rocketry（高级火箭）</h2><p>将 <em><strong>overworldSkyOverride</strong></em> 设置为 <strong>false</strong>。</p><h2 id="astral-sorcery-星辉魔法" tabindex="-1"><a class="header-anchor" href="#astral-sorcery-星辉魔法" aria-hidden="true">#</a> Astral Sorcery（星辉魔法）</h2><ul><li><p>1.12.2及更早版本</p><p>在 <em><strong>weakSkyRenders</strong></em> 中添加 <strong>0</strong>。它应该看起来像这样： <code>S:weakSkyRenders &lt; 0 &gt;</code></p></li><li><p>1.15.x</p><p>在 <em><strong>weakSkyRenders</strong></em> 中添加 <strong>0</strong>。它应该看起来像这样： <code>weakSkyRenders = [ 0 ]</code></p></li><li><p>1.16.x</p></li></ul><p>在 <em><strong>skyRenderingConstellations</strong></em> 中添加 <strong>&quot;minecraft:overworld&quot;</strong>。它应该看起来像这样： <code>skyRenderingConstellations = [ &quot;minecraft:overworld&quot; ]</code></p><h2 id="better-end-更好的末地" tabindex="-1"><a class="header-anchor" href="#better-end-更好的末地" aria-hidden="true">#</a> Better End（更好的末地）</h2><p>如果它导致你使用的光影包出现问题，请在 <strong><em>config/betterend/client.json</em></strong> 中把 <code>customSky [default: true]</code>设置为 <strong>false</strong>。</p><h2 id="better-foliage-更好的树叶-1-12" tabindex="-1"><a class="header-anchor" href="#better-foliage-更好的树叶-1-12" aria-hidden="true">#</a> Better Foliage（更好的树叶）（1.12）</h2><p>不一定会崩溃，但在某些光影包中会导致树叶断裂。</p><p>要解决这个问题，你需要去确定主界面的 <em>Mods -&gt; Better Foliage -&gt; Shader Configuration</em> 是否与你的光影包的 <em><strong>block.properties</strong></em> 文件中的指定值相匹配。</p><p>注意：<em><strong>block.properties</strong></em> 可以包含多个MC版本的ID，所以一定要为你的MC版本使用正确的ID。如果你不确定要使用什么ID，请询问光影包的创作者。</p><h2 id="betweenlands-交错次元-黑暗沼泽" tabindex="-1"><a class="header-anchor" href="#betweenlands-交错次元-黑暗沼泽" aria-hidden="true">#</a> Betweenlands（交错次元 / 黑暗沼泽）</h2><p>将 <strong>use_shader</strong> 设置为 <strong>false</strong>。注意：这将解决一些渲染问题，但维度本身可能没有你的光影包的工作效果。</p><h2 id="botania-植物魔法" tabindex="-1"><a class="header-anchor" href="#botania-植物魔法" aria-hidden="true">#</a> Botania（植物魔法）</h2><p>将 <em><strong>fancySkybox.enable</strong></em> 和 <em><strong>shaders.enabled</strong></em> 设置为 <strong>false</strong>。</p><h2 id="cofh-core-1-15以上" tabindex="-1"><a class="header-anchor" href="#cofh-core-1-15以上" aria-hidden="true">#</a> COFH Core（1.15以上）</h2><p>将 <em><strong>Render Area Effect Block Breaking</strong></em> 设置为 <strong>false</strong>。</p><h2 id="computer-craft-tweaked-电脑" tabindex="-1"><a class="header-anchor" href="#computer-craft-tweaked-电脑" aria-hidden="true">#</a> Computer Craft Tweaked（电脑）</h2><p>将 <strong><em>monitor_renderer</em></strong> 设置为 &quot;gui.computercraft:config.peripheral.monitor_renderer.vbo&quot;。</p><h2 id="extended-days" tabindex="-1"><a class="header-anchor" href="#extended-days" aria-hidden="true">#</a> Extended Days</h2><p>将 <strong><em>Override Sky Rendering</em></strong> 设置为 <strong>false</strong>。</p><h2 id="hbm-s-nuclear-tech-mod-reloaded-hbm的核科技重制版" tabindex="-1"><a class="header-anchor" href="#hbm-s-nuclear-tech-mod-reloaded-hbm的核科技重制版" aria-hidden="true">#</a> Hbm&#39;s Nuclear Tech Mod Reloaded（HBM的核科技重制版）</h2><p>在 <code>config/hbm/hbm.cfg</code> 中将 <em><strong>B:1.29_enableShaders2</strong></em> 改为 <strong>false</strong>。</p><h2 id="litematica-投影" tabindex="-1"><a class="header-anchor" href="#litematica-投影" aria-hidden="true">#</a> Litematica（投影）</h2><p>将 <em><strong>Visuals -&gt; enableRendering</strong></em> 设置为 <strong>false</strong>。</p><h2 id="psi" tabindex="-1"><a class="header-anchor" href="#psi" aria-hidden="true">#</a> Psi</h2><ul><li><p>1.12</p><p>将 <strong><em>B: &quot;Use Shaders &quot;</em></strong> 设置为 <strong>false</strong>。</p></li><li><p>1.15+</p><p>将 <strong><em>useShaders</em></strong> 设置为 <strong>false</strong>。</p></li></ul><h2 id="rats-老鼠" tabindex="-1"><a class="header-anchor" href="#rats-老鼠" aria-hidden="true">#</a> Rats（老鼠）</h2><p>在 <em><strong>视频设置 -&gt; 性能</strong></em> 中关闭 <em><strong>快速渲染</strong></em>。</p><h2 id="snow-real-magic-雪-真实的魔法" tabindex="-1"><a class="header-anchor" href="#snow-real-magic-雪-真实的魔法" aria-hidden="true">#</a> Snow! Real Magic!（雪！真实的魔法！）</h2><p>在 <em><strong>视频设置 -&gt; 光影</strong></em> 中打开 <em><strong>传统照明</strong></em>。</p><h2 id="thaumcraft-神秘时代" tabindex="-1"><a class="header-anchor" href="#thaumcraft-神秘时代" aria-hidden="true">#</a> Thaumcraft（神秘时代）</h2><p>将 <em><strong>图形设置 -&gt; disableShaders</strong></em> 设置为 <strong>true</strong>。</p><h2 id="thaumic-augmentation-神秘进阶" tabindex="-1"><a class="header-anchor" href="#thaumic-augmentation-神秘进阶" aria-hidden="true">#</a> Thaumic Augmentation（神秘进阶）</h2><p>将 <em><strong>图形设置 -&gt; disableShaders</strong></em> 设置为 <strong>true</strong> 并<strong>重启游戏</strong>。</p><h2 id="the-midnight-mod-午夜" tabindex="-1"><a class="header-anchor" href="#the-midnight-mod-午夜" aria-hidden="true">#</a> The Midnight Mod（午夜）</h2><p>将 <strong><em>rift_shaders</em></strong> 设置为 <strong>false</strong>。注意：这将解决一些渲染问题，但维度本身可能没有你的光影包的工作效果。</p><h2 id="thermal-dynamics-热动力学" tabindex="-1"><a class="header-anchor" href="#thermal-dynamics-热动力学" aria-hidden="true">#</a> Thermal Dynamics（热动力学）</h2>',39),g={href:"https://www.curseforge.com/minecraft/mc-mods/unifine",target:"_blank",rel:"noopener noreferrer"},l=a('<h2 id="最后" tabindex="-1"><a class="header-anchor" href="#最后" aria-hidden="true">#</a> 最后</h2><p>如果你已经排除了上述所有的 Mod，那么找出问题 Mod 的下一步就是进行<strong>二分法搜索</strong>。</p><ul><li>将你的 <em>Mods</em> 分成 <em><strong>2</strong></em> 组</li><li>测试这两组，并<strong>保留仍有问题的那一组</strong></li><li><strong>重复</strong>，直到只剩下一个 Mod（和它的前置 Mod ）</li><li><strong>反馈给管理组</strong>，以便于我们将它添加进这里</li></ul>',3);function m(p,f){const t=o("ExternalLinkIcon");return s(),d("div",null,[c,e("p",null,[r("在你的游戏中添加 Unifine："),e("a",g,[r("https://www.curseforge.com/minecraft/mc-mods/unifine"),i(t)])]),l])}const b=n(h,[["render",m],["__file","mods.html.vue"]]);export{b as default};
