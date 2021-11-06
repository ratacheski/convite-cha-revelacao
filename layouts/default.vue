<template>
  <div class="app">
    <Nuxt />
  </div>
</template>

<style>
body {
  background-color: #cbc0fa;
  opacity: 0.8;
  background-image: linear-gradient(135deg, #cdf2e6 25%, transparent 25%),
    linear-gradient(225deg, #cdf2e6 25%, transparent 25%),
    linear-gradient(45deg, #cdf2e6 25%, transparent 25%),
    linear-gradient(315deg, #cdf2e6 25%, #cbc0fa 25%);
  background-position: 10px 0, 10px 0, 0 0, 0 0;
  background-size: 20px 20px;
  background-repeat: repeat;
}
#__nuxt,
#__layout {
  min-height: 100vh;
}
</style>
