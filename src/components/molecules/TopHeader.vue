<script setup lang="ts">
import { AnOutlinedUser, AkSearch, CaNotification } from '@kalimahapps/vue-icons';

import { menuItems } from '@/constants/menu'
</script>

<template>
  <div className="flex fixed top-0 inset-x-0 p-4 bg-transparent w-full z-10">
    <div className="container mx-auto">
      <div className="row flex items-center justify-between">
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <MdMenu className="text-3xl text-white" />
          </button>
        </div>
        <RouterLink to="/">
          <img src="@/assets/animeflix.png" className="block md:w-40" title="AnimeFlix" />
        </RouterLink>
        <ul className="hidden lg:flex items-center space-x-10 text-white font-nunito-sans">
          <li v-for="(item, index) in menuItems" :key="index">
            <RouterLink
              to="/"
              class="items-start w-full text-left truncate rounded-lg bg-transparent font-semibold p-2 hover:text-primary"
            >
              {{ item.name }}
            </RouterLink>
          </li>
        </ul>
        <div className="flex items-center text-2xl gap-6">
          <button type="button" className="text-3xl lg:text-2xl text-white cursor-pointer">
            <AkSearch />
          </button>
          <button type="button" className="text-3xl lg:text-2xl text-white cursor-pointer">
            <CaNotification />
          </button>
          <button
            type="button"
            className="flex w-10 h-10 bg-gray-600 text-white items-center justify-center cursor-pointer rounded-full"
          >
            <AnOutlinedUser />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
