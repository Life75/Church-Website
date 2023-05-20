<template>
<div class="max-w-sm rounded overflow-hidden shadow-lg shadow-[#4a2849]  " >
  <img class="w-full" src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" alt="Sunset in the mountains">

  <div class="px-6 py-2">
    <div class="font-bold text-xl mb-2 p-2 text-[#4a2849]">Fellowship and Worship</div>
    <p class="text-gray-700 text-base whitespace-normal">
      Experience the indescribable joy that arises when we wholeheartedly worship Jesus Christ. Dive into the awe-inspiring presence of the Almighty, where our souls are ignited with reverence, gratitude, and love. Explore the transformative power of worship as it draws us closer to our Savior, inviting us into a sacred communion with the divine. Through the melodic symphony of praise, heartfelt prayers, and the proclamation of His word, we find solace, healing, and strength. Delve into the exhilarating journey of worship, where we surrender our burdens, offer our adoration, and encounter the profound joy that comes from aligning our hearts with the One who is worthy of all praise.
    </p>
  </div>
  <div ref="date" class="text-gray-400">
    {{ new Date }}
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#christianity</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#worship</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#autumn</span>
  </div>
</div>

</template>


<script setup lang="ts">
  import { PropType, defineProps } from 'vue'
  import IEvent from '../Interfaces/IEvent';
  
  defineProps({
    event: Object as PropType<IEvent>
  })

  

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