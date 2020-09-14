<template>
  <div class="home">
    <div>home page</div>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Home",
  components: {
    "nav-bar": NavBar
  }
};
</script>
