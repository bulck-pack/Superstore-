<template>
  <div class="tab-bar-item" @click="itemClick">

    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
    <!-- isActive 为 true 的时候显示active  使用插槽 会把传来的数据直接放在这个位置然后就找
    不到这个 class  一般不会再插槽内使用动态的东西  我们可以使用div 内装着插槽 在div内
    更改动态的样式-->
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String ,  // 父传子 并要求数据类型
    activeColor:{
      path:String,
      default:'red'  // 给了一个默认值
    }
  },
  data() {
    return {
      // isActive: true
    }
  },
  computed: {
    isActive() {

      //  利用indexOf 进行判断 如果没找到相应的字符串则返回 -1
      // /home -> item1(/home) = true
      // /home -> item2(/category) = false
      // /home -> item3(/porfile) = false
      // /home -> item4(/shoppingcat) = false

      return this.$route.path.indexOf(this.path) !== -1    /* 拿到处于活跃的路径与自己的path进行比较 如果找到一样就 返回 !-1   */
    },
    activeStyle() {
      return  this.isActive ? {color:this.activeColor} : {}   // 如果 isActive为true则使用 color 为false则是空值 直接使用默认值
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>

.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>
