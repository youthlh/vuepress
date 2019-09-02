### \_.cloneDeep(value)

ps:这个方法类似 \_.clone，除了它会递归拷贝 value。（也叫深拷贝）。

### 引入版本 1.0.0

参数

- value (\*): 要深拷贝的值。

返回值

- (\*): 返回拷贝后的值。

例子

```ts
var objects = [{ a: 1 }, { b: 2 }];
var deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]); // => false
```

```js
 public deepCopy(data: any): any {
  let json = JSON.stringify(data);
  return JSON.parse(json);
  }
```
