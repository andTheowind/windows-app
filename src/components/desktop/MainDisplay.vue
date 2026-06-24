<script setup>
import { ref } from "vue";
import { desktopItems } from "@/constants/desktop-items";
import DesktopItem from "./DesktopItem.vue";
import DesktopItemModal from "./DesktopItemModal.vue";
import DesktopMenu from "../menu/DesktopMenu.vue";
import bgImage from "@/assets/img/unnamed.jpg";

const items = ref(desktopItems.map((item) => ({ ...item, isActive: false })));
const activeModalItem = ref(null);
const showModal = ref(false);

function toggleItem(item) {
  item.isActive = !item.isActive;
}

function openItem(item) {
  if (item.hasWindow) {
    activeModalItem.value = item;
    showModal.value = true;
  }
}

function closeModal() {
  showModal.value = false;
}
</script>

<template>
  <div
    class="w-screen h-screen max-w-full max-h-full grid grid-flow-col auto-cols-[115px] overflow-hidden gap-3 p-4"
    :style="{
      gridTemplateRows: 'repeat(auto-fill, 96px)',
      backgroundImage: `url(${bgImage})`,
      backgroundPosition: '50% 50%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }"
  >
    <DesktopItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      :class="item.isActive ? 'bg-[#C0C0C0]' : ''"
      class="desktop-item"
      @click="toggleItem(item)"
      @dblclick="openItem(item)"
    />

    <DesktopItemModal
      v-if="showModal && activeModalItem"
      :modal-data="activeModalItem.modalData"
      @close="closeModal"
    />
  </div>

  <DesktopMenu />
</template>
