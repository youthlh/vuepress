<template>
  <div id="app">
    {{aaaa}}
    <button @click="dong">{{DDD}}</button>
    <Button type="primary">Primary</Button>
  </div>
</template>

<style>
.success {
  background-color: green;
}

.error {
  background-color: red;
}
</style>
<script>
export default {
  data() {
    return {
      aaaa: "lihao",
      DDD: "点击"
    };
  },
  methods: {
    dong() {
      console.log("tag", "sadsadsadsad");
    }
  }
};
</script>