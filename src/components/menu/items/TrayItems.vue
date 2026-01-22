<script setup>
import {
    SpeakerWaveIcon,
    LanguageIcon,
    GlobeAltIcon,
} from "@heroicons/vue/24/solid";
import { useNow, useDateFormat } from "@vueuse/core";

const currentMoment = useNow();
const currentTime = useDateFormat(currentMoment, "HH:mm");
// const currentDate = useDateFormat(currentMoment, "DD.MM.YYYY");
const trayIcons = [SpeakerWaveIcon, LanguageIcon, GlobeAltIcon];
</script>

<template>
    <div class="flex items-center gap-1">
        <div
            v-for="(Icon, index) in trayIcons"
            :key="index"
            class="w-6 h-6 bg-gradient-to-b from-gray-200 to-gray-300 border border-gray-400 rounded flex items-center justify-center"
        >
            <component :is="Icon" class="w-4 h-4 text-gray-800" />
        </div>
    </div>
    <div
        class="h-6 bg-gradient-to-b from-gray-100 to-gray-200 border border-gray-400 rounded-[3px] px-3 flex items-center justify-center text-xs font-medium text-gray-800 min-w-11"
    >
        <span>{{ currentTime }}</span>
    </div>
</template>
