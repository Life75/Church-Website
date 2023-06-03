<template>
  <div class="text-center justify-center">
    <div
      v-if="!checkIfPhone()"
      class="z-10 absolute text-center text-4xl justify-center items-center w-full float-left mt-96 text-5xl text-font text-white cursor-default uppercase"
    >
      Where Hope Rises and Miracles Flourish
    </div>
    <div style="">
      <el-carousel
        :interval="3500"
        direction="vertical"
        class="items-center opacity-90 justify-center brightness-50"
        style="
          background-color: black;
          align-items: center;
          justify-content: center;
          object-fit: fill;
        "
        arrow="never"
        :autoplay="true"
        indicator-position="none"
        :loop="true"
        :pause-on-hover="false"
        :height="setHeight()"
      >
        <el-carousel-item style="object-fit: fill">
          <video loop muted autoplay webkit-playsinline playsinline>
            <source src="../assets/church_vid/test_3sec.mp4" type="video/mp4" />
          </video>
        </el-carousel-item>
        <el-carousel-item>
          <video loop muted autoplay webkit-playsinline playsinline>
            <source src="../assets/church_vid/firstLady_3sec.mp4" type="video/mp4" />
          </video>
        </el-carousel-item>

        <el-carousel-item>
          <video loop muted autoplay webkit-playsinline playsinline>
            <source src="../assets/church_vid/pastor_13sec.mp4" type="video/mp4" />
          </video>
        </el-carousel-item>

        <el-carousel-item>
          <video loop muted autoplay webkit-playsinline playsinline>
            <source src="../assets/church_vid/test.mp4" type="video/mp4" />
          </video>
        </el-carousel-item>

        <el-carousel-item>
          <video loop muted autoplay webkit-playsinline playsinline>
            <source src="../assets/church_vid/thomas_16sec.mp4" type="video/mp4" />
          </video>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="pt-5 flex space-x-8 justify-center">
      <el-button
        style="color: #e5eaf3; width: 150px; font-size: large"
        :round="true"
        size="large"
        color="#611f69"
        @click="router.push('/Testimonials')"
        >Testimonials</el-button
      >
      <el-button
        style="color: #e5eaf3; width: 150px; font-size: large"
        :round="true"
        size="large"
        color="#611f69"
        @click="router.push('/Pastor')"
        >Our Pastor</el-button
      >
    </div>
    <div class="pt-6"></div>
    <span class="flex-row items-center justify-center">
      <h1 class="text-5xl text-font mb-4 justify-center mt-7">Upcoming Events</h1>
      <div class="flex justify-center content-center">
        <Event />
      </div>
    </span>
    <el-divider></el-divider>
    <div class="flex-col md:h-44 h-32 bg-[#8d73b0] bg-opacity-60">
      <div class="h-1/3"></div>
      <h1 class="flex items-center justify-center text-font md:text-4xl text-3xl">
        Service Times & Location
      </h1>
      <div></div>
    </div>
    <el-divider></el-divider>
    <div class="flex justify-center items-center-center mb-10">
      <span class="flex-col justify-center items-center">
        <p class="text-font text-2xl p-2">Sunday Service</p>
        <p class="text-xl text-font">11:00 a.m. - 12:30 p.m. CT</p>

        <p class="text-font text-2xl mt-10">Location</p>
        <span class="flex-col text-center">
          <p class="text-xl text-font">6292 Rambler Dr, Pensacola, FL 32505</p>
          <iframe
            class="pt-5 align-middle justify-center"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3438.6122700096034!2d-87.26391352209343!3d30.47541847470954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8890bfb54fb26359%3A0x5910671504542cc6!2s6292%20Rambler%20Dr%2C%20Pensacola%2C%20FL%2032505!5e0!3m2!1sen!2sus!4v1685304135713!5m2!1sen!2sus"
            width="200"
            height="200"
            style="border: 0"
            allowfullscreen="false"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import Event from "./Event.vue";
import router from "../router/main";
//use these colors https://realtimecolors.com/?colors=000000-ffffff-611f69-f4ede4-ecb22e

function setHeight(): string {
  if (checkIfPhone()) {
    return "220px";
  } else return "700px";
}

function checkIfPhone(): boolean {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  } else {
    return false;
  }
}
</script>

<style>
.text-font {
  font-family: "Muli";
}

.primary-button {
  padding: 1em 2em;
  background-color: var(--primbuttn);
  color: var(--secondary);
  border-radius: 6px;
  transition: transform ease 0.2s, box-shadow ease 0.2s;
  display: inline-block;
  font-size: 18px;
  z-index: 2;
}

video {
  height: auto;
  width: 100%;
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
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073,
      0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6,
      0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
  }
}
</style>
