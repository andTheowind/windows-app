<script setup>
const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    layout: {
        type: String,
        default: "row",
    },
    icon: {
        type: [String, Object],
        default: null,
    },
    layout: {
        type: String,
        default: "row",
    },
    wrapperClass: {
        type: [String, Array, Object],
        default: "",
    },
    description: {
        type: String,
        default: null,
    },
});
</script>

<template>
    <div
        class="p-2 rounded cursor-pointer hover:bg-[#E0E0E0] flex gap-2"
        :class="[
            layout === 'col' ? 'flex-col items-center' : 'items-center',
            wrapperClass,
        ]"
    >
        <component
            v-if="typeof icon !== 'string' && icon"
            :is="icon"
            class="w-7 h-7 text-black"
        />

        <img v-else-if="icon" :src="icon" alt="" class="w-7 h-7" />

        <div class="flex flex-col items-center">
            <span class="text-sm text-gray-600">
                {{ label }}
            </span>
            <span v-if="description" class="text-xs text-gray-600 text-center">
                {{ description }}
            </span>
        </div>
    </div>
</template>
