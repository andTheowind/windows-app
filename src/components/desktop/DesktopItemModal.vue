<script setup>
import ModalSection from "./ModalSection.vue";
import ModalItem from "./ModalItem.vue";

defineProps({
  modalData: {
    type: Object,
    required: true,
  },
});

defineEmits(["close"]);
</script>

<template>
  <div
    class="fixed top-[100px] left-[100px] min-w-[360px] min-h-[300px] bg-[#F0F0F0] border-[2px] border-[#808080] border-t-white border-l-white shadow-lg z-50"
    @click.stop
  >
    <div
      class="bg-[#000080] text-white p-2 flex justify-between items-center"
    >
      <span class="block font-bold text-sm ps-2">
        {{ modalData.title }}
      </span>
      <button
        class="w-6 h-6 flex items-center justify-center bg-[#C00000] text-white hover:bg-[#D00000] active:scale-95 transition-transform cursor-pointer"
        @click="$emit('close')"
      >
        <span class="text-lg leading-none">×</span>
      </button>
    </div>

    <div class="p-4">
      <ModalSection
        v-if="modalData.disks && modalData.disks.length"
      >
        <ModalItem
          v-for="disk in modalData.disks"
          :key="disk"
          :label="disk"
          icon="/icons/ModernXP-60-Disk-icon.png"
        />
      </ModalSection>

      <ModalSection
        v-if="modalData.docs && modalData.docs.length"
      >
        <ModalItem
          v-for="doc in modalData.docs"
          :key="doc"
          :label="doc"
          icon="/icons/doc-icon.webp"
          layout="col"
        />
      </ModalSection>

      <ModalSection
        v-if="modalData.soundtracks && modalData.soundtracks.length"
      >
        <ModalItem
          v-for="soundtrack in modalData.soundtracks"
          :key="soundtrack"
          :label="soundtrack"
          icon="/icons/ModernXP-72-Play-icon.png"
          layout="col"
        />
      </ModalSection>

      <ModalSection
        v-if="modalData.videos && modalData.videos.length"
      >
        <ModalItem
          v-for="video in modalData.videos"
          :key="video"
          :label="video"
          icon="/icons/ModernXP-72-Play-icon.png"
          layout="col"
        />
      </ModalSection>

      <ModalSection
        v-if="modalData.folders && modalData.folders.length"
      >
        <ModalItem
          v-for="folder in modalData.folders"
          :key="folder"
          :label="folder"
          icon="/icons/folder.webp"
          layout="col"
        />
      </ModalSection>

      <ModalSection
        v-if="modalData.notes && modalData.notes.length"
        :title="modalData.title"
      >
        <ModalItem
          v-for="note in modalData.notes"
          :key="note"
          :label="note"
          icon="/icons/notes.webp"
          layout="col"
        />
      </ModalSection>

      <ModalSection
        v-if="modalData.files && modalData.files.length"
      >
        <ModalItem
          v-for="file in modalData.files"
          :key="file"
          :label="file"
          icon="/icons/ModernXP-60-Disk-icon.png"
        />
      </ModalSection>

      <ModalSection
        v-if="modalData.removes && modalData.removes.length"
      >
        <ModalItem
          v-for="item in modalData.removes"
          :key="item.name"
          :label="item.name"
          :icon="item.icon"
          layout="col"
        />
      </ModalSection>

      <ModalSection
        v-if="modalData.contacts && modalData.contacts.length"
      >
        <div class="flex flex-row gap-2 space-y-1">
          <div
            v-for="contact in modalData.contacts"
            :key="contact.label"
            @click="window.open(contact.url, '_blank')"
            class="cursor-pointer"
          >
            <ModalItem
              :label="contact.label"
              :description="contact.description"
              :icon="contact.iconComponent"
              layout="col"
            />
          </div>
        </div>
      </ModalSection>
    </div>
  </div>
</template>
