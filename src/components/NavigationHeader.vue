<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    style="align-items: center; justify-content: center"
    :ellipsis="true"
    background-color="#E5EAF3"
    text-color="#07031A"
    active-text-color="#4B0082"
    class="text-font"
  >
    <el-menu-item index="0" style="">
      <el-image
        v-if="!checkIfPhone()"
        fit="cover"
        src="https://img.icons8.com/glyph-neue/64/null/cross.png" />

      <div class="flex flex-col text-center">
        <span class="text-font text-2xl" @click="homeRoute()"
          >Jesus Can Help Ministries</span
        >
        <span class="text-font text-xl text-gray-500 tracking-widest">Pensacola</span>
      </div>

      <router-link to="/"></router-link
    ></el-menu-item>
    <span class="px-44"></span>
    <el-menu-item style="font-size: 20px" index="1">
      <template #title> NEW HERE? </template>
    </el-menu-item>

    <el-menu-item style="font-size: 20px" index="1">
      <template #title> EVENTS </template>
    </el-menu-item>

    <el-menu-item style="font-size: 20px" index="1">
      <template #title> ABOUT US</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import router from "../router/main";

function checkIfPhone(): boolean {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true 
  } else {
    return false
  }
}

const activeIndex = ref("1");

function homeRoute() {
  router.push({ path: "/" });
}
</script>

<style>
.text-font {
  font-family: "Lora";
}
</style>
