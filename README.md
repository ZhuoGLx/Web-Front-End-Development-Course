# WebFrontCourse

Web 前端课程作业项目集合，包含阶段性课堂练习、课后练习以及课程设计项目。仓库内容以 HTML、CSS、JavaScript 静态前端代码为主，适合用于课程作业展示、知识点复习和本地运行演示。

本 README 只描述项目结构、运行方式和功能模块，不记录姓名、学号、团队成员等人物信息。

## 项目内容

```text
.
|-- Practice/                  # 阶段练习与课后练习
|   |-- Practice_1/             # 前端开发训练营页面，包含基础 HTML 排版与多媒体内容
|   |-- Practice_2/             # 页面样式练习，包含课程页与个人名片类页面
|   |-- Practice_3/             # 商品卡片页面，练习图片、卡片和列表布局
|   |-- Practice_4/             # 图书推荐静态页面，练习页面结构、表格、表单和基础布局
|   |-- Practice_5/             # 学生成绩管理程序，练习 JavaScript 数据处理
|   |-- Practice_6/             # 图书推荐交互页面，练习 DOM 操作与动态渲染
|   |-- Practice_7/             # 图书推荐综合页面，包含收藏、海报、公告和订阅联系等交互
|   |-- AfterClass_1/           # 课后页面改造练习
|   `-- AfterClass_2/           # 课后基础页面练习
|
|-- CourseFinalWork/
|   `-- 源代码/                 # CityGo 城市旅行介绍网站课程设计源码
|
|-- WebFrontCourse/             # 同名嵌套目录，保留了一份课程项目内容副本
|-- PPT/                        # 已通过 .gitignore 忽略
|-- .gitignore
`-- README.md
```

## 技术栈

- HTML5：页面结构、语义化标签、表格、表单、图片、视频等内容组织。
- CSS3：盒模型、Flex/Grid 布局、响应式页面、卡片样式、动画和页面视觉设计。
- JavaScript：DOM 操作、事件处理、表单校验、数据渲染、数组对象处理和本地交互逻辑。
- localStorage：在课程设计项目中模拟用户、登录状态、收藏和日记数据。
- Canvas：在课程设计项目中绘制统计图。
- Drag and Drop API：在课程设计项目中实现拖拽收藏。
- Leaflet：在课程设计项目中实现旅行足迹地图展示。

## 练习项目概览

| 目录 | 主要内容 | 入口文件 |
|---|---|---|
| `Practice/Practice_1` | 前端开发训练营页面，练习 HTML 结构、表格、多媒体和基础排版 | `index.html` |
| `Practice/Practice_2` | 课程页样式改造与名片页面，练习 CSS 基础样式 | `2-1.html`, `2-2.html` |
| `Practice/Practice_3` | 商品卡片展示页，练习图片资源、卡片布局和商品信息排版 | `index.html` |
| `Practice/Practice_4` | 书林图书推荐静态页面，包含推荐图书、活动公告、订阅联系等模块 | `index.html` |
| `Practice/Practice_5` | 学生成绩管理程序，练习 JavaScript 输入、计算、统计和输出 | `index.html` |
| `Practice/Practice_6` | 图书推荐页面增强版，加入 JavaScript 动态内容和页面交互 | `index.html` |
| `Practice/Practice_7` | 图书推荐综合页面，加入拖拽收藏、推荐海报、公告和表单模块 | `index.html` |
| `Practice/AfterClass_1` | 课后页面仿写与改造练习 | `AfterClass_1.html` |
| `Practice/AfterClass_2` | 课后基础页面练习 | `AfterClass_2.html` |

## 课程设计项目：CityGo

`CourseFinalWork/源代码` 是一个纯前端城市旅行介绍网站，主题为 CityGo 城市旅行。项目不依赖后端服务，主要通过浏览器本地存储模拟用户数据和业务状态。

主要页面包括：

| 页面 | 文件 | 功能 |
|---|---|---|
| 首页 | `index.html` | 城市风景轮播、热门城市推荐、搜索筛选、路线切换、拖拽收藏 |
| 分类浏览 | `category.html` | 按城市类型筛选和展示城市卡片 |
| 城市详情 | `city.html` | 根据 URL 参数展示城市景点、美食、文化、路线和提示 |
| 登录 | `login.html` | 用户登录与状态写入 |
| 注册 | `register.html` | 用户注册与表单校验 |
| 用户页面 | `user.html` | 展示当前用户资料和快捷入口 |
| 旅行心愿单 | `wishlist.html` | 查看、移除、清空收藏城市 |
| 旅行日记 | `diary.html` | 新增、编辑、删除和查看旅行日记 |
| 旅行足迹 | `footprint.html` | 使用地图展示已收藏或已记录的城市 |
| 联系我们 | `contact.html` | 留言表单和基础校验 |
| 关于网站 | `about.html` | 项目说明与 Canvas 统计图 |

课程设计源码中的主要脚本：

- `script.js`：首页数据、轮播、搜索筛选、分页、路线切换和拖拽收藏。
- `city.js`：城市详情数据与详情页动态渲染。
- `city-modal.js`：城市详情弹窗与收藏入口。
- `auth.js`：登录、注册、表单校验和用户状态管理。
- `user-nav.js`：全站导航栏登录状态同步。
- `wishlist.js`：心愿单读取、渲染、删除和清空。
- `diary.js`：旅行日记新增、编辑、删除、详情和影像册。
- `footprint.js`：旅行足迹地图、城市标记和日记联动。
- `seed-data.js`：演示数据初始化。

## 运行方式

### 直接打开

大部分练习项目是静态页面，可以直接在浏览器中打开对应目录下的 HTML 文件，例如：

```text
Practice/Practice_7/index.html
CourseFinalWork/源代码/index.html
```

### 使用本地静态服务器

课程设计项目包含 JSON、图片、视频、本地存储和地图等内容，推荐使用本地服务器运行。

```bash
cd CourseFinalWork/源代码
python -m http.server 8080
```

然后在浏览器访问：

```text
http://localhost:8080/index.html
```

如果使用 WebStorm 或 VS Code，也可以通过内置预览、Live Server 或浏览器打开功能运行。

## 数据与资源说明

- 项目主要为静态前端代码，未连接真实后端数据库。
- CityGo 使用 `localStorage` 模拟用户、登录状态、心愿单和旅行日记等数据。
- CityGo 的图片、视频和演示素材位于 `CourseFinalWork/源代码/resource/`。
- `footprint.html` 使用 Leaflet 和在线地图瓦片，地图底图需要网络连接才能正常加载。
- 如果需要重置本地演示数据，可以在浏览器开发者工具中清除当前站点的 Local Storage。

## Git 忽略规则

当前 `.gitignore` 已忽略以下内容：

```gitignore
/.idea
/PPT
*.ppt
*.pptx
*.zip
*.doc
*.docx
*.pdf
```

因此仓库主要保留可运行的前端源码和必要静态资源，不纳入 PPT、压缩包、Word、PDF 等课程提交附件。

## 学习重点

本项目集合覆盖了 Web 前端课程中的常见知识点：

- HTML 页面结构与语义化组织。
- CSS 基础选择器、盒模型、Flex/Grid、响应式布局和视觉样式。
- JavaScript 基础语法、数组对象、函数封装和 DOM 交互。
- 表单输入、校验、提示和结果回显。
- 图片、视频、卡片、表格、导航和页脚等常用页面模块。
- 浏览器本地存储、Canvas 绘图、拖拽交互和第三方地图库的综合应用。

## 说明

本仓库用于 Web 前端开发课程学习与作业展示。README 中已主动省略所有人物相关信息，并只围绕项目代码、功能和运行方式进行说明。
