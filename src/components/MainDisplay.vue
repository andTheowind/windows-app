<script setup>
import { ref } from "vue";
import { EnvelopeIcon, CodeBracketIcon } from "@heroicons/vue/20/solid";
import DesktopItem from "./DesktopItem.vue";
import DesktopMenu from "./menu/DesktopMenu.vue";
import ModalSection from "./ModalSection.vue";
import ModalItem from "./ModalItem.vue";
import bgImage from "@/assets/unnamed.png";

const desktopItems = ref([
    {
        id: 1,
        title: "Мой компьютер",
        icon: "computer",
        isActive: false,
        hasWindow: true,
        modalData: {
            title: "Компьютер Andy",
            disks: ["Диск C", "Диск D"],
            contacts: [
                {
                    label: "Email",
                    description: "andtheowind@gmail.com",
                    iconComponent: EnvelopeIcon,
                    url: "mailto:andtheowind@gmail.com",
                },
                {
                    label: "GitHub",
                    description: "andtheowind",
                    iconComponent: CodeBracketIcon,
                    url: "https://github.com/andtheowind",
                },
            ],
        },
    },
    {
        id: 2,
        title: "Мои документы",
        icon: "docs",
        isActive: false,
        hasWindow: true,
        modalData: {
            title: "Документы",
            docs: [
                "Документ-1.txt",
                "Документ-2.txt",
                "Документ-3.txt",
                "Документ-4.txt",
            ],
        },
    },
    {
        id: 3,
        title: "Моя музыка",
        icon: "music",
        isActive: false,
        hasWindow: true,
        modalData: {
            title: "Моя музыка",
            soundtracks: [
                "Муз. сопровождение.mp4",
                "Муз. сопровождение(рингтон).mp4",
            ],
        },
    },
    {
        id: 4,
        title: "Мои видео",
        icon: "video",
        isActive: false,
        hasWindow: true,
        modalData: {
            title: "Мои видео",
            videos: ["Видео-заставка.mp4", "Microsoft-super-video.mp4"],
        },
    },
    {
        id: 5,
        title: "Папка",
        icon: "folder",
        isActive: false,
        hasWindow: true,
        modalData: {
            title: "Папка",
            folders: ["Директория-1", "Директория-2"],
        },
    },
    {
        id: 6,
        title: "Записки",
        icon: "",
        isActive: false,
        hasWindow: true,
        modalData: {
            title: "Мои записи",
            notes: ["Записка-1.txt", "Записка-2.txt"],
        },
    },
    {
        id: 7,
        title: "Файл",
        icon: "",
        isActive: false,
        hasWindow: false,
        modalData: {
            title: "Открывщийся файл",
            files: [],
        },
    },
    {
        id: 8,
        title: "Корзина",
        icon: "trash",
        isActive: false,
        hasWindow: true,
        modalData: {
            title: "Корзина",
            removes: [
                {
                    name: "Документ.txt",
                    icon: "/icons/doc-icon.webp",
                    type: "document",
                },
                {
                    name: "Видео.mp4",
                    icon: "/icons/ModernXP-72-Play-icon.png",
                    type: "video",
                },
            ],
        },
    },
]);

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
        :style="{ gridTemplateRows: 'repeat(auto-fill, 96px)', backgroundImage: `url(${bgImage})`, backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }"
    >
        <DesktopItem
            v-for="item in desktopItems"
            :key="item.id"
            :item="item"
            @click="toggleItem(item)"
            @dblclick="openItem(item)"
            :class="item.isActive ? 'bg-[#C0C0C0]' : ''"
            class="desktop-item"
        />

        <div
            v-if="showModal && activeModalItem"
            class="fixed top-[100px] left-[100px] min-w-[360px] min-h-[300px] bg-[#F0F0F0] border-[2px] border-[#808080] border-t-white border-l-white shadow-lg z-50"
            @click.stop
        >
            <div
                class="bg-[#000080] text-white p-2 flex justify-between items-center"
            >
                <span class="block font-bold text-sm ps-2">
                    {{ activeModalItem.modalData.title }}
                </span>
                <button
                    class="w-6 h-6 flex items-center justify-center bg-[#C00000] text-white hover:bg-[#D00000] active:scale-95 transition-transform cursor-pointer"
                    @click="closeModal"
                >
                    <span class="text-lg leading-none">×</span>
                </button>
            </div>

            <div class="p-4">
                <!-- Диски -->
                <ModalSection
                    v-if="
                        activeModalItem.modalData.disks &&
                        activeModalItem.modalData.disks.length
                    "
                    :title="activeModalItem.modalData.disks.title"
                >
                    <ModalItem
                        v-for="disk in activeModalItem.modalData.disks"
                        :key="disk"
                        :label="disk"
                        icon="/icons/ModernXP-60-Disk-icon.png"
                    />
                </ModalSection>

                <!-- Документы -->
                <ModalSection
                    v-if="
                        activeModalItem.modalData.docs &&
                        activeModalItem.modalData.docs.length
                    "
                    :title="activeModalItem.modalData.docs.title"
                >
                    <ModalItem
                        v-for="doc in activeModalItem.modalData.docs"
                        :key="doc"
                        :label="doc"
                        icon="/icons/doc-icon.webp"
                        layout="col"
                    />
                </ModalSection>

                <!-- Музыка -->
                <ModalSection
                    v-if="
                        activeModalItem.modalData.soundtracks &&
                        activeModalItem.modalData.soundtracks.length
                    "
                    :title="activeModalItem.modalData.soundtracks.title"
                >
                    <ModalItem
                        v-for="soundtrack in activeModalItem.modalData
                            .soundtracks"
                        :key="soundtrack"
                        :label="soundtrack"
                        icon="/icons/ModernXP-72-Play-icon.png"
                        layout="col"
                    />
                </ModalSection>

                <!-- Видео -->
                <ModalSection
                    v-if="
                        activeModalItem.modalData.videos &&
                        activeModalItem.modalData.videos.length
                    "
                    :title="activeModalItem.modalData.videos.title"
                >
                    <ModalItem
                        v-for="video in activeModalItem.modalData.videos"
                        :key="video"
                        :label="video"
                        icon="/icons/ModernXP-72-Play-icon.png"
                        layout="col"
                    />
                </ModalSection>

                <!-- Папки -->
                <ModalSection
                    v-if="
                        activeModalItem.modalData.folders &&
                        activeModalItem.modalData.folders.length
                    "
                    :title="activeModalItem.modalData.folders.title"
                >
                    <ModalItem
                        v-for="folder in activeModalItem.modalData.folders"
                        :key="folder"
                        :label="folder"
                        icon="/icons/folder.webp"
                        layout="col"
                    />
                </ModalSection>

                <!-- Записки -->
                <ModalSection
                    v-if="
                        activeModalItem.modalData.notes &&
                        activeModalItem.modalData.notes.length
                    "
                    :title="activeModalItem.modalData.title"
                >
                    <ModalItem
                        v-for="note in activeModalItem.modalData.notes"
                        :key="note"
                        :label="note"
                        icon="/icons/notes.webp"
                        layout="col"
                    />
                </ModalSection>

                <!-- Файл -->
                <ModalSection
                    v-if="
                        activeModalItem.modalData.files &&
                        activeModalItem.modalData.files.length
                    "
                    :title="activeModalItem.modalData.files.title"
                >
                    <ModalItem
                        v-for="file in activeModalItem.modalData.files"
                        :key="file"
                        :label="file"
                        icon="/icons/ModernXP-60-Disk-icon.png"
                    />
                </ModalSection>

                <!-- Корзина -->
                <ModalSection
                    v-if="
                        activeModalItem.modalData.removes &&
                        activeModalItem.modalData.removes.length
                    "
                    :title="activeModalItem.modalData.removes.title"
                >
                    <ModalItem
                        v-for="item in activeModalItem.modalData.removes"
                        :key="item.name"
                        :label="item.name"
                        :icon="item.icon"
                        layout="col"
                    />
                </ModalSection>

                <!-- Компьютер -->
                <ModalSection
                    v-if="
                        activeModalItem.modalData.contacts &&
                        activeModalItem.modalData.contacts.length
                    "
                >
                    <div class="flex flex-row gap-2 space-y-1">
                        <div
                            v-for="contact in activeModalItem.modalData
                                .contacts"
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
    </div>

    <DesktopMenu />
</template>
