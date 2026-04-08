<template>
  <div class="digital" id="digital">
    <div class="container">
      <div class="digital__wrapper">
        <h2 class="digital__title">Цифровая разработка</h2>
      </div>
    </div>
    <Vue3Marquee
        id="marquee-slider"
        class="carousel"
        duration="35"
        :pauseOnHover="true"
        @mouseleave="activeIndex = null"
        ref="dropdownRef"
    >
      <div
          class="carousel__item"
          v-for="(item, idx) in items"
          :key="idx"
          @click="activeIndex = activeIndex === idx ? null : idx"
      >
        <div class="carousel__item-inner" :class="{ active: activeIndex === idx }">
          <p>{{ item.title }}</p>
          <span v-if="item.q">{{ item.q }}</span>
        </div>
        <div class="carousel__item-text" :class="[{ active: activeIndex === idx }]">
          <div>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </Vue3Marquee>
  </div>
</template>

<script setup>
import { Vue3Marquee } from 'vue3-marquee';
import {ref} from "vue";
import {onClickOutside} from "@vueuse/core";

const activeIndex = ref(null)

const dropdownRef = ref(null);
onClickOutside(dropdownRef, () => activeIndex.value = null);

const items = ref([
  {
    title: "Пользовательские интерфейсы",
    q: "*Frontend-разработка",
    text: "Разработка экранов, форм, каталогов, личных кабинетов и других интерфейсных элементов, с которыми пользователь взаимодействует в цифровом продукте."
  },
  {
    title: "Серверная логика и обработка данных",
    q: "*Frontend-разработка",
    text: "Построение внутренней логики сервиса, обработка данных, работа с учетными записями и взаимодействием между модулями системы."
  },
  {
    title: "Проектирование интерфейса и пользовательского опыта",
    q: "*UX/UI-дизайн",
    text: "Проработка структуры страниц, логики экранов, навигации и пользовательских сценариев для удобного и понятного взаимодействия с продуктом."
  },
  {
    title: "Сайты и лендинги",
    text: "Создание одностраничных, корпоративных и промо-сайтов, ориентированных на презентацию продукта, привлечение обращений и поддержку продаж."
  },
  {
    title: "Интернет-магазины",
    text: "Создание торгового функционала: каталогов, карточек товаров, корзины, оформления заказа и других сценариев онлайн-продаж."
  },
  {
    title: "Платежные решения",
    text: "Подключение приема платежей, настройка обработки транзакций и встраивание платежных сценариев в сайты, личные кабинеты и торговые разделы."
  },
  {
    title: "Административные панели",
    text: "Создание внутренних интерфейсов для управления контентом, товарами, заказами, пользователями, заявками и другими рабочими данными."
  },
  {
    title: "Тех. поддержка сайтов",
    text: "Сопровождение сайта после запуска, устранение технических ошибок и поддержание корректного функциони-рования всех ключевых разделов."
  }
])
</script>

<style lang="scss" scoped>
.digital {
  padding-top: 110px;

  &__title {
    color: #FFF;
    font-family: "Gros Ventre", sans-serif;
    font-size: 70px;
    font-weight: 400;
  }
}

.carousel {
  margin-top: 40px;

  &__item {
    margin-right: 10px;
    width: 420px;
    border-radius: 20px;
    background-color: rgba(116, 116, 116, 0.21);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: 0.2s;

    @include hover {
      transform: scale(1.03);
    }

    &-inner {
      cursor: pointer;
      height: 128px;
      border-radius: 20px;
      transition: 0.2s;
      position: relative;
      padding: 33px 20px;
      display: flex;
      align-items: center;

      &.active {
        border-radius: 20px;
        background: radial-gradient(217.58% 136.86% at 22.88% 20.87%, #2388FF 0%, #2F6EB8 46.63%, #FFF 100%);
      }

      & span {
        position: absolute;
        top: 10px;
        right: 15px;

        color: #FFF;
        text-align: right;
        font-family: Onest, sans-serif;
        font-size: 16px;
        font-weight: 600;
      }

      & p {
        color: #FFF;
        font-family: Onest, sans-serif;
        font-size: 24px;
        font-weight: 600;
      }
    }

    &-text {
      overflow: hidden;
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows 0.2s ease;

      & div {
        display: flex;
        flex-direction: column;

        & p {
          padding: 30px 25px;
          color: #FFF;
          text-align: justify;
          font-family: Onest, sans-serif;
          font-size: 18px;
          font-weight: 400;
        }
      }

      &.active {
        grid-template-rows: 1fr;
      }

      & > * {
        min-height: 0;
      }
    }
  }
}

:deep(.marquee) {
  align-items: flex-start !important;
  padding-block: 10px;
}

@media (max-width: 1100px) {
  .carousel {
    &__item {
      width: 350px;

      &-inner {
        & p {
          font-size: 20px;
        }

        & span {
          font-size: 14px;
        }
      }

      &-text {
        & div {
          & p {
            padding: 20px 15px;
            font-size: 16px;
          }
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .digital {
    &__title {
      font-size: 42px;
    }
  }

  .carousel {
    &__item {
      width: 300px;

      &-inner {
        padding: 20px 15px;
        height: 100px;

        & p {
          font-size: 16px;
        }

        & span {
          font-size: 12px;
        }
      }

      &-text {
        & div {
          & p {
            padding: 15px 10px;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>