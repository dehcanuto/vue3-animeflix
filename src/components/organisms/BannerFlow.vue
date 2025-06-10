<script setup lang="ts">
import { ref, onMounted } from 'vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y } from 'swiper/modules'
import { BsPlayFill } from '@kalimahapps/vue-icons';

import { getTrending } from '@/services/animes'
import { IAnimeResponse } from '@/models/anime'

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
  <div class="container mx-auto h-[628px] lg:h-[500px]">
    <template v-if="animes.length">
      <Swiper :modules="[A11y]" :slides-per-view="1" :space-between="20">
          <SwiperSlide v-for="item in animes" v-key="item.id">
            <div class="relative w-full h-full bg-cover bg-center bg-no-repeat"
              :style="{
                'background-image': `linear-gradient(to right, rgba(24, 24, 24, 1), rgba(0, 0, 0, 0)), url(${item.attributes.coverImage.small})`
              }">
              <div class="flex flex-col max-w-lg py-36 gap-4">
                  <h2 class="text-3xl font-medium">{{ item.attributes.canonicalTitle }}</h2>
                  <p class="text-white/70">{{ item.attributes.synopsis.substring(0, 250) + "..." }}</p>
                  <RouterLink to="/" class="flex items-center justify-center w-full lg:w-fit p-2 px-6 mt-3 gap-2 bg-white text-black font-bold rounded">
                    <BsPlayFill />
                    Reproduzir agora
                  </RouterLink>
              </div>
            </div>
          </SwiperSlide>
      </Swiper>
    </template>
  </div>
</template>
