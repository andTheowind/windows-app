<script setup>
import {
  ClockIcon,
  ListBulletIcon,
  ChartBarIcon,
} from "@heroicons/vue/24/solid";
import { useHashPageNavigation } from "@/composables/useHashPageNavigation";
import {
  TRACK_PAGE,
  DEFAULT_TRACK_PAGE,
} from "./constants/track-app-pages";
import TrackAppHeader from "./components/TrackAppHeader.vue";
import TrackAppContent from "./components/TrackAppContent.vue";
import TrackAppNavItem from "./components/TrackAppNavItem.vue";

const navItems = [
  { id: TRACK_PAGE.TIMELINE, label: "Хронология", icon: ClockIcon },
  { id: TRACK_PAGE.ACTIVITIES, label: "Активности", icon: ListBulletIcon },
  { id: TRACK_PAGE.PROGRESS, label: "Прогресс", icon: ChartBarIcon },
];

const pageIds = navItems.map((item) => item.id);
const { activePageId, selectPage } = useHashPageNavigation(
  pageIds,
  DEFAULT_TRACK_PAGE,
);
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
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          :class="{
            'bg-gray-200 pointer-events-none': item.id === activePageId,
          }"
          @click.prevent="selectPage(item.id)"
        >
          <component :is="item.icon" class="h-6 w-6" />
          {{ item.label }}
        </TrackAppNavItem>
      </ul>
    </nav>
  </div>
</template>
