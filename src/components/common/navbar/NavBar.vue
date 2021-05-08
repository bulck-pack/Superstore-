<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
   <div class="center"> <slot name="centered"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.nav-bar{
  height: 44px;
  display: flex;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100,100,100,0.1);
}
.left,.right {
  width: 60px;
}
.center {
  flex: 1;  /*当他就剩一个的时候就会整个占据*/
}

</style>
