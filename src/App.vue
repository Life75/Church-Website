<script setup lang="ts">
import NavigationHeader from "./components/NavigationHeader.vue"
import Footer from "./components/Footer.vue";


</script>

<template>
   <div class="flex flex-col ">

   <div >
      <NavigationHeader></NavigationHeader>
    </div> 

  <RouterView class="flex-1 "></RouterView>

  <div class="flex justify-center items-center">
    <Footer class="footer "></Footer>
  </div> 

  </div>
</template>

<style>
   @font-face {
    font-family: 'Lora';
    src: url('https://fonts.googleapis.com/css?family=Lora&display=swap');
    
   }



   #footer{
    position:fixed;
    bottom:0;
}

#app {
    min-height: 100vh; 
    margin: 0; 
    display: grid;
    grid-template-rows: 1fr auto;
    font-family: 'Lora';
    src: url('https://fonts.googleapis.com/css?family=Lora&display=swap');
    
}

</style>
