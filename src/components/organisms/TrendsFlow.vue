<script setup lang="ts">
import { ref, onMounted } from 'vue'

import { getTrending } from '@/services/animes'
import { IAnimeResponse } from '@/models/anime'
import VideoFlow from '@/components/molecules/VideoFlow.vue'

const animes = ref<IAnimeResponse[]>([])

const initFlow = async () => {
  const response = await getTrending()
  animes.value = response
}

onMounted(() => {
  initFlow()
})
</script>

<template>
  <div class="flex-1">
    <h3 class="flex mb-4 text-gray-300 text-2xl font-bold">Trends</h3>
    <VideoFlow :animes="animes" />
  </div>
</template>
