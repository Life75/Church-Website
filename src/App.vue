<script setup lang="ts">
import NavigationHeader from "./components/NavigationHeader.vue"
import Footer from "./components/Footer.vue";
</script>

<template>
  <el-affix :offset="0">
    <NavigationHeader></NavigationHeader>
  </el-affix>
  <RouterView></RouterView>
  <el-affix :offset="0">
    <Footer></Footer>
  </el-affix>
</template>

<style>
   @font-face {
    font-family: 'Lora';
    src: url('https://fonts.googleapis.com/css?family=Lora&display=swap');
    
   }

</style>
