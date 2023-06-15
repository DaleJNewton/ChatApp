<script setup lang="ts">
import type Message from '@/models/message';
import {ref} from 'vue';

const emit = defineEmits<{
    (e: 'send', message: Message): void
}>()

// the object we will hold the text we typed in
const text = ref('');

// The function that will handle when the button is clicked
const sendHandler = () => {
    const m: Message = {
        body: text.value,
        sender: "Dale"
    }

    emit("send", m);

    text.value = ''
}

</script>

<template>
    <div class="container"> 
        <input class = "message" v-model="text" type="text" @keyup.enter="sendHandler"/>
        <button @click="sendHandler" class="button">Send</button>
    </div>
</template>

<style scoped>

.container {
  display: grid;
  grid-template-rows: 1fr 1fr;
}

.button {
    margin: 1em;
}

.message {
    font-size: 2em;
}

</style>