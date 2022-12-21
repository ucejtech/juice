<template>
  <div class="loader">
    <div class="ldio">
      <div></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" type="text/css">
@keyframes ldio {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loader {
  width: 23px;
  height: 23px;
  display: inline-block;
  overflow: hidden;
  background: none;

  .ldio div {
    position: absolute;
    animation: ldio 1.01s linear infinite;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    box-shadow: 0 1.4000000000000004px 0 0 #f7f7f7;
  }
}
</style>
