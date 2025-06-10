<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import VideoCard from './VideoCard.vue'
import { IAnimeResponse } from '@/models/anime'

const props = withDefaults(
  defineProps<{
    animes: IAnimeResponse[]
    loading: boolean
  }>(),
  {
    loading: true,
  },
)

const onSwiper = (swiper: any) => {
  console.log('onSwiper', swiper)
}

const onSlideChange = () => {
  console.log('slide change')
}

console.log('animes', props.animes)
</script>
<template>
  <Swiper
    :modules="[A11y]"
    :slides-per-view="6.5"
    :space-between="20"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <template v-if="animes">
      <SwiperSlide v-for="item in animes" v-key="item.id">
        <VideoCard v-bind="item.attributes" />
      </SwiperSlide>
    </template>
  </Swiper>
</template>
