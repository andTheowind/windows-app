<script setup>
import { ref } from "vue";
import TrayItems from "./items/TrayItems.vue";
import TrackApp from "./applications/TrackApp.vue";
import CalculatorApp from "./applications/CalculatorApp.vue";

const isMenuOpen = ref(false);
const isAppOpen = ref(false);
const activeAppTitle = ref("");
const activeAppComponent = ref(null);

const menuItems = ref([
    {
        id: 1,
        title: "Калькулятор",
        component: CalculatorApp,
    },
    {
        id: 2,
        title: "Трекер",
        component: TrackApp,
    },
    {
        id: 3,
        title: "Приложение в разработке",
        component: null,
    },
]);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const openApp = (item) => {
    isAppOpen.value = true;
    activeAppTitle.value = item.title;
    activeAppComponent.value = item.component;
    isMenuOpen.value = false;
};

const closeApp = () => {
    isAppOpen.value = false;
    activeAppTitle.value = "";
    activeAppComponent.value = null;
};
</script>

<template>
    <div
        class="fixed bottom-0 left-0 w-full h-10 bg-[#2458C5] border-t-[2px] border-[#2458C5] flex items-center justify-between"
    >
        <div class="flex items-center h-full relative">
            <button
                @click="toggleMenu()"
                class="h-8 bg-gradient-to-b from-[#4CB02A] to-[#229107] hover:from-[#5BC939] hover:to-[#32A017] border-[1px] border-[#1D7C00] rounded-r-[3px] text-white text-sm p-4 flex items-center justify-center shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
            >
                Пуск
            </button>

            <div
                v-if="isMenuOpen"
                class="absolute left-3 bottom-12 w-64 bg-[#C0C0C0] border-2 border-t-gray-300 border-l-gray-300 border-r-gray-700 border-b-gray-700 shadow-lg z-40"
            >
                <div class="p-1">
                    <div
                        v-for="item in menuItems"
                        :key="item.id"
                        class="group px-3 py-2 hover:bg-[#000080] hover:text-white flex items-center gap-3 cursor-pointer"
                        @click="openApp(item)"
                    >
                        <div
                            class="w-6 h-6 bg-gradient-to-b from-white to-gray-300 border border-gray-400 rounded-sm flex items-center justify-center"
                        >
                            <!-- Будет иконка приложения в пуске -->
                        </div>
                        <span class="text-sm text-left whitespace-nowrap">
                            {{ item.title }}
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="h-full flex items-center gap-2 pr-2">
            <TrayItems />
        </div>
    </div>

    <!-- Окно приложения - вне трея -->
    <div
        v-if="isAppOpen && activeAppComponent"
        class="fixed inset-0 z-30 bg-white flex flex-col"
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
                <span
                    v-if="activeAppTitle === 'Calculator'"
                    class="text-xs opacity-75"
                >
                    - Standard
                </span>
            </div>
            <div class="flex items-center gap-1">
                <button
                    @click="closeApp"
                    class="w-6 h-6 flex items-center justify-center bg-red-700 rounded-sm hover:bg-red-800 transition-colors"
                >
                    <span class="text-xs font-bold cursor-pointer">×</span>
                </button>
            </div>
        </div>
        <div class="flex-1 overflow-auto">
            <!-- Динамический компонент приложения -->
            <component :is="activeAppComponent" />
        </div>
    </div>
</template>
