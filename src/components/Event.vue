<template>
    <el-card :body-style="{ padding: '0px'}">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        />
        <div style="padding: 14px">
          <span>{{ event?.title }}</span>
          <div class="bottom">
            <time class="time">{{ event?.date }}</time>
            <el-button :type="'primary'" color="#7c3aed" class="button" @click="eventPush()">More Details</el-button>
          </div>
        </div>
      </el-card>
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