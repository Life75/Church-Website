<template>
    <div v-show="!isLoading" class="  bg-white shadow-md hover:shadow-xl">
        <div class="relative">
            <div class="absolute top-0  w-20 h-20 bg-purple-400 flex flex-col items-center justify-center text-lg font-semibold">
                <p>{{ getDay() }}</p>
                <p class="uppercase">{{ getMonth() }}</p>
            </div>
            <img v-if="eventForm?.imageID === 'undefined'" class="h-full " src="https://images.pexels.com/photos/20479821/pexels-photo-20479821/free-photo-of-leaves-in-dew.jpeg" alt="">
            <img v-else class="h-full" :src="url"/>
            <div v-if="eventForm?.imageID !== 'undefined'" class="absolute flex justify-center items-center pr-20 bottom-0 h-16 text-center w-full bg-gray-400  bg-opacity-50 text-white text-2xl font-semibold">
                 <p class="">{{ props.eventForm?.title }}</p></div>
        </div>
        <div class="p-3 flex flex-col gap-5 h-full ">
            <p :class="` text-wrap  ${showMoreDetails ? 'line-clamp-none' : 'line-clamp-3'}`">
                {{ props.eventForm?.description }}sefsefsefsfsefsefsefsfsefsefsefsefs
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
import Card from 'primevue/card'
const props = defineProps({
    eventForm: {type: Event}
})

let showMoreDetails = ref(false)
let cardIsExpired = ref(false)
let url = ref("")
let isLoading = ref(false)

onBeforeMount(async () => {
    //get card image 
    isLoading.value = true 
    if(props.eventForm?.imageID != "undefined") {
        //request image 
        
        const service = new EventService(new EventRepository())
       
        
        props.eventForm ? url.value = await service.GetImage(props.eventForm?.imageID.toString()) : undefined 
    }
    if(props.eventForm)
        cardIsExpired.value = checkIfCardIsExpired(props.eventForm)

    isLoading.value = false 
})


function checkIfCardIsExpired(eventForm:  Event): boolean {
    const date = new Date()
    return eventForm.date < date
}

function getMonth(): String {
    const date = new Date(props.eventForm!.date)
    const month = date.toLocaleDateString('default', { month: 'short'})
    return month
}


function getDay(): String {
    const date = new Date(props.eventForm!.date)
    const day = date.getDay()
   
    //const month = date.toLocaleDateString('default', { month: 'short'})
    return day.toString()
}



//check if the event has passed to warn for deleting 
</script>

<style>
</style>