<script setup>
import { ref } from "vue";
import {
    ClockIcon,
    ListBulletIcon,
    ChartBarIcon,
} from "@heroicons/vue/24/solid";
import TrayItems from "./items/TrayItems.vue";

const isMenuOpen = ref(false);
const isAppOpen = ref(false);
const activeAppTitle = ref("");

const menuItems = ref([
    {
        id: 1,
        title: "Пункт меню 1",
    },
    {
        id: 2,
        title: "Пункт меню 2",
    },
    {
        id: 3,
        title: "Пункт меню 3",
    },
    {
        id: 4,
        title: "TrackApp",
    },
]);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const openApp = (item) => {
    isAppOpen.value = true;
    activeAppTitle.value = item.title;
};

const closeApp = () => {
    isAppOpen.value = false;
};
</script>

<template>
    <div
        class="fixed bottom-0 left-0 w-full h-10 bg-gradient-to-b from-[#0A246A] to-[#2458C5] border-t-[2px] border-[#2458C5] flex items-center justify-between"
    >
        <div class="flex items-center h-full relative">
            <button
                @click="toggleMenu()"
                class="h-8 bg-gradient-to-b from-[#4CB02A] to-[#229107] hover:from-[#5BC939] hover:to-[#32A017] border-[1px] border-[#1D7C00] rounded-r-[3px] text-white text-sm p-4 flex items-center justify-center shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
            >
                Пуск
            </button>

            <div
                v-if="isMenuOpen && !isAppOpen"
                class="absolute left-3 bottom-12 w-64 bg-[#C0C0C0] border-2 border-t-gray-300 border-l-gray-300 border-r-gray-700 border-b-gray-700 shadow-lg z-40"
            >
                <div class="p-1">
                    <div
                        v-for="item in menuItems"
                        :key="item.id"
                        class="group px-3 py-2 hover:bg-[#000080] hover:text-white flex items-center gap-3 cursor-pointer"
                    >
                        <div
                            class="w-6 h-6 bg-gradient-to-b from-white to-gray-300 border border-gray-400 rounded-sm flex items-center justify-center"
                        >
                            <!-- Будет иконка приложения в пуске -->
                        </div>
                        <button
                            @click="openApp(item)"
                            class="text-sm text-left whitespace-nowrap"
                        >
                            {{ item.title }}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="h-full flex items-center gap-2 pr-2">
            <TrayItems />
        </div>

        <div
            v-if="isAppOpen"
            class="fixed inset-0 z-30 bg-white flex flex-col z-20"
        >
            <div
                class="h-8 bg-gradient-to-r from-[#000080] to-blue-800 flex items-center justify-between px-3 text-white"
            >
                <div class="flex items-center gap-2">
                    <div
                        class="w-6 h-6 bg-white/20 rounded-sm flex items-center justify-center"
                    >
                        <!-- Тут будет иконка приложения -->
                    </div>
                    <span class="text-sm font-medium">
                        {{ activeAppTitle || "Приложение" }}
                    </span>
                </div>
                <div class="flex items-center gap-1">
                    <button
                        @click="closeApp"
                        class="w-6 h-6 flex items-center justify-center bg-red-700 rounded-sm"
                    >
                        <span class="text-xs font-bold cursor-pointer">×</span>
                    </button>
                </div>
            </div>

            <div class="flex-1 overflow-auto bg-gray-100">
                <div class="p-6 max-w-6xl mx-auto">
                    <nav>
                        <ul class="flex items-center justify-around border-t">
                            <li class="flex-1">
                                <a
                                    href="#timeline"
                                    class="flex flex-col items-center p-2 gap-2 text-xs text-black"
                                >
                                    <ClockIcon class="h-6 w-6" />
                                    Таймлайн
                                </a>
                            </li>
                            <li class="flex-1">
                                <a
                                    href="#activities"
                                    class="flex flex-col items-center p-2 gap-2 text-xs text-black"
                                >
                                    <ListBulletIcon class="h-6 w-6" />
                                    Активности
                                </a>
                            </li>
                            <li class="flex-1">
                                <a
                                    href="#progress"
                                    class="flex flex-col items-center p-2 gap-2 text-xs text-black"
                                >
                                    <ChartBarIcon class="h-6 w-6" />
                                    Прогресс
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>
