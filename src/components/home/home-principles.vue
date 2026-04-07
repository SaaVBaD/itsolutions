<template>
  <div class="principles">
    <div class="container">
      <div class="principles__wrapper">
        <div class="principles__left">
          <h2>Наши принципы</h2>
          <img src="@images/principlesImage.png" alt="image">
        </div>
        <div class="principles__block">
          <div class="principles__item">
            <h6>Адаптивность</h6>
            <p>Обеспечиваем гибкость в задачах и процессах без потери устойчивости и управляемости.</p>
          </div>
          <div class="principles__item">
            <h6>Индивидуальный подход</h6>
            <p>Разрабатываем решения с учетом специфики бизнеса, его структуры и приоритетов развития.</p>
          </div>
          <div class="principles__item">
            <h6>Интегральность</h6>
            <p>Объединяем цифровые инструменты, данные и процессы в единую рабочую среду.</p>
          </div>
          <div class="principles__item">
            <h6>Ориентация на результат</h6>
            <p>Направляем фокус на достижение измеримых показателей и создание основы для дальнейшего роста бизнеса.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.principles {
  padding-bottom: 100px;

  &__wrapper {
    display: flex;
    align-items: stretch;
    gap: 80px;
  }

  &__left {
    flex-shrink: 0;
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 70px;

    & h2 {
      color: #FFF;
      font-family: "Gros Ventre", sans-serif;
      font-size: 70px;
      font-weight: 400;
    }

    & img {
      width: 100%;
    }
  }

  &__block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px 45px;
    border-radius: 20px;
    background-color: rgba(116, 116, 116, 0.21);
    border: 1px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);

    & h6 {
      color: #FFF;
      font-family: Onest, sans-serif;
      font-size: 24px;
      font-weight: 600;
    }

    & p {
      color: #FFF;
      text-align: justify;
      font-family: Onest, sans-serif;
      font-size: 18px;
      font-weight: 400;
    }
  }
}

@media (max-width: 1100px) {
  .principles {
    &__wrapper {
      flex-direction: column;
    }

    &__left {
      width: 100%;

      & img {
        width: 50%;
        align-self: center;
      }
    }
  }
}

@media (max-width: 600px) {
  .principles {
    &__left {
      & h2 {
        font-size: 42px;
      }

      & img {
        width: 100%;
      }
    }

    &__item {
      padding: 15px 25px;

      & h6 {
        font-size: 20px;
      }

      & p {
        font-size: 16px;
      }
    }
  }
}
</style>