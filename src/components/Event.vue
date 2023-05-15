<template>
<div class="max-w-sm rounded overflow-hidden shadow-lg  " >
  <img class="w-full" src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" alt="Sunset in the mountains">
  <div>Title</div>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 p-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base whitespace-normal">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
</template>


<script setup lang="ts">
  import { PropType, defineProps } from 'vue'
  import IEvent from '../Interfaces/IEvent';
  import router from '../router/main';
  
  defineProps({
    event: Object as PropType<IEvent>
  })

  function eventPush(): void{
    router.push('/Events') //push the current route params through 
  }

  //const currentDate = ref(new Date()) 

</script>

<style>
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>