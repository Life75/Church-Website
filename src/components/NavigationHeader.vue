<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    style="align-items: center; justify-content: center;"
    :ellipsis="true"
    background-color="#FBD46D"
    text-color="#07031A"
    active-text-color="#85ce61"
  >
    <el-menu-item index="0" style="">
      <div class="flex flex-col text-center ">
        <span class="test text-2xl" @click="homeRoute()">Jesus Can Help Ministries</span>
        <span class="test text-xl text-gray-500">Pensacola</span>
      </div>
      <router-link to="/"></router-link
    ></el-menu-item>

    <el-sub-menu style="padding-left: 16em" index="1">
      <template #title> New Here? </template>
    </el-sub-menu>
   
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import router from "../router/main";

const props = defineProps({
  title: { type: String, default: "" },
});

const activeIndex = ref("1");

function sortingRoutChange(route: string) {
  router.push({ path: `/Sorting/${route}` });
}

function dataStructureRouteChange(route: string) {
  router.push({ path: `/DataStructures/${route}` });
}

function homeRoute() {
  router.push({ path: "/" });
}

function getTitle(): string {
  if (props.title != "") {
    return props.title;
  }
  return "Sorting Algorithms";
}
</script>

<style>
.test {
  font-family: "Lora";
}
</style>
