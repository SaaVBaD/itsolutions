<template>
  <div class="menu" :class="[{active: isActive}]" ref="menuRef">
    <svg @click="closeModal" class="menu__cross" fill="#fff" width="40" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5  c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4  C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"/>
    </svg>
    <nav class="menu__nav">
      <router-link class="menu__nav-item" :to="{ name: 'home' }">Главная</router-link>
      <p class="menu__nav-item" @click="scrollTo('about', 'home')">О нас</p>
      <p class="menu__nav-item" @click="scrollTo('system', 'home')">Системная архитектура бизнеса</p>
      <p class="menu__nav-item" @click="scrollTo('digital', 'home')">Цифровая разработка</p>
      <p class="menu__nav-item" @click="scrollTo('audit', 'home')">Аудит и консалтинг</p>
    </nav>
    <div class="menu__button" @click="scrollTo('contact', 'home')"><span>Связаться с нами</span></div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {onClickOutside} from "@vueuse/core";
import {scroll} from "@/core/helpers/scrollTo.js";
import {useRoute, useRouter} from "vue-router";

const emit = defineEmits(['close-modal'])

const props = defineProps({
  isActive: Boolean
})
const closeModal = () => {
  emit('close-modal');
}

const router = useRouter()
const route = useRoute()

const menuRef = ref(null)
onClickOutside(menuRef, () => closeModal())

const scrollTo = (id, routeName) => {
  closeModal();
  if (route.name === routeName) {
    scroll(id);
  } else {
    router.push({
      name: routeName
    }).then(scroll(id, 500));
  }
}
</script>

<style lang="scss" scoped>
.menu {
  cursor: default;
  display: none;
  position: fixed;
  z-index: 5;
  top: 0;
  right: 0;
  width: 250px;
  height: 100vh;
  background-color: #383838;
  visibility: hidden;
  transform: translateX(100%);
  transition: transform 0.3s, visibility 0s 0.3s;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 11.6px 0 rgba(0, 0, 0, 0.20);

  &.active {
    visibility: visible;
    transform: translateX(0);
    transition: transform 0.3s;
  }

  &__cross {
    position: absolute;
    top: 10px;
    left: 10px;
  }

  &__nav {
    padding: 90px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    &-item {
      position: relative;
      display: flex;
      align-items: center;
      gap: 12px;
      cursor: pointer;
      transition: 0.2s;
      text-align: center;
      color: #FFF;
      font-size: 16px;
      font-weight: 400;

      @include hover {
        color: #2388FF;
      }

      &.active {
        color: #2388FF;
      }
    }
  }

  &__button {
    display: none;
    position: relative;
    cursor: pointer;
    border-radius: 35px;
    background: radial-gradient(217.58% 136.86% at 22.88% 20.87%, #2388FF 0%, #2F6EB8 46.63%, #FFF 100%);
    padding: 10px 22px;
    transition: 0.2s;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      z-index: 0;
      border-radius: 35px;
      background-color: rgba(0, 0, 0, 0.40);
      transition: 0.2s;
    }

    & span {
      position: relative;
      z-index: 1;
      color: #FFF;
      font-size: 16px;
      font-weight: 400;
    }

    @include hover {
      &::after {
        background-color: rgba(0, 0, 0, 0.20);
      }
    }
  }
}

@media (max-width: 750px) {
  .menu {
    display: flex;
  }
}

@media (max-width: 550px) {
  .menu {
    &__button {
      display: block;
    }
  }
}
</style>