<template>
  <div class="home">
    <Header headerTitle="我的"></Header>
    <Scroll>
      <div>home page</div>
      <div class="user-info-box">
        <img src="@/assets/OIP.jpeg" class="center" />
        <div class="info">
          <span class="user-name"></span>
          <span class="user-slogan"></span>
        </div>
      </div>
    </Scroll>
    <NavBar></NavBar>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Header from "@/components/Header.vue";
import Scroll from "@/components/Scroll.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Header,
    Scroll
  }
};
</script>
<style lang="less" scoped>
.user-info-box {
  position: relative;
  width: 100%;
  height: 5rem;
  background-color: lightpink;
  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 1.6rem;
  }
  .info {
  }
}
</style>
