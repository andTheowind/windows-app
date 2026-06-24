<script setup>
import {
  ClockIcon,
  ListBulletIcon,
  ChartBarIcon,
} from "@heroicons/vue/24/solid";
import TrackAppHeader from "./components/TrackAppHeader.vue";
import TrackAppContent from "./components/TrackAppContent.vue";
import TrackAppNavItem from "./components/TrackAppNavItem.vue";

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
        <TrackAppNavItem
          v-for="item in trackAppItems"
          :key="item.id"
          :href="`#${item.id}`"
        >
          <component :is="item.icon" class="h-6 w-6" />
          {{ item.label }}
        </TrackAppNavItem>
      </ul>
    </nav>
  </div>
</template>
