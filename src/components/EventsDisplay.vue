<template>
    <span class=" flex flex-col md:flex-row gap-4 " >
    <div v-if="!isLoading" v-for="event in events" class="w-3/4">
        <EventCard :event-form="event"/>
    </div>
    </span>
</template>


<script setup lang="ts">
import { Ref, onBeforeMount, ref } from 'vue';
import EventService from "../services/EventService"
import EventRepository from "../repository/EventRepository"
import Event from '../Interfaces/Event';
import EventCard from './EventCard.vue';

let events: Ref<Array<Event>> | Ref<undefined> = ref() 
let isLoading = ref(false)
onBeforeMount(async () => {
    isLoading.value = true 
    const service = new EventService(new EventRepository())
    events.value = await service.GetAll()
    isLoading.value = false 
})

</script>