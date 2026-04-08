<template>
  <div class="about" id="about">
    <div class="container">
      <div class="about__wrapper">
        <div class="about__top">
          <h2 class="about__top-title">О компании</h2>
          <p class="about__top-text">Мы помогаем компаниям выстраивать цифровые системы, которые повышают эффективность, упрощают процессы и поддерживают рост.</p>
        </div>
        <div class="about__main">
          <div class="about__item">
            <div>
              <h6>Анализируем</h6>
              <img src="@icons/aboutIcon1.png" alt="icon">
            </div>
            <p>Детально изучаем текущие процессы и формируем структуру будущей системы, состав функций и логику работы.</p>
          </div>
          <div class="about__item">
            <div>
              <h6>Разрабатываем</h6>
              <img src="@icons/aboutIcon2.png" alt="icon">
            </div>
            <p>Создаем цифровой продукт, настраиваем интеграции и ключевые процессы.</p>
          </div>
          <div class="about__item">
            <div>
              <h6>Запускаем</h6>
              <img src="@icons/aboutIcon3.png" alt="icon">
            </div>
            <p>Внедряем продукт и сопровож-даем его технически после запуска.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.about {
  position: relative;
  z-index: 1;
  //margin-top: -150px;
  padding-block: 150px;
  background-image: url(@images/aboutBg.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 65px;
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-title {
      color: #FFF;
      font-family: "Gros Ventre", sans-serif;
      font-size: 70px;
      font-weight: 400;
    }

    &-text {
      width: 465px;
      color: #FFF;
      text-align: justify;
      font-family: Onest, sans-serif;
      font-size: 20px;
      font-weight: 400;
      letter-spacing: -0.4px;
    }
  }

  &__main {
    display: flex;
    align-items: stretch;
    gap: 20px;
  }

  &__item {
    padding: 30px 40px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    border-radius: 25px;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: 0.2s;

    @include hover {
      transform: scale(1.03);
    }

    & div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      & h6 {
        color: #FFF;
        font-family: Onest, sans-serif;
        font-size: 24px;
        font-weight: 400;
        letter-spacing: -0.48px;
      }
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

@media (max-width: 1200px) {
  .about {
    &__main {
      flex-direction: column;
      gap: 40px;
    }

    &__item {
      padding: 20px 30px;
      gap: 15px;
    }
  }
}

@media (max-width: 1100px) {
  .about {
    &__top {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;

      &-text {
        width: 100%;
      }
    }
  }
}

@media (max-width: 600px) {
  .about {
    &__top {
      &-title {
        font-size: 42px;
      }

      &-text {
        font-size: 16px;
      }
    }

    &__item {
      & div {
        & h6 {
          font-size: 20px;
        }
      }

      & p {
        font-size: 16px;
      }
    }
  }
}
</style>