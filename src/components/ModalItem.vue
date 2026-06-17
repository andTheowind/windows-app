<script setup>
import { computed } from "vue";

const props = defineProps({
  label: { type: String, required: true },
  description: { type: String, default: "" },
  icon: { type: [String, Object, Function], default: "" },
  layout: { type: String, default: "row" },
});

const isComponent = computed(
  () => typeof props.icon === "object" || typeof props.icon === "function",
);
</script>

<template>
  <div
    class="flex items-center gap-2 p-2 rounded text-black hover:bg-[#000080] hover:text-white cursor-pointer transition-colors"
    :class="layout === 'col' ? 'flex-col text-center min-w-[80px]' : 'flex-row'"
  >
    <div v-if="isComponent" class="w-8 h-8 flex items-center justify-center">
      <component :is="icon" class="w-6 h-6" />
    </div>
    <img v-else-if="icon" :src="icon" class="w-8 h-8 object-contain" />
    <div>
      <span class="text-xs block">{{ label }}</span>
      <span v-if="description" class="text-[10px] text-gray-500 block">
        {{ description }}
      </span>
    </div>
  </div>
</template>
