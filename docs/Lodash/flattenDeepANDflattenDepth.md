## flattenDeep(递归为一维数组)

#### _.flattenDeep(array)

ps:将 array 递归为一维数组。

#### 引入版本 3.0.0

参数

- array (Array): 需要处理的数组。

返回值
q

- (Array): 返回一个的新一维数组。

例子

```ts
_.flattenDeep([1, [2, [3, [4]], 5]]); // => [1, 2, 3, 4, 5]
```

## flattenDepth(递归为一维数组(可以指定递归层级))

#### \_.flattenDepth(array, [depth=1])

ps:根据 depth 递归减少 array 的嵌套层级

#### 引入版本 4.4.0

参数

- array (Array): 需要减少嵌套层级的数组。
- `[depth=1]`(number):最多减少的嵌套层级数。

返回值
q

- (Array): 返回减少嵌套层级后的新数组。

例子

```ts
var array = [1, [2, [3, [4]], 5]];
_.flattenDepth(array, 1); // => [1, 2, [3, [4]], 5]
_.flattenDepth(array, 2); // => [1, 2, 3, [4], 5]
```
