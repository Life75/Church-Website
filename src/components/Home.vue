<template>
  <div class=" text-center justify-center">
    <div class="z-10 absolute text-center text-4xl justify-center items-center w-full float-left mt-96 text-5xl text-font text-white cursor-pointer ">
      GOD IS CRAZY ABOUT YOU, AND SO ARE WE! 
    </div>
    <el-carousel class="items-center opacity-90" :autoplay="true" height="600px">
      <el-carousel-item v-for="item in 3" :key="item" >
        <div :class="`background${item} brightness-50 absolute blur-sm `"></div>
       
      </el-carousel-item>
    </el-carousel>
    <div class="pt-5 flex space-x-8 justify-center">
      <el-button
        style="color: #e5eaf3; width: 150px; font-size: large"
        :round="true"
        size="large"
        color="#4B0082"
        >Testimonials</el-button
      >
      <el-button
        style="color: #e5eaf3; width: 150px; font-size: large"
        :round="true"
        size="large"
        color="#4B0082"
        >Our History</el-button
      >
      <el-button
        style="color: #e5eaf3; width: 150px; font-size: large"
        :round="true"
        size="large"
        color="#4B0082"
        >Learn More</el-button
      >
    </div>
    <span class="flex items-center justify-center">
      <div class="mt-20 w-1/4 justify-center items-center">
        <h1 class="text-5xl text-font pb-14 justify-center">Current Events</h1>
        <div class="flex space-x-10">
          <Event />
        </div>
      </div>
    </span>
    <el-divider></el-divider>
    <div class="flex-col h-44 bg-violet-200 bg-opacity-60">
      <div class="h-1/3"></div>
      <h1 class="flex items-center justify-center text-font text-4xl">
        Service Times & Location
      </h1>
      <div>
     
      
      </div>
      
    </div>
    <el-divider></el-divider>
    <div class="flex justify-center mb-10">
      <span>
        <p class="text-font text-2xl p-2">Sunday Service</p>
        <p class="text-xl text-font"> 11:30 a.m. - 1:00 p.m. </p>

        <p class="text-font text-2xl mt-10">Location</p>
        <p class="text-xl text-font">6300 Rambler Dr, Pensacola, FL 32505</p>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import Event from "./Event.vue";
</script>

<style>
.text-font {
  font-family: "Muli";
}

.background0 {
  background: #eee url(../assets/church_img/Front-view.jpg);
  background-position: 30% 30%;
  width: 100%;
  height: 100%;
  text-indent: -9999px;
}

.background1 {
  background: #eee url(../assets/church_img/inside-looking-in.jpg);
  background-position: 50% 40%;
  width: 100%;
  height: 100%;
  text-indent: -9999px;
}

.background2 {
  background: #eee url(../assets/church_img/inside.jpg);
  background-position: 50% 70%;
  width: 100%;
  height: 100%;
  text-indent: -9999px;
}

.background3 {
  background: #eee url(../assets/church_img/outside-side.jpg);
  background-position: 50% 35%;
  width: 100%;
  height: 100%;
  text-indent: -9999px;
}

.container {
  display: grid;
}

.content,
.overlay {
  grid-area: 1 / 1;
}
</style>
