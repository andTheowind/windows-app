<script setup>
import { ref } from "vue";
import {
    ClockIcon,
    ListBulletIcon,
    ChartBarIcon,
} from "@heroicons/vue/24/solid";

const trackAppItems = [
    { id: "timeline", label: "Хронология", icon: ClockIcon },
    { id: "activities", label: "Активности", icon: ListBulletIcon },
    { id: "progress", label: "Прогресс", icon: ChartBarIcon },
];
</script>

<template>
    <div class="flex-1 overflow-auto bg-gray-100">
        <div class="p-6 max-w-6xl mx-auto mt-auto">
            <nav>
                <ul class="flex items-center justify-around border-t">
                    <li
                        v-for="item in trackAppItems"
                        :key="item.id"
                        class="flex-1"
                    >
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
    </div>
</template>
