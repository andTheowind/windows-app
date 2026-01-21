<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="mb-4">
        <!--
        <h3 class="font-semibold text-gray-700 mb-2">
            {{ title }}
        </h3>
        -->
        <div class="flex flex-row gap-2 space-y-1">
            <slot />
        </div>
    </div>
</template>
