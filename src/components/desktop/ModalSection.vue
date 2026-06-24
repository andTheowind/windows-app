<script setup>
defineProps({
    title: {
        type: String,
        default: ""
    }
})
</script>

<template>
    <div class="mb-4">
        <h3 v-if="title" class="text-sm font-bold text-gray-700 mb-2">
            {{ title }}
        </h3>
        <div class="flex flex-wrap gap-2">
            <slot />
        </div>
    </div>
</template>
