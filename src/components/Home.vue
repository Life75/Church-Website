<template>
  <div class=" text-center justify-center">
    <div class="z-10 absolute text-center text-4xl justify-center items-center w-full float-left mt-96 text-5xl text-font text-white cursor-default ">
      GOD IS CRAZY ABOUT YOU, AND SO ARE WE! 
    </div>
    <el-carousel interval="3500" direction="vertical"  class="items-center opacity-90" arrow="never" :autoplay="true" indicator-position="none" :loop="true" :pause-on-hover="false" height="600px">
      <el-carousel-item>
        <video autoplay loop controls muted>
          <source src="../assets/church_vid/test_3sec.mp4" type="video/mp4" >
        </video>
      </el-carousel-item>
      <el-carousel-item>
        <video autoplay loop controls muted>
          <source src="../assets/church_vid/firstLady_3sec.mp4" type="video/mp4" >
        </video>
      </el-carousel-item>
      
      <el-carousel-item>
        <video autoplay loop controls muted>
          <source src="../assets/church_vid/pastor_13sec.mp4" type="video/mp4" >
        </video>
      </el-carousel-item>

      
      <el-carousel-item>
        <video autoplay loop controls muted>
          <source src="../assets/church_vid/test.mp4" type="video/mp4" >
        </video>
      </el-carousel-item>
    </el-carousel>
    <div class="pt-5 flex space-x-8 justify-center">
      <el-button
        style="color: #e5eaf3; width: 150px; font-size: large"
        :round="true"
        size="large"
        color="#7c3aed"
        >Testimonials</el-button
      >
      <el-button
        style="color: #e5eaf3; width: 150px; font-size: large"
        :round="true"
        size="large"
        color="#7c3aed"
        >Our History</el-button
      >
      <el-button
        style="color: #e5eaf3; width: 150px; font-size: large"
        :round="true"
        size="large"
        color="#7c3aed"
        >Learn More</el-button
      >
    </div>
    <span class="flex items-center justify-center">
      <div class="mt-20 w-1/4 justify-center items-center">
        <h1 class="text-5xl text-font pb-14 justify-center">Upcoming Events</h1>
        <div class="flex space-x-10">
          <el-carousel type="card" height="300px" interval="7000" indicator-position="none" style="width: 500px">
            <el-carousel-item>
              <Event/>
            </el-carousel-item>
            <el-carousel-item>
              <Event/>
            </el-carousel-item>
            <el-carousel-item>
              <Event/>
            </el-carousel-item>
          </el-carousel>
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
        <p class="text-xl text-font"> 11:00 a.m. - 12:30 p.m. CT</p>

        <p class="text-font text-2xl mt-10">Location</p>
        <p class="text-xl text-font">6292 Rambler Dr, Pensacola, FL 32505</p>
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


.glow {
  font-size: 80px;
  color: #fff;
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
}

@-webkit-keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
  }
}
</style>
