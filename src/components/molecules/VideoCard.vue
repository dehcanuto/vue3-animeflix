<script setup lang="ts">
import { AnFilledStar } from '@kalimahapps/vue-icons'

defineProps<{
  canonicalTitle: string
  averageRating: string
  posterImage: any
}>()
</script>
<template>
  <RouterLink to="/">
    <div class="relative w-auto h-80 mb-3 object-cover bg-slate-800 overflow-hidden">
      <img :src="posterImage.small" alt="title" class="object-cover w-full h-full" />
    </div>
    <div>
      <div class="flex items-center text-sm text-white/70 gap-1">
        <AnFilledStar class="text-yellow-500" />
        <span>
          {{ averageRating }}
        </span>
      </div>
      <h4 class="text-lg font-semibold">
        {{ canonicalTitle }}
      </h4>
    </div>
  </RouterLink>
</template>
