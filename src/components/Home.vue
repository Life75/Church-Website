<template>
   <div class="block text-center">
    <span class="w-2/3">
    <el-carousel class="items-center"  autoplay="true" height="900px">
      <el-carousel-item v-for="item in 4" :key="item">
      <div class="background">
      </div>
    
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </span>
  </div>
</template>
  
  <script setup lang="ts"></script>
  
  <style>
    .someSelector {
      font-family: 'Muli';
    }

    .background {
      background: #eee url(../assets/church_img/Front-view.jpg) ;
      background-position: 30% 30%;
            width: 100%;
            height:100%;
            text-indent: -9999px;
    }



  </style>