<template>
  <div class="team">
    <div class="container">
      <div class="team__wrapper">
        <h2 class="team__title">Присоединяйся к нашей команде</h2>
        <div class="team__block">
          <div class="team__block-inner" ref="itemRef">
            <div
                class="team__item"
                @click="activeItem = 1"
            >
              <img src="@images/teamImage1.png" alt="image">
              <div class="team__item-inner" :class="[{ active: activeItem === 1 }]">
                <h6>Современный офис</h6>
                <p>Удобная локация и комфортное пространство</p>
              </div>
            </div>
            <div
                class="team__item"
                @click="activeItem = 2"
            >
              <img src="@images/teamImage2.png" alt="image">
              <div class="team__item-inner" :class="[{ active: activeItem === 2 }]">
                <h6>Интересные проекты</h6>
                <p>Работа над технологич-ными решениями</p>
              </div>
            </div>
            <div
                class="team__item"
                @click="activeItem = 3"
            >
              <img src="@images/teamImage3.png" alt="image">
              <div class="team__item-inner" :class="[{ active: activeItem === 3 }]">
                <h6>Компенсация обедов</h6>
                <p>Внимание к ежедневному комфорту</p>
              </div>
            </div>
            <div
                class="team__item"
                @click="activeItem = 4"
            >
              <img src="@images/teamImage4.png" alt="image">
              <div class="team__item-inner" :class="[{ active: activeItem === 4 }]">
                <h6>Молодая команда</h6>
                <p>Коллектив, в котором приятно работать</p>
              </div>
            </div>
          </div>
        </div>
        <button class="team__button">Смотреть вакансии</button>
        <svg style="display:none;">
          <filter id="displacementFilter">
            <feImage
                href="data:image/png;base64,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"
                preserveAspectRatio="none"/>
            <feDisplacementMap in="SourceGraphic"
                               in2="turbulence"
                               scale="200" xChannelSelector="G" yChannelSelector="B" />
          </filter>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {onClickOutside} from "@vueuse/core";

const activeItem = ref(0)

const itemRef = ref(null);
onClickOutside(itemRef, () => activeItem.value = 0);
</script>

<style lang="scss" scoped>
.team {
  padding-block: 200px 100px;
  background-image: url(@images/teamBg.png);
  background-size: cover;
  background-repeat: no-repeat;

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  &__title {
    color: #FFF;
    text-align: center;
    font-family: "Gros Ventre", sans-serif;
    font-size: 70px;
    font-weight: 400;
  }

  &__block {
    position: relative;
    border-radius: 30px;
    padding: 40px;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: 0;
      overflow: hidden;
      border-radius: 15px;
      -webkit-box-shadow: inset 0 0 2px 1px rgba(255, 255, 255, 0.7);
      box-shadow: inset 0 0 2px 1px rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(3px) url(#displacementFilter);
    }

    &-inner {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      gap: 40px;
    }
  }

  &__item {
    cursor: pointer;
    border-radius: 20px;
    overflow: hidden;
    background: rgba(4, 4, 4, 0.20);
    box-shadow: -13px -13px 17.3px 0 rgba(0, 0, 0, 0.25) inset, 13px 13px 17.3px 0 rgba(0, 0, 0, 0.25) inset;
    position: relative;

    & img {
      display: block;
    }

    &-inner {
      position: absolute;
      inset: 0;
      backdrop-filter: blur(12.5px);
      padding: 30px 15px 55px 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      opacity: 0;
      transition: 0.2s;

      &.active {
        opacity: 1;
      }

      & h6 {
        color: #FFF;
        font-family: Onest, sans-serif;
        font-size: 24px;
        font-weight: 600;
      }

      & p {
        color: #FFF;
        font-family: Onest, sans-serif;
        font-size: 18px;
        font-weight: 400;
      }
    }
  }

  &__button {
    margin-top: 20px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.56);
    background: linear-gradient(0deg, rgba(70, 98, 130, 0.00) 0%, rgba(70, 98, 130, 0.00) 100%), linear-gradient(180deg, rgba(108, 108, 108, 0.15) 0%, rgba(255, 255, 255, 0.01) 100%);
    box-shadow: 0 1px 2px 0 rgba(13, 32, 62, 0.50);
    cursor: pointer;
    transition: 0.2s;
    padding: 11px 20px;

    color: #FFF;
    text-align: center;
    font-family: "Gros Ventre", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;

    @include hover {
      background: rgba(35, 136, 255, 0.30);
    }
  }
}

@media (max-width: 1300px) {
  .team {
    &__item {
      width: 220px;
      height: 220px;
      object-fit: cover;

      &-inner {
        padding: 20px 15px 30px 15px;

        & h6 {
          font-size: 20px;
        }

        & p {
          font-size: 16px;
        }
      }
    }
  }
}

@media (max-width: 1100px) {
  .team {
    &__block {
      &-inner {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
}

@media (max-width: 600px) {
  .team {
    background-size: contain;
    background-position: center;

    &__title {
      font-size: 42px;
    }

    &__block {
      &-inner {
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>