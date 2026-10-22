// Shared editorial source for the website and the PDF. No network required.
window.PORTFOLIO_STUDIES = {
  "zh": {
    "homemind": {
      "shortTitle": "HomeMind",
      "reading": "约 4 分钟",
      "question": "当 AI 觉得自己懂了，怎样把确认权留给人？",
      "contextTitle": "从一句日常需要，走向一次有分寸的安排。",
      "context": "家庭里的安排会变：今天累了、周末想晚起、某个房间暂时不方便打扫。HomeMind 探索让人用日常语言表达这些变化，再把系统的理解放到眼前，决定这次怎么做、以后要不要照着做。",
      "tension": "同一句话，可能只影响今天，也可能是在表达长期偏好。如果系统直接把一次变化当成习惯，就容易做出让人意外的决定。",
      "response": "把观察、猜想和已确认的习惯分开呈现。先说明为什么这样理解，再给出清楚的作用范围，让人参与从“也许”到“确定”的过程。",
      "processTitle": "把理解的过程，变成可以参与的交互。",
      "processIntro": "以下路径依据现有界面梳理。重点是从输入到确认的关系，以及每一步怎样让用户知道系统正在做什么。",
      "flow": [
        {
          "title": "表达当下需要",
          "body": "从首页进入与 Rocky 的对话，用生活里的说法描述希望发生的变化。"
        },
        {
          "title": "看懂理解依据",
          "body": "对话中呈现观察与猜想，解释系统为什么提出这次建议。"
        },
        {
          "title": "选择调整范围",
          "body": "区分一次安排、一段时间和长期习惯，让同意的含义更具体。"
        },
        {
          "title": "回到成长中复核",
          "body": "在成长页查看正在理解、等待确认和已学会的内容。"
        }
      ],
      "decisions": [
        {
          "title": "先解释猜想，再邀请确认",
          "body": "把观察依据放在建议旁边，用户可以先理解这次判断从哪里来，再决定是否接受。对话不仅接收指令，也承担解释的作用。",
          "tradeoff": "多一步阅读，换来对自动调整更清楚的预期；解释需要足够短，不能抢走任务本身的注意力。"
        },
        {
          "title": "把一次变化与长期习惯分开",
          "body": "将当次清洁、阶段性调整和长期偏好区分开。这样，“今天不想打扫”才不会轻易变成“以后都不打扫”。",
          "tradeoff": "需要多表达一个范围，但能减少一次同意被扩展为长期规则的歧义。"
        },
        {
          "title": "给“还没确定”一个可见的位置",
          "body": "成长页呈现正在理解、等待确认、等待家庭复核等状态；已学会的条目继续展示生效或观察状态，让习惯形成有过程可看。",
          "tradeoff": "状态比简单的开关更多，因此需要按“接下来轮到谁做什么”组织，而不是让人理解后台术语。"
        }
      ],
      "figures": [
        {
          "file": "home-chat.png",
          "caption": "对话原型：观察依据、解释猜想与调整选项在同一条交流路径中出现。图中的记录与次数为演示数据。"
        },
        {
          "file": "home-growth.png",
          "caption": "成长原型：将正在理解、待确认与已学会的内容分开，让形成中的习惯有位置可查。"
        },
        {
          "file": "home-family.png",
          "caption": "家庭原型：用成员与家庭信息为共同生活的安排提供背景。"
        }
      ],
      "outcomeTitle": "让“懂你”有一个看得见的过程。",
      "outcomes": [
        "形成首页、对话、成长与家庭等移动界面，保留可供交流的交互原型。",
        "明确了“表达需要 → 理解依据 → 选择范围 → 查看成长”的体验路径。",
        "将系统的猜想与人的确认分开，让自动化的边界更容易讨论。"
      ],
      "next": [
        "观察首次体验者能否区分“仅这次”和“长期改变”，再简化确认文案。",
        "在调整、取消与完成等不同情况下，检查计划汇总和条目状态是否保持一致。",
        "接入真实设备前，补足执行失败、撤销和多人意见不一致的处理。"
      ],
      "boundary": "展示范围：产品概念与交互原型界面。截图包含演示数据；本案例不声称真实设备已接入，也没有以示例次数推导使用效果。",
      "pdfInsight": "理解可以由 AI 提出，习惯需要由人确认。"
    },
    "workbench": {
      "shortTitle": "阿琳工作台",
      "reading": "约 3 分钟",
      "question": "当日常内容散落在不同地方，工作空间能不能按自己的习惯生长？",
      "contextTitle": "让经常回看的东西，留在眼前。",
      "context": "时间、便签、待办和日志并不总按同一种顺序被使用。阿琳工作台从个人桌面的场景出发，把这些内容作为可以组合的部件，让人安排眼前的轻重缓急。",
      "tension": "固定布局容易理解，却未必适合每天不同的关注点；完全自由的画布又需要人花时间整理。",
      "response": "用有明确用途的小组件提供起点，再把位置与视觉氛围的选择交给使用者。重要内容可以靠近，暂时不需要的内容可以退后。",
      "processTitle": "从“都放进来”，到“摆成我现在需要的样子”。",
      "processIntro": "作品集中的交互片段提取了原作的空间思路：试着移动部件、勾选一件待办、换一张壁纸，感受布局与状态的变化。",
      "flow": [
        {
          "title": "找到常看的内容",
          "body": "用时钟、便签、待办等部件，把日常需要先摆在一个空间中。"
        },
        {
          "title": "安排当前的重点",
          "body": "移动部件，让正在关注的内容更顺手；通过位置表达轻重。"
        },
        {
          "title": "留下继续的入口",
          "body": "原作中的日志与每日归档保留过程，让回到任务时有线索可循。"
        }
      ],
      "decisions": [
        {
          "title": "用部件提供起点，让布局保留自由",
          "body": "组件内部保持清楚的用途，组件之间允许重新排列。时钟负责时间，便签接住念头，待办保留下一步，彼此不必争夺同一种结构。",
          "tradeoff": "自由需要整理成本；演示保留默认位置与重置入口，试错之后可以轻松回来。"
        },
        {
          "title": "把氛围也当作个人选择",
          "body": "壁纸与色彩决定了这个空间给人的感觉。将它们做成轻量的选择，让工作台与个人日常相连。",
          "tradeoff": "视觉变化需要让位于文字可读性。无论背景怎样变化，部件的边界与内容都应该保持清楚。"
        },
        {
          "title": "从桌面概览，走进更专注的面板",
          "body": "keep running 可以作为桌面上的简要状态入口，展开后呈现各项目状态与日志。日常概览和详细信息分开，让需要的内容在合适的时候出现。",
          "tradeoff": "详情有了更多空间，同时需要保留清楚的返回入口，让人能够回到原来的桌面。"
        }
      ],
      "figures": [
        {
          "file": "workbench-desktop.png",
          "caption": "实际截图 01 / 日常桌面：壁纸、时钟、日志库、待办与 keep running 并置，底部组件栏提供进入不同内容的入口。"
        },
        {
          "file": "workbench-runtime.png",
          "caption": "实际截图 02 / keep running 详情：将概览展开为项目状态、进度和日志。画面中的数值用于展示信息组织，不作为真实运行成效的证明。"
        },
        {
          "file": "workbench-personal.png",
          "caption": "实际截图 03 / 自定义桌面：猫咪壁纸、音乐部件与桌宠共同构成个人空间；时钟、待办和运行入口仍然可见。"
        }
      ],
      "outcomeTitle": "把“按自己的节奏工作”变成可以触碰的空间。",
      "outcomes": [
        "用三张实际截图呈现日常桌面、运行详情与自定义壁纸三种状态。",
        "作品集提供可拖动组件、待办勾选、壁纸切换和布局重置的体验片段。",
        "将产品构思、空间组织和视觉氛围放进同一个可以交流的案例。"
      ],
      "next": [
        "观察哪些部件真正需要常驻，减少为了完整而堆放的内容。",
        "继续探索自由布局在不同屏幕尺寸下怎样保持可读。",
        "以真实连续使用体验检验日志与归档能否帮助重新进入任务。"
      ],
      "boundary": "展示范围：阿琳提供的三张实际界面截图与网页体验片段。网页中的操作不保存到原桌面应用；截图里的状态与数值不作为量化效率或服务实测的证明。",
      "pdfInsight": "让工具适应人的关注顺序，也给改变留出余地。"
    },
    "digest": {
      "shortTitle": "Digest",
      "reading": "约 3 分钟",
      "question": "一件事从想到到做完，中间的犹豫、推进和确认该放在哪里？",
      "contextTitle": "先看清想法的位置，才知道下一步往哪里走。",
      "context": "一个念头可能还需要消化，也可能已经可以执行；一项工作做完之后，往往还需要回看与确认。Digest 用空间组织这些状态，让项目的来处、当前进展和结果同时可见。",
      "tension": "如果所有内容都挤在一张待办清单里，尚未想清楚的事会和马上要做的事混在一起；“已完成”也未必意味着已经确认。",
      "response": "把中央工作区组织为消化、执行与沉淀，再保留待执行、执行中、待确认、已确认等差别。左右侧栏分别承担定位与概览。",
      "processTitle": "让空间结构，说明一件事如何往前走。",
      "processIntro": "草图与现有界面保留了相近的三段结构。这里梳理的是信息组织方式；图中的条目与数量是展示内容，不作为产品使用成效。",
      "flow": [
        {
          "title": "消化：接住未成形的想法",
          "body": "先给资料与念头一个位置，保留进一步理解和梳理的空间。"
        },
        {
          "title": "执行：区分准备与进行",
          "body": "将待执行和执行中分开，让准备做什么与正在做什么更清楚。"
        },
        {
          "title": "沉淀：完成后再确认",
          "body": "用待确认和已确认承接结果，为复核和后续回看留下入口。"
        }
      ],
      "decisions": [
        {
          "title": "让“做完”和“确认”保持区别",
          "body": "将待确认作为显式状态，避免一进入沉淀区就意味着结束。结果仍可以被回看，项目也有了收尾的空间。",
          "tradeoff": "多一种状态，也多一次维护；每种状态都应有清楚含义，避免看板自己变成负担。"
        },
        {
          "title": "左侧定位，中间推进，右侧概览",
          "body": "项目与任务树帮助找到位置；中央保留当前内容；阶段汇总与标签放在右侧，补充整体理解。三处各自回答不同的问题。",
          "tradeoff": "宽屏可以同时呈现更多背景；在小屏上需要优先保留中央任务，次要信息按需展开。"
        },
        {
          "title": "保留熟悉的空间，再补上细节",
          "body": "从草图到界面保持三段工作区与左右侧栏的关系，再加入搜索、标签和筛选等可见入口，让信息逐步变得具体。",
          "tradeoff": "更多入口不等于更清楚。设计需要持续检查哪些内容服务于当下任务，哪些应该后退。"
        }
      ],
      "figures": [
        {
          "file": "digest-draft.png",
          "caption": "早期界面草图：先安排项目定位、三段工作区与概览信息之间的关系。"
        },
        {
          "file": "digest-interface.png",
          "caption": "现有界面：保留主要空间结构，将执行与确认状态、标签和操作入口进一步具体化。"
        }
      ],
      "outcomeTitle": "让一个念头的去向，比一排勾选框更清楚。",
      "outcomes": [
        "保留草图与现有界面的对照，呈现从信息结构到界面细化的过程。",
        "明确消化、执行与沉淀的空间分工，以及完成后的确认环节。",
        "作品集提供可拖动的前后对比，方便直接讨论布局与视觉变化。"
      ],
      "next": [
        "用一条真实任务走完整段过程，观察哪些状态容易混淆或被跳过。",
        "明确内容跨区移动的触发条件与撤回方式。",
        "在较窄屏幕上验证侧栏收起后，中央任务是否仍然容易理解。"
      ],
      "boundary": "展示范围：界面草图、现有界面截图与对比交互。案例侧重信息组织与视觉迭代；截图中的示例数量不代表实际使用效果。",
      "pdfInsight": "每个阶段有位置，每个结果有确认。"
    },
    "starity": {
      "shortTitle": "Starity · 小纪",
      "reading": "约 3 分钟",
      "question": "和 AI 一起做过、聊过的事，怎样留下可以重新接上的线索？",
      "contextTitle": "把共同经历，放进一个愿意常常打开的地方。",
      "context": "Starity 从我与小纪的日常协作中长出来：有时想记下一点灵感，有时想看看项目推进到哪里，也会想找回某次对话。它将这些需要收进时间线、任务与会话三个入口，用小猫贴纸和可定制的背景保留个人气息。",
      "tension": "时间线适合回看发生过什么，任务适合安排接下来做什么，会话则保留了当时为什么这样想。三种内容相互有关，却不适合挤成同一份清单。",
      "response": "让三个入口承担各自的阅读和操作任务，同时沿用一致的导航、卡片和底色。人可以从回顾走向行动，也可以返回对话寻找上下文。",
      "processTitle": "从日常回看，到行动和重新找到。",
      "processIntro": "以下五张均为我在手机上提供的实际画面，保留原有字号、间距、系统状态栏与浏览器边框。它们呈现日常记录、任务录入、时间线的另一状态、装扮入口和会话检索。",
      "flow": [
        {
          "title": "回看发生过的事",
          "body": "日期、分类与简短记录共同组成时间线；“今日微光”和猫咪贴纸让入口带着熟悉感。"
        },
        {
          "title": "留下下一步",
          "body": "将任务分为施工中、待打磨与巡航中，新增时即可选择位置，减少先记下再整理的往返。"
        },
        {
          "title": "找回当时的对话",
          "body": "输入关键词、按对话角色筛选，再展开记录查看全文，让被提起的想法有出处可回看。"
        },
        {
          "title": "换成自己的氛围",
          "body": "从谷子框进入手绘、相册贴纸与定制方案，把背景和小猫一起搭配。"
        }
      ],
      "decisions": [
        {
          "title": "把回顾、行动和出处分成三个入口",
          "body": "时间线讲述发生过什么；任务保留要做什么；会话检索回答当时怎么聊的。沿用相同的视觉语言，让内容切换保持熟悉。",
          "tradeoff": "需要在入口之间切换，因此每一页都要清楚说明当前内容，并保留轻量导航。"
        },
        {
          "title": "让装扮成为日常体验的一部分",
          "body": "我提出让 Starity 背景与谷子框呼应搭配、随时更换套装。装扮工坊将手绘、相册贴纸和方案管理组织成容易理解的选择。",
          "tradeoff": "背景和质感可以丰富，文字与控件仍需要足够清楚；装饰不能妨碍回看与录入。"
        },
        {
          "title": "用真实会话保留协作的来处",
          "body": "会话检索提供关键词、角色筛选与全文展开。对于长期协作，重新接上一个想法需要能够找到此前的表达。",
          "tradeoff": "历史内容很多，摘要和筛选应帮助缩小范围；界面的记录数量只说明当时的内容规模，不等同于检索质量。"
        }
      ],
      "figures": [
        {
          "file": "starity-timeline.jpg",
          "caption": "手机实拍 01 / 日常时间线：今日微光、分类与按日期排列的记录，保留随手录入的入口。"
        },
        {
          "file": "starity-tasks.jpg",
          "caption": "手机实拍 02 / 任务清单：新增面板与分组同时可见，可以在录入时选择任务状态。"
        },
        {
          "file": "starity-timeline-focus.jpg",
          "caption": "手机实拍 03 / 时间线的另一状态：让项目落地的几个节点留在同一条阅读路径中。"
        },
        {
          "file": "starity-workshop.jpg",
          "caption": "手机实拍 04 / 谷子框装扮工坊：手绘、相册贴纸和定制方案，回应背景与小猫共同搭配的构思。"
        },
        {
          "file": "starity-search.jpg",
          "caption": "手机实拍 05 / 会话检索：关键词入口、角色筛选与结果摘要；截图中的会话和记录数量是拍摄时的界面状态。"
        }
      ],
      "outcomeTitle": "让协作留下连续的线索，也留下自己的审美。",
      "outcomes": [
        "形成时间线、任务、会话检索与装扮入口，并用五张手机实拍呈现。",
        "本机检索已验证关键词搜索与记录全文展开，可以找回真实历史对话。",
        "保留从个人使用需求、视觉构思到与小纪一起实现的协作过程。"
      ],
      "next": [
        "在真实手机使用中继续调整字号、间距和背景对比度，让长时间回看更舒服。",
        "观察时间线、任务与历史对话之间是否需要更直接的关联入口。",
        "继续检查跨设备使用时的状态衔接与记录管理。"
      ],
      "boundary": "展示范围：阿琳提供的五张手机实拍，以及另行验证的本机关键词检索和全文展开。同步徽标、记录数量与任务状态属于画面内容，不据此推断多端同步或使用成效已完成验证。",
      "pdfInsight": "让共同做过的事，可以重新接上。"
    }
  },
  "en": {
    "homemind": {
      "shortTitle": "HomeMind",
      "reading": "About 4 minutes",
      "question": "When the AI thinks it already understands, how do you leave the right to confirm with the person?",
      "contextTitle": "From an everyday need, toward an arrangement with a sense of measure.",
      "context": "Arrangements at home change: tired today, wanting to sleep in on the weekend, a room that is not convenient to clean for now. HomeMind explores letting people say these changes in everyday language, then putting the system's understanding in front of them, so they can decide what to do this time and whether to keep doing it later.",
      "tension": "The same sentence might affect only today, or it might be expressing a long-term preference. If the system treats one change as a habit right away, it can easily make a decision that surprises the person.",
      "response": "Show observations, guesses, and confirmed habits separately. First explain why it was understood this way, then give a clear scope, and let the person take part in the path from “maybe” to “certain.”",
      "processTitle": "Turn the process of understanding into an interaction a person can join.",
      "processIntro": "The path below is sorted out from the existing interface. The focus is the relationship from input to confirmation, and how each step lets the user know what the system is doing.",
      "flow": [
        {
          "title": "Say what is needed now",
          "body": "From the home screen, enter a conversation with Rocky and describe the hoped-for change in the words of daily life."
        },
        {
          "title": "See why it was understood that way",
          "body": "The conversation shows observations and guesses, and explains why the system offers this suggestion."
        },
        {
          "title": "Choose the scope of the change",
          "body": "Separate a one-time arrangement, a period of time, and a long-term habit, so what is agreed to is more specific."
        },
        {
          "title": "Check again in Growth",
          "body": "On the growth page, look at what is being understood, waiting for confirmation, and already learned."
        }
      ],
      "decisions": [
        {
          "title": "Explain the guess first, then invite confirmation",
          "body": "Place the basis of the observation next to the suggestion, so the user can understand where this judgment comes from before deciding whether to accept it. The conversation does not only receive instructions. It also explains.",
          "tradeoff": "One more step of reading, in exchange for a clearer expectation of automatic changes. The explanation needs to stay short enough not to take attention away from the task itself."
        },
        {
          "title": "Separate a one-time change from a long-term habit",
          "body": "Separate this cleaning, a phased adjustment, and a long-term preference. That way, “I don't want to clean today” does not easily become “don't clean from now on.”",
          "tradeoff": "One more scope has to be stated, but it reduces the ambiguity of one agreement being extended into a long-term rule."
        },
        {
          "title": "Give “not yet certain” a visible place",
          "body": "The growth page shows states such as being understood, waiting for confirmation, and waiting for the household to review. Items already learned keep showing whether they are in effect or still being watched, so forming a habit has a process you can look at.",
          "tradeoff": "There are more states than a simple switch, so they need to be organized by “whose turn it is to do what next,” rather than asking a person to learn backend terms."
        }
      ],
      "figures": [
        {
          "file": "home-chat.png",
          "caption": "Conversation prototype: the basis of an observation, the explained guess, and the adjustment options appear along the same exchange. Records and counts in the image are demo data."
        },
        {
          "file": "home-growth.png",
          "caption": "Growth prototype: separates what is being understood, waiting to be confirmed, and already learned, so a habit still forming has a place to check."
        },
        {
          "file": "home-family.png",
          "caption": "Family prototype: uses members and household information as background for arrangements in a shared life."
        }
      ],
      "outcomeTitle": "Give “understanding you” a process you can see.",
      "outcomes": [
        "Formed mobile screens for home, conversation, growth, and family, and kept an interactive prototype that can be talked about.",
        "Clarified the experience path “say a need → see the basis → choose a scope → check growth.”",
        "Separated the system's guess from the person's confirmation, so the boundary of automation is easier to discuss."
      ],
      "next": [
        "See whether a first-time user can tell “just this time” from “a long-term change,” then simplify the confirmation copy.",
        "When adjusting, cancelling, and completing, check that the plan summary and the item states stay consistent.",
        "Before connecting a real device, fill in what happens when execution fails, when something is undone, and when people disagree."
      ],
      "boundary": "Scope shown: product concept and interactive prototype screens. Screenshots include demo data. This case does not claim a real device is connected, and does not infer results of use from the sample counts.",
      "pdfInsight": "Understanding can be proposed by AI. A habit needs to be confirmed by a person."
    },
    "workbench": {
      "shortTitle": "Alin's Workspace",
      "reading": "About 3 minutes",
      "question": "When everyday things are scattered in different places, can a workspace grow according to a person's own habits?",
      "contextTitle": "Keep what you often look back at in front of you.",
      "context": "Time, notes, to-dos, and logs are not always used in the same order. Alin's Workspace starts from a personal desktop, treats these as parts that can be combined, and lets a person arrange what matters in front of them.",
      "tension": "A fixed layout is easy to understand, but it may not fit a different focus each day. A fully free canvas asks the person to spend time tidying.",
      "response": "Offer a starting point with small widgets that have a clear use, then leave position and visual mood to the person using them. What matters can come closer. What is not needed for now can step back.",
      "processTitle": "From “put it all in,” to “arrange it the way I need now.”",
      "processIntro": "The interactive fragment in the portfolio takes the spatial idea of the original: try moving a part, checking off a to-do, and changing a wallpaper, and feel the layout and the state change.",
      "flow": [
        {
          "title": "Find what you look at often",
          "body": "Use parts such as a clock, notes, and to-dos to first place everyday needs in one space."
        },
        {
          "title": "Arrange what matters now",
          "body": "Move the parts so what you are attending to is easier to reach. Use position to show weight."
        },
        {
          "title": "Leave a way to continue",
          "body": "Logs and daily archives in the original keep the process, so coming back to a task has a thread to follow."
        }
      ],
      "decisions": [
        {
          "title": "Use parts as a start, and leave the layout free",
          "body": "Inside a widget the use stays clear. Between widgets, rearranging is allowed. The clock keeps the time, the note catches a thought, the to-do holds the next step. They do not have to compete for the same structure.",
          "tradeoff": "Freedom costs tidying. The demo keeps a default position and a reset, so after trying something you can come back easily."
        },
        {
          "title": "Treat mood as a personal choice too",
          "body": "Wallpaper and color decide how this space feels. Making them light choices connects the workspace to a personal day.",
          "tradeoff": "Visual change has to give way to text that can be read. However the background changes, the edges and the content of the parts should stay clear."
        },
        {
          "title": "From a desktop overview into a more focused panel",
          "body": "keep running can be a brief status entry on the desktop. Opened, it shows each project's state and log. The everyday overview and the detail stay apart, so what is needed appears when it should.",
          "tradeoff": "The detail has more room, and a clear way back is still needed, so a person can return to the desktop they left."
        }
      ],
      "figures": [
        {
          "file": "workbench-desktop.png",
          "caption": "Screenshot 01 / everyday desktop: wallpaper, clock, log library, to-dos, and keep running sit together. The component bar at the bottom is the way into different content."
        },
        {
          "file": "workbench-runtime.png",
          "caption": "Screenshot 02 / keep running detail: the overview opens into project state, progress, and logs. Numbers on the screen show how information is organized. They are not proof of real running results."
        },
        {
          "file": "workbench-personal.png",
          "caption": "Screenshot 03 / custom desktop: a cat wallpaper, a music widget, and a desktop pet make a personal space together. The clock, to-dos, and the running entry stay visible."
        }
      ],
      "outcomeTitle": "Turn “work at your own pace” into a space you can touch.",
      "outcomes": [
        "Three real screenshots show the everyday desktop, the running detail, and a custom wallpaper.",
        "The portfolio offers a fragment where widgets can be dragged, a to-do checked, the wallpaper switched, and the layout reset.",
        "Puts the product idea, the spatial organization, and the visual mood into one case that can be talked about."
      ],
      "next": [
        "See which parts really need to stay on screen, and reduce what is piled there just to look complete.",
        "Keep exploring how a free layout stays readable at different screen sizes.",
        "With a real stretch of continued use, test whether logs and archives help a person get back into a task."
      ],
      "boundary": "Scope shown: three real interface screenshots from Alin, and a fragment of the experience on the web. Actions on the page are not saved to the original desktop app. States and numbers in the screenshots are not proof of measured efficiency, or of a tested service.",
      "pdfInsight": "Let the tool follow the order of a person's attention, and leave room to change it."
    },
    "digest": {
      "shortTitle": "Digest",
      "reading": "About 3 minutes",
      "question": "From thinking of something to finishing it, where should the hesitation, the pushing forward, and the confirmation go?",
      "contextTitle": "See where an idea sits, and then you know where the next step goes.",
      "context": "A thought may still need digesting, or it may already be ready to carry out. After a piece of work is done, it often still needs looking back at and confirming. Digest organizes these states in space, so a project's origin, its current progress, and its result are visible at the same time.",
      "tension": "If everything is crowded onto one to-do list, what is not yet thought through mixes with what should be done now. “Done” does not necessarily mean confirmed.",
      "response": "Organize the center into digest, execute, and settle, and keep distinctions such as to execute, in progress, to confirm, and confirmed. The left and right bars take locating and overview.",
      "processTitle": "Let the structure of the space show how a thing moves forward.",
      "processIntro": "The sketch and the current interface keep a similar three-part structure. What is sorted out here is how information is organized. Items and counts in the images are there to be shown. They are not a measure of how the product is used.",
      "flow": [
        {
          "title": "Digest: catch an idea that has not taken shape",
          "body": "First give materials and thoughts a place, and keep room to understand them and sort them further."
        },
        {
          "title": "Execute: separate preparing from doing",
          "body": "Separate to-execute from in progress, so what you are preparing to do and what you are doing are clearer."
        },
        {
          "title": "Settle: confirm after it is done",
          "body": "Use to-confirm and confirmed to receive the result, and leave a way in for review and for looking back later."
        }
      ],
      "decisions": [
        {
          "title": "Keep “finished” and “confirmed” distinct",
          "body": "Make to-confirm an explicit state, so entering the settle area does not mean it is over. The result can still be looked back at, and the project has room to close.",
          "tradeoff": "One more state is also one more thing to maintain. Each state should have a clear meaning, so the board itself does not become a burden."
        },
        {
          "title": "Locate on the left, move forward in the middle, overview on the right",
          "body": "The project and task tree help you find where you are. The center holds the current content. Stage summaries and tags sit on the right and fill in the overall picture. The three places answer different questions.",
          "tradeoff": "A wide screen can show more background at once. On a small screen, the task in the center should come first, and secondary information opens when it is needed."
        },
        {
          "title": "Keep the familiar space, then add the detail",
          "body": "From sketch to interface, keep the relationship of the three work areas and the side bars, then add visible entries such as search, tags, and filters, so the information becomes specific step by step.",
          "tradeoff": "More entries do not mean clearer. The design needs to keep checking which content serves the task at hand, and which should step back."
        }
      ],
      "figures": [
        {
          "file": "digest-draft.png",
          "caption": "Early interface sketch: first arranging the relationship between where a project sits, the three work areas, and the overview."
        },
        {
          "file": "digest-interface.png",
          "caption": "Current interface: keeps the main spatial structure, and makes the execute and confirm states, the tags, and the action entries more specific."
        }
      ],
      "outcomeTitle": "Make where a thought goes clearer than a row of checkboxes.",
      "outcomes": [
        "Kept the sketch beside the current interface, showing the path from information structure to a more specific screen.",
        "Clarified the spatial roles of digest, execute, and settle, and the confirmation after something is done.",
        "The portfolio offers a draggable before-and-after, so layout and visual change can be discussed directly."
      ],
      "next": [
        "Walk one real task through the whole process, and see which states are easy to mix up or to skip.",
        "Make clear what triggers content to move across areas, and how to take it back.",
        "On a narrower screen, check that the task in the center is still easy to understand after the side bars are put away."
      ],
      "boundary": "Scope shown: an interface sketch, a screenshot of the current interface, and the comparison interaction. The case focuses on how information is organized and on visual iteration. Sample counts in the screenshots do not represent actual use.",
      "pdfInsight": "Each stage has a place. Each result has a confirmation."
    },
    "starity": {
      "shortTitle": "Starity · Xiaoji",
      "reading": "About 3 minutes",
      "question": "Things done and talked through with AI — how do they leave a thread you can pick up again?",
      "contextTitle": "Put a shared experience somewhere you are willing to open often.",
      "context": "Starity grew out of my everyday collaboration with Xiaoji. Sometimes I want to note a bit of inspiration, sometimes to see how far a project has gone, and sometimes to find a conversation again. It gathers these needs into three entries — timeline, tasks, and conversations — and keeps a personal feel with cat stickers and a background that can be customized.",
      "tension": "A timeline suits looking back at what happened. Tasks suit arranging what to do next. A conversation keeps why it was thought that way at the time. The three are related, but they do not belong crowded onto one list.",
      "response": "Let the three entries take their own reading and their own actions, while keeping the same navigation, cards, and ground color. A person can move from looking back to acting, or return to a conversation to look for context.",
      "processTitle": "From looking back at the day, to acting, and to finding it again.",
      "processIntro": "The five images below are all real screens I provided from my phone, keeping the original type size, spacing, system status bar, and browser frame. They show everyday records, entering a task, another state of the timeline, the dress-up entry, and conversation search.",
      "flow": [
        {
          "title": "Look back at what happened",
          "body": "Dates, categories, and short records together make the timeline. “Today's little glow” and the cat stickers give the entry a familiar feel."
        },
        {
          "title": "Leave the next step",
          "body": "Tasks are grouped as under construction, to polish, and cruising. The place can be chosen when adding one, so there is less of the back-and-forth of writing it down and sorting it later."
        },
        {
          "title": "Find the conversation from then",
          "body": "Enter a keyword, filter by who was in the conversation, then expand a record to read the full text, so an idea that gets mentioned has a source to look back to."
        },
        {
          "title": "Change it to your own mood",
          "body": "From the merch frame, enter hand drawings, album stickers, and custom sets, and match the background together with the cat."
        }
      ],
      "decisions": [
        {
          "title": "Split looking back, action, and source into three entries",
          "body": "The timeline tells what happened. Tasks hold what to do. Conversation search answers how it was talked about then. The same visual language keeps a switch of content familiar.",
          "tradeoff": "You have to switch between entries, so each page needs to say clearly what it currently holds, and to keep the navigation light."
        },
        {
          "title": "Make dress-up part of the everyday experience",
          "body": "I proposed letting the Starity background echo and match the merch frame, and letting an outfit be changed at any time. The dress-up workshop organizes hand drawings, album stickers, and managing sets into choices that are easy to understand.",
          "tradeoff": "Background and texture can be rich. Text and controls still need to be clear enough. Decoration cannot get in the way of looking back or of entering something."
        },
        {
          "title": "Keep the source of the collaboration in real conversations",
          "body": "Conversation search offers a keyword, filtering by role, and expanding the full text. In a long collaboration, picking an idea back up requires being able to find how it was said before.",
          "tradeoff": "There is a lot of history. Summaries and filters should help narrow the range. The number of records on the screen only says how much content was there at the time. It is not the same as the quality of the search."
        }
      ],
      "figures": [
        {
          "file": "starity-timeline.jpg",
          "caption": "Phone photo 01 / everyday timeline: today's little glow, categories, and records arranged by date, with an entry for jotting something down."
        },
        {
          "file": "starity-tasks.jpg",
          "caption": "Phone photo 02 / task list: the add panel and the groups are visible at the same time, so a task's state can be chosen while entering it."
        },
        {
          "file": "starity-timeline-focus.jpg",
          "caption": "Phone photo 03 / another state of the timeline: a few points where a project landed stay on the same reading path."
        },
        {
          "file": "starity-workshop.jpg",
          "caption": "Phone photo 04 / merch frame dress-up workshop: hand drawings, album stickers, and custom sets, answering the idea of matching the background together with the cat."
        },
        {
          "file": "starity-search.jpg",
          "caption": "Phone photo 05 / conversation search: a keyword entry, role filters, and result summaries. The conversation and record counts in the screenshot are the state of the screen when the photo was taken."
        }
      ],
      "outcomeTitle": "Let the collaboration leave a continuous thread, and leave a taste of your own.",
      "outcomes": [
        "Formed entries for the timeline, tasks, conversation search, and dress-up, and showed them in five phone photos.",
        "Search on this device has been checked: keyword search and expanding the full text of a record can find a real past conversation.",
        "Kept the collaboration from a personal need and a visual idea through to building it together with Xiaoji."
      ],
      "next": [
        "In real use on a phone, keep adjusting type size, spacing, and background contrast, so looking back for a long time is more comfortable.",
        "See whether the timeline, tasks, and past conversations need a more direct way to connect to each other.",
        "Keep checking how state connects, and how records are managed, when it is used across devices."
      ],
      "boundary": "Scope shown: five phone photos from Alin, plus a separate check of keyword search on this device and of expanding the full text. Sync badges, record counts, and task states belong to the picture. They are not used here to infer that sync across devices, or results of use, have already been verified.",
      "pdfInsight": "Let what was done together be picked up again."
    }
  }
};

