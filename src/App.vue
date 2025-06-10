<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopHeader from '@/components/molecules/TopHeader.vue'
</script>

<template>
  <TopHeader />
  <div class="flex-1 justify-between pt-32">
    <RouterView />
    <footer className="py-4 border-t border-[#292929] mt-12">
      <div className="container mx-auto">
        <div className="flex items-center justify-center lg:justify-between text-xs">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <span className="text-sm">© Flow 2025</span>
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <p>Desenvolvido por <strong>André Canuto</strong></p>
            <span className="px-2 bg-[#EE3965] text-white font-semibold uppercase rounded-sm">
              Beta
            </span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
