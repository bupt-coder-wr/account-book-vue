<template>
  <div class="record">
    <nav-bar></nav-bar>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Record",
  components: {
    "nav-bar": NavBar
  }
};
</script>
