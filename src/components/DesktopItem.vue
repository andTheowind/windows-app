<script setup>
defineProps({
    item: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="cursor-pointer flex flex-col justify-evenly">
        <div class="flex justify-center pt-3 pb-3.5">
            <img :src="item.icon ? `/icons/${item.icon}.webp` : `/icons/empty.webp`" class="w-10 h-auto">
        </div>
        <div class="text-center text-sm pb-3.5">
            <p>{{ item.title }}</p>
        </div>
    </div>
</template>