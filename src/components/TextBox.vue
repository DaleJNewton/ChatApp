<script setup lang="ts">
import type Message from '@/models/message';
import { ref } from 'vue';

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

    if (text.value != "") {
        emit("send", m);
    }

    text.value = ''
}

</script>

<template>
    <div class="container"> 
        <InputText type="text" class="message" v-model="text" @keyup.enter="sendHandler"/>
        <Button label="Send" class='button' @click="sendHandler" ></Button>
    </div>
</template>

<style scoped>

.container {
  display: grid;
  grid-template-rows: 1fr 1fr;
}

.button {
    margin: 0.5em;
}

.message {
    font-size: 2em;
    margin: 0.1em;
}

</style>