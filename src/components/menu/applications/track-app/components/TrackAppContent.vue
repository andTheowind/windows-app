<script setup>
import TrackList from "./TrackList.vue";
import TrackForm from "./TrackForm.vue";
import TrackStats from "./TrackStats.vue";
</script>

<template>
  <div class="p-6 max-w-6xl mx-auto">
    <!-- progress -->
    <TrackList />
    <TrackForm />
    <TrackStats />
  </div>
</template>
