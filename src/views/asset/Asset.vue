<template>
  <div class="asset">
    <div>asset page</div>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Asset",
  components: {
    "nav-bar": NavBar
  }
};
</script>
