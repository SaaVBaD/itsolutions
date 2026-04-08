<template>
  <div class="hero">
    <img class="hero__bg" src="@images/heroBg.png" alt="bg">
    <div class="hero__wrapper">
      <h1>АЙТИ РЕШЕНИЯ</h1>
      <p>Превращаем проблемы клиентов в надежные технологические системы.</p>
      <button @click="scrollTo('contact', 'home')">Связаться с нами</button>
    </div>
  </div>
</template>

<script setup>
import {scroll} from "@/core/helpers/scrollTo.js";
import {useRoute, useRouter} from "vue-router";

const router = useRouter()
const route = useRoute()

const scrollTo = (id, routeName) => {
  if (route.name === routeName) {
    scroll(id);
  } else {
    router.push({
      name: 'home',
      params: {
        locale: localStorage.getItem('user-locale') || 'en'
      }
    }).then(scroll(id));
  }
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;

  &__bg {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }

  &__wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    & h1 {
      text-shadow: 0 0 20px rgba(255, 255, 255, 0.50);
      animation: pulse 3s infinite;
      color: #FFF;
      text-align: center;
      font-family: "Gros Ventre", sans-serif;
      font-size: 71px;
      font-weight: 400;
    }

    & p {
      color: #FFF;
      text-align: center;
      font-family: Onest, sans-serif;
      font-size: 20px;
      font-weight: 400;
      line-height: 35px;
    }

    & button {
      margin-top: 45px;
      cursor: pointer;
      width: fit-content;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.56);
      background: linear-gradient(0deg, rgba(70, 98, 130, 0.00) 0%, rgba(70, 98, 130, 0.00) 100%), linear-gradient(180deg, rgba(108, 108, 108, 0.15) 0%, rgba(255, 255, 255, 0.01) 100%);
      box-shadow: 0 1px 2px 0 rgba(13, 32, 62, 0.50);
      backdrop-filter: blur(5px);
      transition: 0.2s;
      padding: 10px 20px;

      color: #FFF;
      text-align: center;
      font-family: "Gros Ventre", sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;

      @include hover {
        background: rgba(35, 136, 255, 0.30);
        transform: scale(1.03);
      }
    }
  }
}

@keyframes pulse {
  0% {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.50);
  }
  50% {
    text-shadow: 0 0 30px rgba(255, 255, 255, 1);
  }
  100% {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.50);
  }
}

@media (max-width: 1250px) {
  .hero {
    &__wrapper {
      width: 90%;
    }
  }
}

@media (max-width: 600px) {
  .hero {
    &__wrapper {
      & h1 {
        font-size: 48px;
      }

      & p {
        font-size: 16px;
        line-height: 120%;
      }
    }
  }
}
</style>