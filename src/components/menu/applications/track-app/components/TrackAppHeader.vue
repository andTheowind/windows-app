<script setup>
import { SparklesIcon } from "@heroicons/vue/24/solid";

defineProps({
  progress: {
    type: Number,
    default: 42,
  },
});
</script>

<template>
  <header
    class="flex w-full shrink-0 items-center justify-between bg-white px-6 py-3"
  >
    <div class="flex items-center gap-3">
      <div
        class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black"
      >
        <SparklesIcon class="h-6 w-6 text-white" />
      </div>
      <div class="flex flex-col text-black">
        <span class="text-xl font-semibold">Дневник</span>
        <span class="text-sm font-thin">активности и цели</span>
      </div>
    </div>

    <div class="flex items-center gap-2">
      <div class="h-3 w-3 rounded-full bg-red-500"></div>
      <div class="text-lg text-black font-semibold">
        Прогресс: <span>{{ progress }} %</span>
      </div>
    </div>
  </header>
</template>
