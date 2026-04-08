<template>
  <div class="services">
    <div class="container">
      <div class="services__wrapper" data-aos="zoom-in-up">
        <h2 class="services__title">Наши услуги</h2>
        <div class="services__block">
          <div class="services__item">
            <div>
              <p>Системная архитектура бизнеса</p>
            </div>
          </div>
          <div class="services__item">
            <div>
              <p>Цифровая разработка</p>
            </div>
          </div>
          <div class="services__item">
            <div>
              <p>Аудит и консалтинг</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
})
</script>

<style lang="scss" scoped>
.services {
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &__title {
    color: #FFF;
    text-align: center;
    font-family: "Gros Ventre", sans-serif;
    font-size: 70px;
    font-weight: 400;
  }

  &__block {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  &__item {
    width: 100%;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      display: block;
      background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.75) 50%,
              rgba(255, 255, 255, 0) 100%
      );
      height: 300px;
      width: 100px;
      transform: translate(0);
      position: absolute;
      animation: rotate 5s linear forwards infinite;
      z-index: 0;
      top: 50%;
      transform-origin: top center;
    }

    & div {
      position: relative;
      z-index: 1;
      width: 100%;
      margin: 2px;
      background-color: #191919;
      padding: 35px 23px;
      border-radius: 25px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);

      & p {
        color: #FFF;
        text-align: center;
        font-family: Onest, sans-serif;
        font-size: 24px;
        font-weight: 400;
        letter-spacing: -0.48px;
      }
    }
  }
}

@keyframes rotate {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 1450px) {
  .services {
    &__item {
      & div {
        padding: 25px 15px;

        & p {
          font-size: 20px;
        }
      }
    }
  }
}

@media (max-width: 1150px) {
  .services {
    &__block {
      flex-direction: column;
    }

    &__item {
      &::before {
        height: 550px;
      }
    }
  }
}

@media (max-width: 600px) {
  .services {
    &__title {
      font-size: 42px;
    }

    &__item {
      &::before {
        height: 300px;
      }
    }
  }
}
</style>