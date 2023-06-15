<script setup lang="ts">
import type Message from '@/models/message';
import type { PropType } from 'vue';

defineProps({
    messages: Object as PropType<Message[]>
});


</script>

<template>
    <div> 
        <div v-for="(message, key) of messages" :key="key">
            <div>{{ message.sender}}</div>
            <div>{{ message.body}}</div>
        </div>
    </div>
</template>

<style scoped>


</style>