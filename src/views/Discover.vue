<template>
  <div class="discover">
    <div>discover page</div>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Discover",
  components: {
    "nav-bar": NavBar
  }
};
</script>
