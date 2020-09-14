<template>
  <div class="header-box">
    <span class="icon iconfont">&#58908;</span>
    <span class="title">{{ title }}</span>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      required: true,
      default: "这是一个title"
    },
    goBack: {
      type: Boolean
    }
  }
};
</script>
<style lang="less" scoped>
.iconfont {
  font-size: 2rem;
}
.header-box {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 2.8rem;
  line-height: 2.8rem;
  //   border: 1px black solid;
  span {
    float: left;
    left: 0;
  }
  .title {
    position: absolute;
    width: 100%;
    left: 50%;
    right: 50%;
    transform: translate(-50%);
    font-size: 1.4rem;
    font-weight: bolder;
  }
}
</style>
