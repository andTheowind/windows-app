import { onMounted, onUnmounted, ref } from "vue";

export function useHashPageNavigation(validPageIds, defaultPageId) {
  function readPageFromHash() {
    const pageId = window.location.hash.slice(1);

    if (validPageIds.includes(pageId)) {
      return pageId;
    }

    window.location.hash = defaultPageId;

    return defaultPageId;
  }

  const activePageId = ref(readPageFromHash());

  function syncActivePageFromHash() {
    activePageId.value = readPageFromHash();
  }

  function selectPage(pageId) {
    if (!validPageIds.includes(pageId)) {
      return;
    }

    activePageId.value = pageId;
    window.location.hash = pageId;
  }

  onMounted(() => {
    window.addEventListener("hashchange", syncActivePageFromHash);
  });

  onUnmounted(() => {
    window.removeEventListener("hashchange", syncActivePageFromHash);
  });

  return { activePageId, selectPage };
}
