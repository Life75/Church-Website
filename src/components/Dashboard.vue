<template>
    <div id="dashboard" class=" flex items-start  justify-center h-[80vh] ">
        <span class="flex flex-col w-3/4">
            <div class="bg-purple-200 mb-7 text-center rounded-md text-3xl py-3 shadow-md">
                <p>Creator Dashboard </p>
            </div>
            <div class="flex text-2xl text-center bg-white shadow-lg rounded-md ">
                <span :class="`flex-grow border-r hover:bg-purple-400 py-2 px-2 rounded-sm ${selectedTab == Tab.Events ? 'bg-purple-400' : ''} `" >Events</span>
                <div></div>
                <span :class="`flex-grow hover:bg-purple-400 py-2 px-2 rounded-sm ${selectedTab == Tab.Sermons ? 'bg-purple-400' : ''} `">Sermons</span>
            </div>

            <span class="flex flex-col gap-2 ">
                <CreateEvent></CreateEvent>
                
                <EventCard/>
            </span>
        </span>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
import CreateEvent from "./CreateEvent.vue"
import EventCard from "./EventCard.vue"

enum Tab {
    Events,
    Sermons 
}

let selectedTab = ref(Tab.Events)



</script>


<style></style>