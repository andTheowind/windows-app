<script setup>
import { SparklesIcon, ViewfinderCircleIcon } from "@heroicons/vue/24/solid";

defineProps({
  progress: {
    type: Number,
    default: 42,
  },
});
</script>

<template>
  <header
    class="flex w-full shrink-0 items-center justify-between bg-white px-8 py-4"
  >
    <div class="flex items-center gap-3">
      <div
        class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500"
      >
        <SparklesIcon class="h-6 w-6 text-white" />
      </div>

      <div class="flex flex-col">
        <span class="text-xl font-bold tracking-wide text-gray-900"
          >EVOLVE</span
        >
        <span class="text-sm font-medium text-emerald-600">развивайся</span>
      </div>
    </div>

    <div class="flex items-center gap-2 text-emerald-600">
      <ViewfinderCircleIcon class="h-6 w-6 shrink-0 text-gray-700" />
      <span class="text-lg font-semibold tabular-nums">{{ progress }}%</span>
    </div>
  </header>
</template>
