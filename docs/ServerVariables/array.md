<h2>数组去重排序</h2>

```js
/**
 * 插入排序
 *arr=>[]
 *[12,45,12,54,76,4,2,4,76] =>[2, 4, 12, 45, 54, 76]
 */
function insertSort(arr) {
  arr = new Set(arr);
  arr = [...arr];
  let key;
  for (let j = 1; j < arr.length; j++) {
    let i = j - 1;
    key = arr[j];
    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i];
      i--;
    }
    arr[i + 1] = key;
  }
  return arr;
}
```

<h2>数组排序<冒泡法></h2>

```js
function bullSort(array) {
  var temp;
  for (var i = 0; i < array.length; i++) {
    for (var j = array.length - 1; j > i; j--) {
      if (array[j] < array[j - 1]) {
        temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }
  return array;
}
```

<h2>ES6  数组去重</h2>

```js
const items = new Set([1, 2, 3, 4, 5, 5]); //去重
const array1 = [...items]; //2.转为数组
```

<h2>数组中的最大值</h2>

```js
var arr = [23, 42, 34, 234, 123, 12, 31, 23, 234, 34, 534, 534, 234, 23, 4];
var max = arr.reduce(function(a, b) {
  return b > a ? b : a;
});
----------------------------------------------------------------------------
Math.max(...[14, 3, 77, 30]);=>77
Math.min(...[14, 3, 77, 30]);=>3
```
