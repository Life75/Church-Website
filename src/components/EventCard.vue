<template>
    <div class=" w-[425px] bg-white shadow-md hover:shadow-xl">
        <div v-if="!showMoreDetails" class="relative">
            <div class="absolute top-0  w-20 h-20 bg-purple-400 flex flex-col items-center justify-center text-lg font-semibold">
                <p>22</p>
                <p>MAR</p>
            </div>
            <img v-if="eventForm?.imageID === 'undefined'" class="h-full" src="https://images.pexels.com/photos/20479821/pexels-photo-20479821/free-photo-of-leaves-in-dew.jpeg" alt="">
            <img v-else class="h-full" :src="url"/>
            <div v-if="eventForm?.imageID !== 'undefined'" class="absolute flex justify-center items-center pr-20 bottom-0 h-16 text-center w-full bg-gray-400  bg-opacity-50 text-white text-2xl font-semibold">
                 <p class="">{{ props.eventForm?.title }}</p></div>
        </div>
        <div class="p-6 flex flex-col gap-5">

            <p :class="` ${showMoreDetails ? 'line-clamp-none' : 'line-clamp-3'}`">
                {{ props.eventForm?.description }}
            </p>
        
            <button class="btn bg-blue-300 rounded-sm w-32 ml-auto" @click="showMoreDetails = !showMoreDetails">More Details</button>
        </div>
        
   </div>
</template>

<script setup lang="ts">
import {onBeforeMount, ref} from 'vue'
import Event from '../Interfaces/Event';
import EventRepository from '../repository/EventRepository';
import EventService from '../services/EventService';
const props = defineProps({
    eventForm: {type: Event}
})

let showMoreDetails = ref(false)
let url = ref("")

onBeforeMount(async () => {
    //get card image 
    if(props.eventForm?.imageID != "undefined") {
        //request image 
        const service = new EventService(new EventRepository())
       
        
        props.eventForm ? url.value = await service.GetImage(props.eventForm?.imageID.toString()) : undefined 
    }
})

//check if the event has passed to warn for deleting 
</script>

<style>
</style>