<script setup lang="ts">
    import TextBox from './components/TextBox.vue';
    import ChatDisplay from './components/ChatDisplay.vue';
    import type Message from './models/message';
    import { ref, type Ref } from 'vue';
    import {io} from 'socket.io-client';

    const localMessages: Ref<Message[]> = ref([]);

    const socket = io('https://wsecho.purplesea-f72268d6.australiaeast.azurecontainerapps.io');

    const messageSendHandler = (m: Message) => {
      socket.emit("chat", m)
    }

    const messageReceiveHandler = (m: Message) => {
      localMessages.value.push(m)
    }
    
    socket.on("chat", messageReceiveHandler)

</script>

<template>
    <div class="container">
      <div>
        <ChatDisplay :messages="localMessages"></ChatDisplay>
      </div>
      <div>
        <TextBox @send="messageSendHandler"></TextBox>
      </div>
    </div>
</template>

<style scoped>

.container {
  display: grid;
  grid-template-rows: 5fr 1fr;
  height: 100%;
}

</style>