<script setup lang="ts">
import NavigationHeader from "./components/NavigationHeader.vue"
</script>

<template>
  <el-affix :offset="0">
    <NavigationHeader></NavigationHeader>
  </el-affix>
  <RouterView></RouterView>
</template>

<style>
   @font-face {
    font-family: 'Lora';
    src: url('https://fonts.googleapis.com/css?family=Lora&display=swap');
    
   }

</style>
