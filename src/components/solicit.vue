<template>
    <div class="solicit">
        
        <div class="top-bg"></div>

        <div class="nav">
            <ul class="nav-list">
                <li class="nav-item"><div @mouseover="isActive = 1" @mouseout="isActive = 0" :class="{isActive: isActive === 1}"><a href="#zhuti">主题介绍</a></div></li>
                <li class="nav-item"><div @mouseover="isActive = 2" @mouseout="isActive = 0" :class="{isActive: isActive === 2}"><a href="#yaoqiu">作品要求</a></div></li>
                <li class="nav-item" >
                    <div @mouseover="isActive = 3" @mouseout="isActive = 0" :class="{isActive: isActive === 3}">征集范围</div>
                    <ul class="type-list" v-show="isActive === 3" @mouseover="isActive = 3" @mouseout="isActive = 0">
                        <li class="type-item"><a href="#huanxiang">幻想都市篇</a></li>
                        <li class="type-item"><a href="#yijie">幻想异界篇</a></li>
                        <li class="type-item"><a href="#ciyuan">幻想次元篇</a></li>
                        <li class="type-item"><a href="#funv">腐女的幻想世界篇</a></li>
                    </ul>
                </li>
                <li class="nav-item"><div @mouseover="isActive = 4" @mouseout="isActive = 0" @click="scrollHeightNum = 3040" :class="{isActive: isActive === 4}"><a href="#jiangli">作品奖励</a></div></li>
                <li class="nav-item"><div @mouseover="isActive = 5" @mouseout="isActive = 0" @click="scrollHeightNum = 3040" :class="{isActive: isActive === 5}"><a href="#liucheng">参赛流程</a></div></li>
            </ul>
        </div>

        <div class="header">
            <img src="../../static/img/solicit/bg.png" id="zhuti">
        </div>

        <div class="section">
            <div class="contain">
                <span class="bg-font">Requirement</span>
                <h1 class="title" id="yaoqiu">作品要求</h1>
                <p>1、深脑洞，欢乐向，疯吐槽，梗玩年！</p>
                <p class="text">本次征文作品不限定任何背景，任何题材，但上述四大元素，行文风格之中，至少满足其中两点，否则将无法正常参与评奖。</p>
                <p class="text">参与时，在辣鸡后台或app新建作品时勾选【辣鸡开展征文啦！】相应征文主题即可参赛。</p>
                <p>2、原创作品，且作者拥有全部版权，预计篇幅超过百万字的长篇小说。</p>
                <p>3、作品必须内容积极向上，不得违反国家政策法规，不得抄袭复制，不得涉政涉黄涉黑，不得侮辱民族宗教信仰极其生活习俗，违者取消资格并承担相应后果。</p>
            </div>
            
            <div class="contain">
                <span class="bg-font">Range</span>
                <h1 class="title">征集范围</h1>
                <div class="list">
                    <span id="huanxiang">幻想都市篇</span>
                    <ul class="list-icon">
                        <li class="list-item a" @click="hiddenInfo = 1">
                            <i class="icon-move a1"></i>
                            <i class="icon-move a2"></i>
                            <i class="icon-move a3"></i>
                            <i class="icon-move a4"></i>
                            <i class="icon-move a5"></i>
                            <i class="icon-move a6"></i>
                            <i class="icon-move a7"></i>
                            <i class="icon-move a8"></i>
                        </li>
                        <li class="list-item b" @click="hiddenInfo = 2">
                            <i class="icon-move a1"></i>
                            <i class="icon-move a2"></i>
                            <i class="icon-move a3"></i>
                            <i class="icon-move a4"></i>
                            <i class="icon-move a5"></i>
                            <i class="icon-move a6"></i>
                            <i class="icon-move a7"></i>
                            <i class="icon-move a8"></i>
                        </li>
                        <li class="list-item c" @click="hiddenInfo = 3">
                            <i class="icon-move a1"></i>
                            <i class="icon-move a2"></i>
                            <i class="icon-move a3"></i>
                            <i class="icon-move a4"></i>
                            <i class="icon-move a5"></i>
                            <i class="icon-move a6"></i>
                            <i class="icon-move a7"></i>
                            <i class="icon-move a8"></i>
                        </li>
                        <li class="list-item d" @click="hiddenInfo = 4">
                            <i class="icon-move a1"></i>
                            <i class="icon-move a2"></i>
                            <i class="icon-move a3"></i>
                            <i class="icon-move a4"></i>
                            <i class="icon-move a5"></i>
                            <i class="icon-move a6"></i>
                            <i class="icon-move a7"></i>
                            <i class="icon-move a8"></i>
                        </li>
                    </ul>
                    <span id="yijie">幻想异界篇</span>
                    <ul class="list-icon">
                        <li class="list-item e" @click="hiddenInfo = 5">
                            <i class="icon-move a1"></i>
                            <i class="icon-move a2"></i>
                            <i class="icon-move a3"></i>
                            <i class="icon-move a4"></i>
                            <i class="icon-move a5"></i>
                            <i class="icon-move a6"></i>
                            <i class="icon-move a7"></i>
                            <i class="icon-move a8"></i>
                        </li>
                        <li class="list-item f" @click="hiddenInfo = 6">
                            <i class="icon-move a1"></i>
                            <i class="icon-move a2"></i>
                            <i class="icon-move a3"></i>
                            <i class="icon-move a4"></i>
                            <i class="icon-move a5"></i>
                            <i class="icon-move a6"></i>
                            <i class="icon-move a7"></i>
                            <i class="icon-move a8"></i>
                        </li>
                        <li class="list-item g" @click="hiddenInfo = 7">
                            <i class="icon-move a1"></i>
                            <i class="icon-move a2"></i>
                            <i class="icon-move a3"></i>
                            <i class="icon-move a4"></i>
                            <i class="icon-move a5"></i>
                            <i class="icon-move a6"></i>
                            <i class="icon-move a7"></i>
                            <i class="icon-move a8"></i>
                        </li>
                        <li class="list-item h" @click="hiddenInfo = 8">
                            <i class="icon-move a1"></i>
                            <i class="icon-move a2"></i>
                            <i class="icon-move a3"></i>
                            <i class="icon-move a4"></i>
                            <i class="icon-move a5"></i>
                            <i class="icon-move a6"></i>
                            <i class="icon-move a7"></i>
                            <i class="icon-move a8"></i>
                        </li>
                    </ul>
                    <span id="ciyuan">幻想次元篇</span>
                    <ul class="list-icon" @click="hiddenInfo = 9">
                        <li class="list-item i">
                            <i class="icon-move a1"></i>
                            <i class="icon-move a2"></i>
                            <i class="icon-move a3"></i>
                            <i class="icon-move a4"></i>
                            <i class="icon-move a5"></i>
                            <i class="icon-move a6"></i>
                            <i class="icon-move a7"></i>
                            <i class="icon-move a8"></i>
                        </li>
                    </ul>
                    <span id="funv">腐女的幻想世界篇</span>
                    <ul class="list-icon">
                        <li class="list-item j" @click="hiddenInfo = 10">
                            <i class="icon-move a1 red"></i>
                            <i class="icon-move a2 red"></i>
                            <i class="icon-move a3 red"></i>
                            <i class="icon-move a4 red"></i>
                            <i class="icon-move a5 red"></i>
                            <i class="icon-move a6 red"></i>
                            <i class="icon-move a7 red"></i>
                            <i class="icon-move a8 red"></i>
                        </li>
                        <li class="list-item k" @click="hiddenInfo = 11">
                            <i class="icon-move a1 red"></i>
                            <i class="icon-move a2 red"></i>
                            <i class="icon-move a3 red"></i>
                            <i class="icon-move a4 red"></i>
                            <i class="icon-move a5 red"></i>
                            <i class="icon-move a6 red"></i>
                            <i class="icon-move a7 red"></i>
                            <i class="icon-move a8 red"></i>
                        </li>
                        <li class="list-item l" @click="hiddenInfo = 12">
                            <i class="icon-move a1 red"></i>
                            <i class="icon-move a2 red"></i>
                            <i class="icon-move a3 red"></i>
                            <i class="icon-move a4 red"></i>
                            <i class="icon-move a5 red"></i>
                            <i class="icon-move a6 red"></i>
                            <i class="icon-move a7 red"></i>
                            <i class="icon-move a8 red"></i>
                        </li>
                        <li class="list-item m" @click="hiddenInfo = 13">
                            <i class="icon-move a1 red"></i>
                            <i class="icon-move a2 red"></i>
                            <i class="icon-move a3 red"></i>
                            <i class="icon-move a4 red"></i>
                            <i class="icon-move a5 red"></i>
                            <i class="icon-move a6 red"></i>
                            <i class="icon-move a7 red"></i>
                            <i class="icon-move a8 red"></i>
                        </li>
                        <li class="list-item n" @click="hiddenInfo = 14">
                            <i class="icon-move a1 red"></i>
                            <i class="icon-move a2 red"></i>
                            <i class="icon-move a3 red"></i>
                            <i class="icon-move a4 red"></i>
                            <i class="icon-move a5 red"></i>
                            <i class="icon-move a6 red"></i>
                            <i class="icon-move a7 red"></i>
                            <i class="icon-move a8 red"></i>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="contain">
                <span class="bg-font">Reward</span>
                <h1 class="title" id="jiangli">作品奖励</h1>
                <p>1、全勤调整为：日更3000字奖励600元，一个月最多可使用3次请假卡。</p>
                <p>2、获得网站的优先推广、推荐的权利。</p>
                <p>3、获得有声小说、漫画、出版、影视的优先推荐权。</p>
            </div>

            <div class="contain">
                <span class="bg-font">Technological process</span>
                <h1 class="title" id="liucheng">参加流程</h1>
                <p>作品需要先签约辣鸡小说，然后由责编来进行评选，符合征文要求即可享受征文奖励。</p>
            </div>
            <div class="hidden-box a1" v-show="hiddenInfo === 1 || hiddenInfo === 2 || hiddenInfo === 3 || hiddenInfo === 4"></div>
            <div class="hidden-box b2" v-show="hiddenInfo === 5 || hiddenInfo === 6 || hiddenInfo === 7 || hiddenInfo === 8"></div>
            <div class="hidden-box c3" v-show="hiddenInfo === 9"></div>
            <div class="hidden-box d4" v-show="hiddenInfo === 10 || hiddenInfo === 11 || hiddenInfo === 12 || hiddenInfo === 13 || hiddenInfo === 14"></div>
            <div class="hidden-contain a1" v-show="hiddenInfo === 1 || hiddenInfo === 2 || hiddenInfo === 3 || hiddenInfo === 4">
                <div v-if="hiddenInfo === 1">
                    <h1>平行都市系列 <i class="fa fa-times" @click="hiddenInfo = 0"></i></h1>
                    <div class="text-box">
                        <p class="text">茫茫宇宙，浩瀚星空。</p>
                        <p class="text">你可曾想过，当你偶然穿越到另一个平行世界时，会有着怎样精彩的奇遇？</p>
                        <p class="text">或许你重生90年代的日本，摇身变成了漫画家，与富坚义博，青山刚昌，尾田荣一郎，用热销作品一决高下？</p>
                        <p class="text">或许你重生80年代的美国，摇身变成了资本家，拳打微软，脚踏苹果，干掉了漫威，创办了英伟达？</p>
                        <p class="text">又或许你重生今日天朝，摇身变成女装大佬，萝莉主播，哼，管你什么吃鸡王？什么百强王者？什么第一歌姬，统统不在本主播话下！</p>
                        <p class="text">平行世界，想象无限！</p>
                        <p class="text">你可以是剑道大师，一代厨神，宠物医生，小说作家，也可以是阴阳寮里的阴阳师，娱乐圈内的大明星！</p>
                        <p class="text">只要你有足够的想象，可以在那个平行世界里书写任何你想写下的故事！</p>
                        <p class="text">例文：《变身之萝莉主播》《变身透视校花》《大牧场主》《我在东瀛画工口本子》《我在日本当轻小说大师》《东京影姬》《女装大佬》</p>
                    </div>
                </div>
                <div v-if="hiddenInfo === 2">
                    <h1>恐怖都市系列 <i class="fa fa-times" @click="hiddenInfo = 0"></i></h1>
                    <div class="text-box">
                        <p class="text">你可知道，平静如水的城市下，也会有着暗流涌动？</p>
                        <p class="text">罪犯，妖物，恶鬼，亡灵......这些被人们视为怪异的存在，隐藏在都市的各个角落。</p>
                        <p class="text">可能你刚刚租下的房子，是伽椰子的凶宅。</p>
                        <p class="text">也或许你打开电视，里面爬出来的是贞子。</p>
                        <p class="text">又或者你夜晚路过的水潭，楚人美正一袭蓝衣，背对着你......</p>
                        <p class="text">城市边缘，大雾弥漫。</p>
                        <p class="text">一个叫做寂静岭的小镇，即将面临拆迁。</p>
                        <p class="text">商业巨头，保护伞公司的新药已经研发出来，</p>
                        <p class="text">正在商业中心醒目的广告牌上，找人做最新的临床实验......</p>
                        <p class="text">而这个时候，身为主角的你，又在哪里？</p>
                        <p class="text">是带着系统，开启无双，把一切妖魔鬼怪打成碎片？</p>
                        <p class="text">还是搜集阴气，穿梭各个恐怖事件之中，寻找真相，解开一切谜团？</p>
                        <p class="text">例文：《这个世界有问题》《重生日本的我，在灵异剧里开无双》《无限恐怖》《反正我是超能力者》</p>
                    </div>
                </div>
                <div v-if="hiddenInfo === 3">
                    <h1>日常都市（宅男YY向）系列 <i class="fa fa-times" @click="hiddenInfo = 0"></i></h1>
                    <div class="text-box">
                        <p class="text">“粑比，粑比！”</p>
                        <p class="text">你可曾想过，当身为宅男的你清晨睁开睡眼，突然看见一个精致可爱的女儿，管自己叫爸爸？</p>
                        <p class="text">当你下班归来，突然发现自己前世的老婆，竟然变成了仙女，特意下凡为你持家？</p>
                        <p class="text">又或者当你作为老师第一天上班，却发现原本班级里的乖乖女生，竟然背地里有着各种各样的问题？</p>
                        <p class="text">日常生活中，身为男主角的我们，身边或多或少都会有些熟悉的女性角色存在。</p>
                        <p class="text">但如果有一天，我们把身边的这些女角色性格改变，把原本平淡的生活变得搞笑，逗比起来，届时又会有着怎样精彩的事件发生呢？</p>
                        <p class="text">弟控姐姐，兄控妹妹，病娇老婆，高冷女友，问题女学生......</p>
                        <p class="text">当这些改变了性格，身份的女角色，离不开我们，再次融入到我们身边的普通生活时，你又会在脑中迸发出怎样有意思的剧情？</p>
                        <p class="text">所以诸君，请发挥自己的想象，写出你脑中以衰弱宅男为视角的日常幻想吧！</p>
                        <p class="text">例文：《前世老婆找上门》《我为女儿O一秒》《日本女校的男保健老师》《我的妹妹是coser?》《我的女友是龙傲天》 《我的老婆是个宅》</p>
                    </div>
                </div>
                <div v-if="hiddenInfo === 4">
                    <h1>超现实都市系列 <i class="fa fa-times" @click="hiddenInfo = 0"></i></h1>
                    <div class="text-box">
                        <p class="text">精灵之家？巫师协会？怪兽军团？吸血鬼？</p>
                        <p class="text">异能管理局？外星人研究中心？茅山道术职业技术学院？</p>
                        <p class="text">生活之中，肯定会有许许多多超乎现实，只存在于想象中的事件发生。</p>
                        <p class="text">车水马龙的繁华都市中，有清风仙人御剑飞行，传统校园里，嫦娥仙子一本正经传授上古炼丹术，女仆餐厅内，七仙女制服亮相，可爱激萌......</p>
                        <p class="text">或许，在现实都市的另一面，还有着一个魔幻都市悄悄隐藏，不为人知。</p>
                        <p class="text">又或许，在千百年后，人类文明发展到极致，可以横渡宇宙，驾驶星河舰队，成为至高主宰般的存在。</p>
                        <p class="text">那么现在，请用你的笔，发挥你的想象，将你心中的这个世界勾勒出来吧。</p>
                        <p class="text">例文：《少女航线》，《我妖重新做人》，《神盾局的新晋职员》，《混在漫威当剑仙》  ，《仙王的日常生活》，《我修的可能是假仙》</p>
                    </div>
                </div>
            </div>
            <div class="hidden-contain b2" v-show="hiddenInfo === 5 || hiddenInfo === 6 || hiddenInfo === 7 || hiddenInfo === 8">
                <div v-if="hiddenInfo === 5">
                    <h1>异界变身系列 <i class="fa fa-times" @click="hiddenInfo = 0"></i></h1>
                    <div class="text-box">
                        <p class="text">你是否想过，当有一天醒来，自己竟然变成了一头巨龙？</p>
                        <p class="text">破碎的蛋壳，纷乱的异界。</p>
                        <p class="text">而带着人类灵魂的你，又将在这个世界里，有着怎样不同的人生？</p>
                        <p class="text">当然，你也可以选择其他族类，不死鸟，皮皮虾，蓝精灵......</p>
                        <p class="text">各种各样的种族，精彩纷纭的经历，请大胆发挥你的想象，把你想写的人生，用手中的笔描绘出来！</p>
                        <p class="text">例文：《霜寒之翼》《我，旧日支配者》《红龙》《贪吃蛇的目标是吞噬星空》</p>
                    </div>
                </div>
                <div v-if="hiddenInfo === 6">
                    <h1>异界店铺系列 <i class="fa fa-times" @click="hiddenInfo = 0"></i></h1>
                    <div class="text-box">
                        <p class="text">“兽人永不为奴！除......除非吃的管够！”  </p>
                        <p class="text">异界大陆中，也许依靠武力并不能征服所有种族，但，美食可以！</p>
                        <p class="text">一名厨师，一家餐厅。</p>
                        <p class="text">在这里，你可以吃到各种各样的异界美食。</p>
                        <p class="text">用黄金鸟蛋做出的蛋炒饭，用生命之泉酿造出的烈酒，还有清蒸刺须鲶鱼，炭烧寒地野兔......</p>
                        <p class="text">嗝！</p>
                        <p class="text">当然，吃饱饭后，你也可以去旁边的异界杂货铺看看，那也是我开的。</p>
                        <p class="text">里面应有尽有，各个次元，各个位面，只要你想得到的，哪怕是天上的星星，我也可以摘下来售卖！</p>
                        <p class="text">例文：《奶爸的异界餐厅》，《佛系恶魔的小卖部》，《异世界的美食家》，《异界食谱》</p>
                    </div>
                </div>
                <div v-if="hiddenInfo === 7">
                    <h1>异界次元系列 <i class="fa fa-times" @click="hiddenInfo = 0"></i></h1>
                    <div class="text-box">
                        <p class="text">热血日漫世界，战斗游戏世界，日系轻小说世界。</p>
                        <p class="text">间桐雁夜，舰娘俾斯麦，时崎狂三......</p>
                        <p class="text">浩如烟海的位面世界，个性鲜明的人物形象，总能发现一个专属于你的幻想次元！</p>
                        <p class="text">那么现在，请将你脑中的次元世界诉诸笔端！</p>
                        <p class="text">无论是型月世界，还是各种日系综漫快穿，只要你敢把你心中的幻想写下，我们就敢来看！</p>
                        <p class="text">例文：《轮回乐园》《我，型月，漫画家》《型月的根源人偶师》《将我的节操作为祭品献上》《次元论坛》《无限绅士》《无限世界的套路基本法》</p>
                    </div>
                </div>
                <div v-if="hiddenInfo === 8">
                    <h1>异界历史系列 <i class="fa fa-times" @click="hiddenInfo = 0"></i></h1>
                    <div class="text-box">
                        <p class="text">你是否想过，有一天，你可以穿越回过去，改变历史的轨迹？</p>
                        <p class="text">在繁华的大唐盛世，开办淘宝，创建滴滴？</p>
                        <p class="text">在落寞的明朝末期，驾驶无敌舰队，远渡重洋，称霸海洋世纪？</p>
                        <p class="text">又或者，你可以凭空想象出一段历史，描绘出一个新的世界观，开展另一段属于主角的英雄传奇？</p>
                        <p class="text">还是你可以穿梭过去，作为一名历史的见证者，看那花开花落，云卷云舒，新旧史诗的交替？</p>
                        <p class="text">例文：《我的大宝剑》《我可能活得有点久了》《他，改变了大唐》《大明：征服天堂》</p>
                    </div>
                </div>
            </div>
            <div class="hidden-contain c3" v-show="hiddenInfo === 9">
                <div v-if="hiddenInfo === 9">
                    <h1>同人系列 <i class="fa fa-times" @click="hiddenInfo = 0"></i></h1>
                    <div class="text-box">
                        <p class="text">青春畅想，热血日漫！</p>
                        <p class="text">战火连天，激情四燃！</p>
                        <p class="text">木叶高傲的苍蓝猛兽，阿凯老师曾经说过，青春的勋章离不开热血！当新叶萌发，新春到来之时，才是青春的最高潮燃烧得最火热的时刻！</p>
                        <p class="text">没错！</p>
                        <p class="text">我们每个人都有青春，而青春的三大精神，就是激情，奋斗与力量！</p>
                        <p class="text">所以少年郎，请尽情挥洒你自己的想象吧！</p>
                        <p class="text">你可以将你笔下的主角，融入那些曾经让你热血沸腾的战斗日漫中，与鸣人，佐助一起在竞争中成长，与路飞起航扬帆，寻找海贼王罗杰的宝藏！</p>
                        <p class="text">例文：《火影之最强震遁》，《海贼之火龙咆哮》，《龙珠之武天宗师》，《神级剑魂系统》，《一拳之最强英雄》，《名侦探世界里的巫师》</p>
                    </div>
                </div>
            </div>
            <div class="hidden-contain d4" v-show="hiddenInfo === 10 || hiddenInfo === 11 || hiddenInfo === 12 || hiddenInfo === 13 || hiddenInfo === 14">
                <div v-if="hiddenInfo === 10">
                    <h1>ABO系列 <i class="fa fa-times" @click="hiddenInfo = 0"></i></h1>
                    <div class="text-box">
                        <p class="text">人类在未来被分为六种性别，占据统治与领导地位的ALPHA男、ALPHA女，占人口绝大多数的BETA男、BETA女，以及高受孕率的OMEGA男、OMEGA女。不甘心受性别的桎梏，小心翼翼地隐瞒身份，克服生理缺陷，最终是否能够成功打破偏见达成最初的理想？</p>
                        <p class="text">例文：《军校生》、《帝国模范婚姻》、《银河帝国之刃》、《破晓》</p>
                    </div>
                </div>
                <div v-if="hiddenInfo === 11">
                    <h1>哨向系列 <i class="fa fa-times" @click="hiddenInfo = 0"></i></h1>
                    <div class="text-box">
                        <p class="text">觉醒为哨兵拥有强大战斗力的同时，不安定的精神狂躁随时可能摧毁一位失控的哨兵；向导的精神输导是少数有效平复哨兵情绪的方式。灵魂契合的哨兵与向导结合，将最大化发挥出两者的实力。</p>
                        <p class="text">例文：《断点续传》、《全职军医》、《逆袭[星际]》</p>
                    </div>
                </div>
                <div v-if="hiddenInfo === 12">
                    <h1>人鱼系列 <i class="fa fa-times" @click="hiddenInfo = 0"></i></h1>
                    <div class="text-box">
                        <p class="text">星际环境的辐射性射线下的人类女性濒临灭绝，而雌雄同体的深海人鱼基因却能够改造人体，使其拥有生育能力。男性公民积攒半生的贡献值，只为换取一条可以共度一生的人鱼。</p>
                        <p class="text">例文：《总有人鱼爱跟我抢男人[星际]》、《人鱼的悲催生活》</p>
                    </div>
                </div>
                <div v-if="hiddenInfo === 13">
                    <h1>兽人系列 <i class="fa fa-times" @click="hiddenInfo = 0"></i></h1>
                    <div class="text-box">
                    <p class="text">这里的男性被分为兽人与亚兽，拥有在兽态与人身转变能力的被称为兽人，而只能保持人身的男性被称作亚兽。</p>
                        <p class="text">例文：《兽丛之刀》</p>
                    </div>
                </div>
                <div v-if="hiddenInfo === 14">
                    <h1>哥儿爷们系列 <i class="fa fa-times" @click="hiddenInfo = 0"></i></h1>
                    <div class="text-box">
                        <p class="text">这个世界的男性被分为爷们和哥儿，高大的爷们承担大部分的体力活，相对较瘦弱的哥儿，眼边泪痣颜色越是鲜艳，则生育能力越强，越受到欢迎。</p>
                        <p class="text">例文：《我不要生小孩儿》</p>
                    </div>
                </div>
            </div>
            <p class="girl">girl</p>
            <p class="fantasy">fantasy</p>
        </div>

        <div class="cover-box" v-show="hiddenInfo !== 0"></div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            isActive: 0,
            animated: 0,
            hiddenInfo: 0,
        }
    }
}
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
@keyframes icon1 {
    0 {
        left 31px
        top 33px
        transform rotate(-30deg)
    }
    1% {
        left 31px
        top 33px
        transform rotate(0deg)
    }
    24% {
        left 250px
        top 33px
        transform rotate(0deg)
    }
    25% {
        left 250px
        top 33px
        transform rotate(90deg)
    }
    49% {
        left 250px
        top 152px
        transform rotate(90deg)
    }
    50% {
        left 250px
        top 152px
        transform rotate(180deg)
    }
    74% {
        left 31px
        top 152px
        transform rotate(180deg)
    }
    75% {
        left 31px
        top 152px
        transform rotate(270deg)
    }
    99% {
        left 31px
        top 33px
        transform rotate(270deg)
    }
    100% {
        left 31px
        top 33px
        transform rotate(-45deg)
    }
}
@keyframes icon2 {
    0 {
        left 98px
        top 33px
        transform rotate(0deg)
    }
    15% {
        left 250px
        top 33px
        transform rotate(0deg)
    }
    16% {
        left 250px
        top 33px
        transform rotate(90deg)
    }
    40% {
        left 250px
        top 152px
        transform rotate(90deg)
    }
    41% {
        left 250px
        top 152px
        transform rotate(180deg)
    }
    65% {
        left 31px
        top 152px
        transform rotate(180deg)
    }
    66% {
        left 31px
        top 152px
        transform rotate(270deg)
    }
    90% {
        left 31px
        top 33px
        transform rotate(270deg)
    }
    91% {
        left 31px
        top 33px
        transform rotate(0deg)
    }
    100% {
        left 98px
        top 33px
        transform:rotate(0deg)
    }
}
@keyframes icon3 {
    0 {
        left 174px
        top 33px
        transform rotate(0deg)
    }
    7% {
        left 250px
        top 33px
        transform rotate(0deg)
    }
    8% {
        left 250px
        top 33px
        transform rotate(90deg)
    }
    32% {
        left 250px
        top 152px
        transform rotate(90deg)
    }
    33% {
        left 250px
        top 152px
        transform rotate(180deg)
    }
    57% {
        left 31px
        top 152px
        transform rotate(180deg)
    }
    58% {
        left 31px
        top 152px
        transform rotate(270deg)
    }
    82% {
        left 31px
        top 33px
        transform rotate(270deg)
    }
    83% {
        left 31px
        top 33px
        transform rotate(0deg)
    }
    100% {
        left 174px
        top 33px
        transform rotate(0deg)
    }
}
@keyframes icon4 {
    0 {
        left 250px
        top 33px
        transform rotate(20deg)
    }
    1% {
        left 250px
        top 33px
        transform rotate(90deg)
    }
    24% {
        left 250px
        top 152px
        transform rotate(90deg)
    }
    25% {
        left 250px
        top 152px
        transform rotate(180deg)
    }
    49% {
        left 31px
        top 152px
        transform rotate(180deg)
    }
    50% {
        left 31px
        top 152px
        transform rotate(270deg)
    }
    74% {
        left 31px
        top 33px
        transform rotate(270deg)
    }
    75% {
        left 31px
        top 33px
        transform rotate(0deg)
    }
    99% {
        left 250px
        top 33px
        transform rotate(0deg)
    }
    100% {
        left 250px
        top 33px
        transform rotate(20deg)
    }
}
@keyframes icon5 {
    0 {
        left 250px
        top 152px
        transform rotate(144deg)
    }
    1% {
        left 250px
        top 152px
        transform rotate(180deg)
    }
    24% {
        left 31px
        top 152px
        transform rotate(180deg)
    }
    25% {
        left 31px
        top 152px
        transform rotate(270deg)
    }
    49% {
        left 31px
        top 33px
        transform rotate(270deg)
    }
    50% {
        left 31px
        top 33px
        transform rotate(0deg)
    }
    74% {
        left 250px
        top 33px
        transform rotate(0deg)
    }
    75% {
        left 250px
        top 33px
        transform rotate(90deg)
    }
    99% {
        left 250px
        top 152px
        transform rotate(90deg)
    }
    100% {
        left 250px
        top 152px
        transform rotate(144deg)
    }
}
@keyframes icon6 {
    0 {
        left 174px
        top 152px
        transform rotate(0deg)
    }
    15% {
        left 31px
        top 152px
        transform rotate(0deg)
    }
    16% {
        left 31px
        top 152px
        transform rotate(90deg)
    }
    40% {
        left 31px
        top 33px
        transform rotate(90deg)
    }
    41% {
        left 31px
        top 33px
        transform rotate(180deg)
    }
    65% {
        left 250px
        top 33px
        transform rotate(180deg)
    }
    66% {
        left 250px
        top 33px
        transform rotate(270deg)
    }
    90% {
        left 250px
        top 152px
        transform rotate(270deg)
    }
    91% {
        left 250px
        top 152px
        transform rotate(0deg)
    }
    100% {
        left 174px
        top 152px
        transform rotate(0deg)
    }
}
@keyframes icon7 {
    0 {
        left 98px
        top 152px
        transform rotate(0deg)
    }
    7% {
        left 31px
        top 152px
        transform rotate(0deg)
    }
    8% {
        left 31px
        top 152px
        transform rotate(90deg)
    }
    32% {
        left 31px
        top 33px
        transform rotate(90deg)
    }
    33% {
        left 31px
        top 33px
        transform rotate(180deg)
    }
    57% {
        left 250px
        top 33px
        transform rotate(180deg)
    }
    58% {
        left 250px
        top 33px
        transform rotate(270deg)
    }
    82% {
        left 250px
        top 152px
        transform rotate(270deg)
    }
    83% {
        left 250px
        top 152px
        transform rotate(0deg)
    }
    100% {
        left 98px
        top 152px
        transform rotate(0deg)
    }
}
@keyframes icon8 {
    0 {
        left 31px
        top 152px
        transform rotate(30deg)
    }
    1% {
        left 31px
        top 152px
        transform rotate(90deg)
    }
    24% {
        left 31px
        top 33px
        transform rotate(90deg)
    }
    25% {
        left 31px
        top 33px
        transform rotate(180deg)
    }
    49% {
        left 250px
        top 33px
        transform rotate(180deg)
    }
    50% {
        left 250px
        top 33px
        transform rotate(270deg)
    }
    74% {
        left 250px
        top 152px
        transform rotate(270deg)
    }
    75% {
        left 250px
        top 152px
        transform rotate(0deg)
    }
    99% {
        left 31px
        top 152px
        transform rotate(0deg)
    }
    100% {
        left 31px
        top 152px
        transform rotate(30deg)
    }
}
@font-face { 
    font-family: 'DFPHaiBaoW12-GB'; /*这里是说明调用来的字体名字*/ 
    src: url('../../static/font/DFPHaiBaoW12-GB.ttf'); /*这里是字体文件路径*/ 
}
@font-face { 
    font-family: 'MF-FangHei-Noncommercial-Regular'; /*这里是说明调用来的字体名字*/ 
    src: url('../../static/font/MF-FangHei-Noncommercial-Regular.ttf'); /*这里是字体文件路径*/ 
}
.solicit
    position relative
    min-width 1500px
    background #03031F
    color #fff
    padding-bottom 100px
    .top-bg
        width 100%
        position fixed
        top 0
        background #000
        opacity .7
        height 100px
        z-index 100
    .nav
        width 100%
        position fixed
        top 0
        z-index 101
        ul.nav-list
            width 1200px
            margin 0 auto
            display flex
            justify-content space-between
            li.nav-item
                width 190px
                height 100px
                div
                    height 70px
                    margin-top 15px
                    line-height 70px
                    box-sizing border-box
                    border-radius 10px
                    text-align center
                    font-size 32px
                    font-family DFPHaiBaoW12-GB
                    cursor pointer
                    a
                        color #fff
                div:hover
                    background linear-gradient(to top, #2825AA, #4B81DD, #423CB8)
                div.isActive
                    background linear-gradient(to top, #2825AA, #4B81DD, #423CB8)
                ul.type-list
                    width 190px
                    padding-top 30px
                    position absolute
                    top 80px
                    background #000
                    li.type-item
                        a
                            display block
                            height 50px
                            line-height 50px
                            font-size 22px
                            font-family DFPHaiBaoW12-GB
                            text-align center
                            cursor pointer
                            color #999
                    li.type-item:hover
                        a
                            color #fff
    .header
        width 100%
        img
            width 100%
    .section
        position relative
        width 1200px
        margin 0 auto
        .contain
            position relative
            .bg-font
                position absolute
                top 40px
                left 0
                font-size 42px
                color #2E2E3A
                font-family MF-FangHei-Noncommercial-Regular
            .title
                display inline-block
                padding-bottom 41px
                margin-top 100px
                font-size 30px
                font-family:MF-FangHei-Noncommercial-Regular;
                border-bottom 4px solid #fff
            p
                font-size 18px
                color #DCDCDC
                font-family PingFang HK
                margin 50px 0
                line-height 50px
            p.text
                text-indent 2em
                margin-top -60px
            .list
                span
                    display block
                    margin 40px 0 40px 55px
                    font-size 30px
                    font-family MF-FangHei-Noncommercial-Regular
                    color #999999
                .list-icon
                    overflow hidden
                    .list-item
                        position relative
                        z-index 150
                        float left
                        cursor pointer
                        width 296px
                        height 193px
                        i.icon-move
                            display block
                            position absolute
                            width 14px
                            height 5px
                            border-radius 50% 50%
                            box-shadow 0px 0px 30px 5px #262be2
                            background #fff
                        i.red
                            box-shadow 0px 0px 30px 5px #ff0000
                        .a1
                            left 31px
                            top 33px
                            transform rotate(-30deg)
                        .a2
                            left 98px
                            top 33px
                        .a3
                            left 174px
                            top 33px
                        .a4
                            left 250px
                            top 33px
                            transform rotate(20deg)
                        .a5
                            left 250px
                            top 152px
                            transform rotate(144deg)
                        .a6
                            left 174px
                            top 152px
                        .a7
                            left 98px
                            top 152px
                        .a8
                            left 31px
                            top 152px
                            transform:rotate(30deg)
                    .list-item:hover
                        .a1
                            animation: icon1 2s linear infinite
                        .a2
                            animation: icon2 2s linear infinite
                        .a3
                            animation: icon3 2s linear infinite
                        .a4
                            animation: icon4 2s linear infinite
                        .a5
                            animation: icon5 2s linear infinite
                        .a6
                            animation: icon6 2s linear infinite
                        .a7
                            animation: icon7 2s linear infinite
                        .a8
                            animation: icon8 2s linear infinite
                    .a
                        background url('../../static/img/solicit/3.png') no-repeat
                    .b
                        background url('../../static/img/solicit/5.png') no-repeat
                    .c
                        background url('../../static/img/solicit/6.png') no-repeat
                    .d
                        background url('../../static/img/solicit/7.png') no-repeat
                    .e
                        background url('../../static/img/solicit/4.png') no-repeat
                    .f
                        background url('../../static/img/solicit/9.png') no-repeat
                    .g
                        background url('../../static/img/solicit/2.png') no-repeat
                    .h
                        background url('../../static/img/solicit/8.png') no-repeat
                    .i
                        background url('../../static/img/solicit/1.png') no-repeat
                    .j
                        background url('../../static/img/solicit/10.png') no-repeat
                    .k
                        background url('../../static/img/solicit/13.png') no-repeat
                    .l
                        background url('../../static/img/solicit/11.png') no-repeat
                    .m
                        background url('../../static/img/solicit/12.png') no-repeat
                    .n
                        background url('../../static/img/solicit/14.png') no-repeat
        .hidden-box
            position absolute
            z-index 151
            margin-left -600px
            left 50%
            width 1200px
            height 1100px
            background #000
            opacity .8
        .hidden-contain
            position absolute
            z-index 152
            margin-left -600px
            left 50%
            width 1200px
            padding 0 60px
            box-sizing border-box
            background transparent
            h1
                text-align center
                background #000
                height 70px
                line-height 70px
                font-size 26px
                font-family MF-FangHei-Noncommercial-Regular
                i
                    float right
                    margin-right 10px
                    font-size 30px
                    color #ffffff
                    cursor pointer
                    margin-top 15px
            .text-box
                .text
                    font-size 26px
                    color #CBCACA
                    line-height 70px
        .a1
            top 1000px
        .b2
            top 1326px
            height 770px
        .c3
            top 1634px
            height 865px
        .d4
            top 1900px
            height 400px
        .girl
            position absolute
            z-index 100
            top 1860px
            left 635px
            font-family MF-FangHei-Noncommercial-Regular
            color #2E2E3A
            font-size 88px
        .fantasy
            position absolute
            z-index 100
            top 920px
            left 803px
            font-family MF-FangHei-Noncommercial-Regular
            color #2E2E3A
            font-size 88px
    .cover-box
        position fixed
        z-index 150
        left 0
        top 0
        width 100%
        height 100%
        background #000
        opacity .3
</style>
