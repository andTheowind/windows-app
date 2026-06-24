import { EnvelopeIcon, CodeBracketIcon } from "@heroicons/vue/20/solid";

export const desktopItems = [
  {
    id: 1,
    title: "Мой компьютер",
    icon: "computer",
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
];