window.PORTFOLIO_CASES = {
  "zh": {
    "homemind": {
      "title": "HomeMind",
      "subtitle": "让家，有一点懂你。",
      "label": "01 / AI × EVERYDAY LIFE",
      "bg": "#19392d",
      "accent": "#d8efa2",
      "intro": "日常的需要，往往藏在不经意的一句话里。HomeMind 围绕家庭助手展开：用对话接住生活中的变化，把清洁安排、习惯形成与家庭信息连接为一个温和的移动体验。",
      "form": "AI 产品概念 / 移动交互原型",
      "role": "产品构思、交互设计与 AI 协同实现",
      "heading": "从被听见，<br>到被理解。",
      "features": [
        [
          "一个轻松的入口",
          "打开就是今日计划和对话入口，让下一次安排自然发生。"
        ],
        [
          "把重复变成习惯",
          "在“成长”里区分正在形成与已经学会的安排，把确认的权利留给人。"
        ],
        [
          "给变化留下位置",
          "一次清洁、一段时间、长期习惯，分别对应不同的使用情境。"
        ]
      ],
      "note": "这里展示提供的 HomeMind 交互原型界面，体现产品及交互设计；不代表已连接实际清洁设备。",
      "next": "workbench"
    },
    "workbench": {
      "title": "A little workspace.",
      "subtitle": "桌面，长成自己的样子。",
      "label": "02 / A SPACE OF YOUR OWN",
      "bg": "#142f3b",
      "accent": "#a0e4df",
      "intro": "待办、时间、日记和正在做的事，常常需要同时出现在眼前。阿琳工作台把它们变成可以移动、缩放和组合的部件，让布局适应当下的自己。",
      "form": "个人桌面工具 / Electron 原型",
      "role": "使用场景、交互构思与 AI 协同实现",
      "heading": "给秩序一个位置，<br>也给自己一点自由。",
      "features": [
        [
          "自由安排",
          "部件可以移动与组合，常用的内容留在手边。"
        ],
        [
          "日常与工作在一起",
          "待办、日历、日记、便签和主题共同构成个人空间。"
        ],
        [
          "看见正在做的事",
          "通过工作树与项目时间线整理任务和进展，为继续行动留下入口。"
        ]
      ],
      "note": "首页提供一个简化的交互片段；案例内三张实际截图分别呈现日常布局、运行面板与自定义壁纸。",
      "next": "digest"
    },
    "digest": {
      "title": "Digest.",
      "subtitle": "让想法，一步步落地。",
      "label": "03 / THOUGHTS INTO MOTION",
      "bg": "#30283f",
      "accent": "#d2b9f2",
      "intro": "一件事从出现到完成，中间有许多值得看见的状态。Digest 把这个过程展开为消化、执行与沉淀，让零散的任务拥有清楚的位置，也让进展更容易被理解。",
      "form": "工作看板 / 界面与交互探索",
      "role": "需求与体验构思、视觉迭代",
      "heading": "从一张草图，<br>长出可操作的秩序。",
      "features": [
        [
          "用空间表达进展",
          "三段清晰的区域，让一件事的状态能够被直观看见。"
        ],
        [
          "信息各有层次",
          "项目与任务在左侧，行动在中间，分类和进度在右侧。"
        ],
        [
          "从构思到界面",
          "保留早期草图与实际画面的对应关系，让设计取舍有迹可循。"
        ]
      ],
      "note": "本案例依据提供的 Digest 看板素材呈现设计过程。",
      "next": "starity"
    },
    "starity": {
      "title": "Starity",
      "subtitle": "和小纪，把日常留成微光。",
      "label": "04 / A LITTLE CONTINUITY",
      "bg": "#244b43",
      "accent": "#e2e9b7",
      "intro": "Starity 是我和 AI 伙伴小纪一起构思、打磨的个人空间。时间线接住发生过的事，任务保留下一步，会话检索找回曾经聊过的想法；背景与小猫贴纸，让这个入口也像自己的日常。",
      "form": "个人伴侣看板 / 移动网页与 PWA",
      "role": "需求与体验构思、审美方向、与小纪协同实现",
      "heading": "让事情有线索，<br>也让空间有自己的样子。",
      "note": "五张手机实拍由阿琳提供，保留原始页面与浏览器边框。",
      "next": "homemind"
    }
  },
  "en": {
    "homemind": {
      "title": "HomeMind",
      "subtitle": "Let home understand you, a little.",
      "label": "01 / AI × EVERYDAY LIFE",
      "bg": "#19392d",
      "accent": "#d8efa2",
      "intro": "Everyday needs often hide in an offhand sentence. HomeMind is built around a home assistant: conversation catches changes in life, and connects cleaning arrangements, habit forming, and household information into a gentle mobile experience.",
      "form": "AI product concept / mobile interaction prototype",
      "role": "Product idea, interaction design, and building it together with AI",
      "heading": "From being heard,<br>to being understood.",
      "features": [
        [
          "A light way in",
          "Open it and today's plan and the conversation are there, so the next arrangement can happen on its own."
        ],
        [
          "Turn repetition into a habit",
          "In “Growth,” separate arrangements that are forming from ones already learned, and leave the right to confirm with the person."
        ],
        [
          "Leave a place for change",
          "One cleaning, a stretch of time, and a long-term habit each correspond to a different situation of use."
        ]
      ],
      "note": "What is shown here is the provided HomeMind interaction prototype. It reflects the product and interaction design. It does not mean a real cleaning device is connected.",
      "next": "workbench"
    },
    "workbench": {
      "title": "A little workspace.",
      "subtitle": "A desktop, grown into its own shape.",
      "label": "02 / A SPACE OF YOUR OWN",
      "bg": "#142f3b",
      "accent": "#a0e4df",
      "intro": "To-dos, time, a diary, and what is being done often need to be in front of you at the same time. Alin's Workspace turns them into parts that can be moved, scaled, and combined, so the layout fits the person you are right now.",
      "form": "Personal desktop tool / Electron prototype",
      "role": "The situation of use, the interaction idea, and building it together with AI",
      "heading": "A place for order,<br>and a little freedom for yourself.",
      "features": [
        [
          "Arrange freely",
          "Parts can be moved and combined. What you use often stays at hand."
        ],
        [
          "The day and the work, together",
          "To-dos, a calendar, a diary, notes, and a theme make a personal space together."
        ],
        [
          "See what is being done",
          "A work tree and a project timeline sort tasks and progress, and leave a way in to continue."
        ]
      ],
      "note": "The home page offers a simplified interactive fragment. Three real screenshots in the case show the everyday layout, the running panel, and a custom wallpaper.",
      "next": "digest"
    },
    "digest": {
      "title": "Digest.",
      "subtitle": "Let an idea land, step by step.",
      "label": "03 / THOUGHTS INTO MOTION",
      "bg": "#30283f",
      "accent": "#d2b9f2",
      "intro": "From when something appears to when it is finished, there are many states worth seeing. Digest opens this process into digest, execute, and settle, so scattered tasks have a clear place, and progress is easier to understand.",
      "form": "Work board / an exploration of interface and interaction",
      "role": "The need and the experience, and visual iteration",
      "heading": "From one sketch,<br>an order you can work with.",
      "features": [
        [
          "Show progress in space",
          "Three clear areas, so the state of a thing can be seen directly."
        ],
        [
          "Information in layers",
          "Projects and tasks on the left, action in the middle, categories and progress on the right."
        ],
        [
          "From an idea to an interface",
          "Keep the early sketch in correspondence with the real screen, so a design tradeoff has a trail."
        ]
      ],
      "note": "This case presents the design process from the Digest board materials that were provided.",
      "next": "starity"
    },
    "starity": {
      "title": "Starity",
      "subtitle": "With Xiaoji, leave the everyday as a little glow.",
      "label": "04 / A LITTLE CONTINUITY",
      "bg": "#244b43",
      "accent": "#e2e9b7",
      "intro": "Starity is a personal space I conceived and refined together with my AI partner Xiaoji. The timeline catches what happened, tasks keep the next step, and conversation search finds ideas that were talked about. The background and the cat stickers make this entry feel like one's own day too.",
      "form": "Personal companion board / mobile web and PWA",
      "role": "The need and the experience, the aesthetic direction, and building it together with Xiaoji",
      "heading": "Give things a thread,<br>and the space a look of its own.",
      "note": "Five phone photos provided by Alin, keeping the original page and the browser frame.",
      "next": "homemind"
    }
  }
};

