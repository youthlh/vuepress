```html
和图标/图片等静态资源相关的 其 '/' 默认指向的是 docs/.vuepress/public/
和侧边栏/导航栏相关的地址配置 其 '/' 默认指向的是 docs/
侧边栏/导航栏指向.md文件的需要先建立相关.md文件，不然会报404或者页面空白
```

::: v-pre
`{{ This will be displayed as-is }}`
:::

<a href='/ServerVariables/apiword/' target="_blank">apiword 链接</a>
<span v-for="i in 5">{{ i }} </span>
[[toc]]

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

<ul class="_ul">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
</ul>

<style lang="stylus">._ul
/* 选择器插值 */
  for row in 1 2 3 4 5
    li:nth-child({row})
      height 10px * row
      width 5px *row
      background red
      margin-top 2px * row
      
      </style>

<!-- 引入代码左上角波浪号中的 (你所写语法) ```` 是html就 html 是 css ``` 给写css -->
<!-- 注释需要打开 这样vuepress会把这里面包裹的当成代码块而不是js -->

```js
{{}} 啦 {{}} // 注释需要打开 这样vuepress会把这里面包裹的当成代码块而不是js
```

```html
<common-date (dateChange)="dataChange($event)" _date></common-date>
```
