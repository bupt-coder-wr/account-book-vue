<template>
  <div class="record-header">
    <div class="title-box">
      <div class="title-item title-box-record" @click="switchRoute('record')">
        记账
      </div>
      <div class="title-item title-box-report" @click="switchRoute('report')">
        报表
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "record-header",
  methods: {
    switchRoute(route) {
      this.$router.push(route);
    }
  }
};
</script>
<style lang="less" scoped>
.title-box {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .title-item {
    width: 50%;
    height: 3rem;
    line-height: 3rem;
    font-size: 1.6rem;
    padding: 0.2rem;
  }
}
</style>
