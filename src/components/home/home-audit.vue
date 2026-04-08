<template>
  <div class="audit" id="audit">
    <div class="container">
      <div class="audit__wrapper" data-aos="fade-up">
        <h2 class="audit__title">Аудит и консалтинг</h2>
        <div class="audit__block">
          <div
              class="audit__item"
              v-for="(item, idx) in items"
              :key="idx"
              :class="{ active: activeIndex === idx }"
              @click="activeIndex = idx"
          >
            <h6>{{ item.title }}</h6>
            <p>{{ item.text }}</p>
            <div class="audit__item-number">0{{ idx + 1 }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import { onMounted } from "vue";
import AOS from "aos";

const activeIndex = ref(0)

const items = ref([
  {
    title: "Аудит цифровых решений",
    text: "Оценка действующих систем, процессов и архитектурных решений для выявления ограничений, возможностей для развития и факторов, влияющих на стабильность цифровой среды компании."
  },
  {
    title: "Оптимизация рабочих процессов",
    text: "Упрощение рабочих сценариев, сокращение лишних согласований, устранение повторяющихся действий и повышение слаженности внутренних операций."
  },
  {
    title: "Система метрик продуктивности",
    text: "Формирование понятных показателей для оценки результатов работы сотрудников, подразделений и связанных процессов."
  },
  {
    title: "Внутренний мониторинг",
    text: "Построение механизмов контроля и наблюдения за внутренними операциями для повышения прозрачности и управляемости процессов."
  },
  {
    title: "Цифровая безопасность",
    text: "Оценка рисков цифровой среды и определение мер по защите инфраструктуры, корпоративных данных, учетных записей и внутренних доступов."
  },
  {
    title: "Подготовка стратегии и плана развития",
    text: "Формирование стратегии развития цифровой среды компании и поэтапного плана изменений с учетом текущих задач, приоритетов бизнеса и перспектив дальнейшего роста."
  }
])

onMounted(() => {
  AOS.init();
})
</script>

<style lang="scss" scoped>
.audit {
  padding-top: 110px;

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px
  }

  &__title {
    color: #FFF;
    font-family: "Gros Ventre", sans-serif;
    font-size: 70px;
    font-weight: 400;
  }

  &__block {
    width: 100%;
    display: flex;
    gap: 30px;
    height: 350px;
  }

  &__item {
    flex: 1;
    width: 110px;
    height: 100%;
    flex-shrink: 0;
    padding: 30px 20px 70px 20px;
    border-radius: 20px;
    background-color: rgba(116, 116, 116, 0.21);
    border: 1px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: 0.2s;
    cursor: pointer;

    @include hover {
      transform: scale(1.03);
    }

    & * {
      transition: 0.2s;
    }

    & h6 {
      writing-mode: vertical-rl;
      //transform: rotate(180deg);
      color: #FFF;
      font-family: Onest, sans-serif;
      font-size: 20px;
      font-weight: 500;
      max-height: 100%;
    }

    & p {
      color: #FFF;
      text-align: justify;
      font-family: Onest, sans-serif;
      font-size: 0;
      font-weight: 400;
    }

    &-number {
      position: absolute;
      left: 50%;
      bottom: 20px;
      transform: translateX(-50%);
      border-radius: 61px;
      background: radial-gradient(217.58% 136.86% at 22.88% 20.87%, #2388FF 0%, #2F6EB8 46.63%, #FFF 100%);
      padding: 6px 22px;

      font-family: Onest, sans-serif;
      font-size: 18px;
      font-weight: 500;
      color: #fff;
    }

    &.active {
      flex: 6;
      width: 100%;
      border-radius: 20px;
      background: radial-gradient(217.58% 136.86% at 22.88% 20.87%, #2388FF 0%, #2F6EB8 46.63%, #FFF 100%);
      padding: 50px 40px;
      justify-content: unset;
      align-items: flex-start;

      & h6 {
        writing-mode: horizontal-tb;
        transform: unset;
        font-size: 36px;
        font-weight: 600;
      }

      & div {
        left: 20px;
        transform: unset;
        background: #fff;
        color: #000;
      }

      & p {
        margin-top: 25px;
        font-size: 18px;
      }
    }
  }
}

@media (max-width: 1300px) {
  .audit {
    &__block {
      height: 400px;
    }
  }
}

@media (max-width: 1100px) {
  .audit {
    &__block {
      height: unset;
      flex-direction: column;
    }

    &__item {
      width: 100%;
      flex: unset !important;
      border-radius: 20px;
      background: radial-gradient(217.58% 136.86% at 22.88% 20.87%, #2388FF 0%, #2F6EB8 46.63%, #FFF 100%);
      padding: 30px 20px 30px 20px;
      justify-content: unset;
      align-items: flex-start;

      & h6 {
        writing-mode: unset;
        font-size: 30px;
        font-weight: 600;
      }

      & p {
        margin-top: 25px;
        font-size: 16px;
      }

      &-number {
        margin-top: 20px;
        position: unset;
        left: 20px;
        transform: unset;
        background: #fff;
        color: #000;
      }

      &.active {
        flex: unset !important;
        border-radius: 20px;
        background: radial-gradient(217.58% 136.86% at 22.88% 20.87%, #2388FF 0%, #2F6EB8 46.63%, #FFF 100%);
        padding: 30px 20px 30px 20px;
        justify-content: unset;
        align-items: flex-start;

        & h6 {
          writing-mode: unset;
          font-size: 30px;
          font-weight: 600;
        }

        & p {
          margin-top: 25px;
          font-size: 16px;
        }

        & div {
          margin-top: 20px;
          position: unset;
          left: 20px;
          transform: unset;
          background: #fff;
          color: #000;
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .audit {
    &__title {
      font-size: 42px;
    }

    &__item {
      padding: 20px 15px;

      & h6 {
        font-size: 20px;
      }

      & p {
        font-size: 14px;
      }

      &-number {
        padding: 6px 15px;
        font-size: 14px;
      }

      &.active {
        padding: 20px 15px;

        & h6 {
          font-size: 20px;
        }

        & p {
          font-size: 14px;
        }

        & div {
          padding: 6px 15px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>