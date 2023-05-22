<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    style="align-items: center; justify-content: center"
    :ellipsis="true"
    background-color="#f9eeea"
    text-color="#07031A"
    active-text-color="#4B0082"
    class="text-font"
  >
    <el-menu-item index="0" style="" @click="homeRoute()">
   

      <div class="flex flex-col text-center" >
        <span class="text-font lg:text-2xl text-xl" 
          >Jesus Can Help Ministry</span
        >
        <span class="text-font lg:text-xl text-lg text-gray-500 tracking-widest">Pensacola</span>
      </div>

      <router-link to="/"></router-link
    ></el-menu-item>
    <span class="lg:px-44"></span>

    <el-menu-item style="" index="1">
      <template #title> 
        <el-tooltip
        class="box-item"
        effect="dark"
        content="Coming Soon!"
        placement="bottom-end"
      >
      <p class="text-xl">EVENTS</p> 
        </el-tooltip>
      </template>
    </el-menu-item>

    <el-menu-item style="" index="1">
      <template #title> 
        <el-tooltip
        class="box-item"
        effect="dark"
        content="Coming Soon!"
        placement="bottom-end"
      >
      <p class="lg:text-xl">ABOUT US</p> 
        </el-tooltip>
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import router from "../router/main";



const activeIndex = ref("1");

function homeRoute() {
  router.push({ path: "/Church-Website" });
}
</script>

<style>
.text-font {
  font-family: "Lora";
}
</style>
