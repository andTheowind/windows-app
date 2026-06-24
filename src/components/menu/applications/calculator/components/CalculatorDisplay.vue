<script setup>
defineProps({
  displayVal: {
    type: String,
    required: true,
  },
  storedValue: {
    type: Number,
    default: null,
  },
  storedOperator: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <div class="mb-6">
    <div
      class="bg-gray-50 rounded-xl p-4 text-right border border-gray-200"
    >
      <div
        class="text-gray-400 text-sm min-h-5 mb-1 overflow-hidden"
      >
        <!-- Показываем предыдущее выражение -->
        <span v-if="storedValue !== null && storedOperator">
          {{ storedValue }} {{ storedOperator }}
        </span>
      </div>
      <div
        class="text-3xl font-bold text-gray-800 overflow-x-auto whitespace-nowrap"
      >
        {{ displayVal }}
      </div>
    </div>
  </div>
</template>
