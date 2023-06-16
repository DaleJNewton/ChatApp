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
            <Fieldset v-if="message.sender=='Dale'" class="test">
                <template #legend>
                    <div>
                        {{ message.sender}}
                    </div>
                </template>
                <p class="chat">
                    {{ message.body}}    
                </p>
            </Fieldset>
            <Fieldset v-else>
                <template #legend>
                    <div>
                        {{ message.sender}}
                    </div>
                </template>
                <p class="chat">
                    {{ message.body}}    
                </p>
            </Fieldset>
        </div>
    </div>
</template>

<style scoped>

.chat {
    margin: 0.2em;
}

.test :deep(.p-fieldset-legend) {
    margin-left: auto;
}

</style>