window.PORTFOLIO_LAB = {
  "zh": {
    "starity": {
      "symbol": "✧",
      "type": "A PLACE FOR YOUR THOUGHTS",
      "title": "让一闪而过的念头，<br>有一个可以回来的地方。",
      "description": "把思绪整理、对话检索和计划放在同一个 PWA 入口。为自己，也为长期相处的 AI 伙伴，留下连续的线索。",
      "chips": [
        "时间线",
        "计划",
        "对话检索"
      ],
      "status": "个人项目 · 本地原型"
    },
    "stone": {
      "symbol": "◈",
      "type": "AN AI WITH CONTINUITY",
      "title": "每次重新开始，<br>也能接住过去的自己。",
      "description": "围绕对话消化、记忆召回与上下文组织持续探索。基于开源项目定制，从 Reasonix 到 DSH，寻找更贴近个人需要的实现方式。",
      "chips": [
        "对话消化",
        "记忆召回",
        "开源定制"
      ],
      "status": "个人系统 · 持续迭代，部分插件仍在验证"
    },
    "xiaopi": {
      "symbol": "✳",
      "type": "A COMPANION WITH CONNECTIONS",
      "title": "从手机上的一句话，<br>连接手边的工具。",
      "description": "用移动聊天界面连接本地助手，把时间线、约定和工具能力逐步带进日常。游戏与设备感知等方向，仍在继续探索。",
      "chips": [
        "移动入口",
        "本地网关",
        "MCP 工具"
      ],
      "status": "个人项目 · 移动界面与本地桥接"
    }
  },
  "en": {
    "starity": {
      "symbol": "✧",
      "type": "A PLACE FOR YOUR THOUGHTS",
      "title": "Give a passing thought<br>a place to come back to.",
      "description": "Put sorting out thoughts, conversation search, and plans in the same PWA entry. Leave a continuous thread for yourself, and for an AI partner you spend a long time with.",
      "chips": [
        "Timeline",
        "Plans",
        "Conversation search"
      ],
      "status": "Personal project · local prototype"
    },
    "stone": {
      "symbol": "◈",
      "type": "AN AI WITH CONTINUITY",
      "title": "Each time you start again,<br>you can still catch your earlier self.",
      "description": "Still exploring conversation digest, memory recall, and how context is organized. Customized from open-source projects, from Reasonix to DSH, looking for an implementation closer to a personal need.",
      "chips": [
        "Conversation digest",
        "Memory recall",
        "Open-source custom"
      ],
      "status": "Personal system · still iterating; some plugins are still being checked"
    },
    "xiaopi": {
      "symbol": "✳",
      "type": "A COMPANION WITH CONNECTIONS",
      "title": "From one sentence on the phone,<br>connect the tools at hand.",
      "description": "A mobile chat connects to a local assistant, and gradually brings the timeline, agreements, and tool abilities into the day. Directions such as games and sensing the device are still being explored.",
      "chips": [
        "Mobile entry",
        "Local gateway",
        "MCP tools"
      ],
      "status": "Personal project · mobile interface and a local bridge"
    }
  }
};
