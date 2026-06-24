<script setup>
import {
  ClockIcon,
  ListBulletIcon,
  ChartBarIcon,
} from "@heroicons/vue/24/solid";
import TrackAppHeader from "./components/TrackAppHeader.vue";
import TrackAppContent from "./components/TrackAppContent.vue";

const trackAppItems = [
  { id: "timeline", label: "Хронология", icon: ClockIcon },
  { id: "activities", label: "Активности", icon: ListBulletIcon },
  { id: "progress", label: "Прогресс", icon: ChartBarIcon },
];
</script>

<template>
  <div class="flex flex-col flex-1 overflow-hidden h-full">
    <TrackAppHeader />

    <div class="flex-1 overflow-auto bg-gray-100">
      <TrackAppContent />
    </div>

    <nav class="shrink-0 border-t bg-white">
      <ul class="flex items-center justify-around">
        <li v-for="item in trackAppItems" :key="item.id" class="flex-1">
          <a
            :href="`#${item.id}`"
            class="flex flex-col items-center p-2 gap-2 text-xs text-black"
          >
            <component :is="item.icon" class="h-6 w-6" />
            {{ item.label }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
