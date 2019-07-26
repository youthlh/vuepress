---
sidebar: false
---

<h1>目录结构</h1>

Dev
├─── docs
│   └── .vuepress   // 配置目录
│   │    ├── public // 静态资源
│   │    ├──── img
│   │    ├────── geass-bg.ico // 图标
│   │    ├────── logo.jpg // 首页logo
│   │    └── config.js
│   ├── FAQ // 求索模块
│   │    ├── Console    // 一级目录 输出层
│   │    │      ├── img    // 博文引用 的 相关图片
│   │    │      │   ├── A001    // A001博文的图片库
│   │    │      │   └──── 001.jpg   
│   │    │      ├── A001.md    // 输出层
│   │    │      └── A002.md    // 输出层
│   │    ├── DigestionHeap // 一级目录 消化堆
│   │    │      ├── Digested.md    // 二级目录 消化过
│   │    │      ├── Digesting.md    // 二级目录 消化中
│   │    │      └── DigestWill.md    // 二级目录 待消化
│   │    ├── Pool // 静态池
│   │    │      ├── SkillStack.md    // 技术栈
│   │    │      └── Review.md    // 归去来
│   │    └── README.md  // 求索首页
│   ├── Store
│   │    ├── Anime    // 一级目录 动漫
│   │    │      └── README.md
│   │    ├── Apps // 一级目录 应用
│   │    │      ├── DownDoors.md    //  下载门户
│   │    │      └── OwnTest.md    //  博主测评
│   │    ├── Films // 一级目录 电影
│   │    │      └── README.md
│   │    └── README.md  // 仓库首页
│   ├── Thought
│   │    ├── Travels    // 一级目录 游记
│   │    │      └── beiPing.md   
│   │    ├── YearReview // 一级目录 年终回顾
│   │    │      ├── img    // 博文引用 的 相关图片
│   │    │      │   ├── 2018    // 2018博文的图片库
│   │    │      │   ├──── 001.jpg   
│   │    │      │   ├─——─ 002.jpg   
│   │    │      │   └──── 003.jpg   
│   │    │      ├── 2018.md    
│   │    │      └── 2019.md   
│   │    └── README.md  // 随笔首页
│   └── README.md   // 博客首页
└── package.json