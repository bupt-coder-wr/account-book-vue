<template>
  <div class="record">
    <Header title="记录"></Header>
    <NavBar></NavBar>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Record",
  components: {
    NavBar,
    Header
  }
};
</script>
