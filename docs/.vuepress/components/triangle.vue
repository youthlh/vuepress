<template>
  <div id="triangle">
    <div class="triangle"></div>
  </div>
</template>
<style lang="stylus">
.triangle {
  height: 0px;
  width: 0px;
  border-right: 50px solid green;
  border-left: 50px solid yellow;
  border-bottom: 50px solid red;
  border-top: 50px solid blue;
  position: relative;
  display: inline-block;
  left: 0;
  top: 0;
  animation: mymove 8s cubic-bezier(0, 2.31, 1, -1.09) infinite;
}

@keyframes mymove {
  0% {
    transform: rotate(0deg) scale(1, 1);
    left: 0px;
  }

  25% {
    left: 500px;
    transform: rotate(1440deg) scale(.5, .5);
    border-right-color: #000000;
    border-left-color: #000000;
    border-bottom-color: #ffffff;
    border-top-color: #ffffff;
  }

  50% {
    transform: rotate(-1440deg) scale(.75, 0.75);
    left: 250px;
    border-right-color: #17eca5;
    border-left-color: #e91e63;
    border-bottom-color: #009688;
    border-top-color: #00bcd4;
  }

  75% {
    left: 500px;
    transform: rotate(0deg) scale(1, 1);
    border-right-color: green;
    border-left-color: yellow;
    border-bottom-color: red;
    border-top-color: blue;
  }

  100% {
    left: 0px;
    transform: rotate(1440deg) scale(.5, .5);
    border-right-color: #000000;
    border-left-color: #000000;
    border-bottom-color: #ffffff;
    border-top-color: #ffffff;
  }
}
</style>
