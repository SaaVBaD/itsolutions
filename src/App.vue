<script setup>
import BaseHeader from "@/components/base/base-header.vue";
import BaseFooter from "@/components/base/base-footer.vue";
import {onBeforeUnmount, onMounted, ref, watch} from "vue";
import {onClickOutside} from "@vueuse/core";
import {useAppStore} from "@/stores/app.js";

const appStore = useAppStore()

const isChatVisible = ref(false)

const chatRef = ref(null)
onClickOutside(chatRef, () => isChatVisible.value = false)

watch(isChatVisible, (state) => {
  appStore.setOverflowHidden(state);
})

let stopWatcher = () => {};

onMounted( async () => {
  stopWatcher = watch(
      () => appStore.isOverflowHidden,
      (hidden) => {
        const root = document.documentElement;
        const body = document.body;
        if (hidden) {
          root.classList.add('lock-scroll');
          body.classList.add('lock-scroll');
        } else {
          root.classList.remove('lock-scroll');
          body.classList.remove('lock-scroll');
        }
      },
      { immediate: true }
  );
});

onBeforeUnmount(() => {
  stopWatcher()
});
</script>

<template>
  <div class="main">
    <base-header />
    <RouterView v-slot="{ Component }">
      <transition name="opacity" mode="out-in">
        <component :is="Component" />
      </transition>
      </RouterView>
    <base-footer />
  </div>
</template>

<style lang="scss">
.main {
  position: relative;
  min-height: 100vh;

  &__image {
    cursor: pointer;
    width: 90px;
    position: fixed;
    z-index: 3;
    bottom: 20px;
    right: 20px;
  }
}

.lock-scroll {
  overflow: hidden !important;
}
</style>
