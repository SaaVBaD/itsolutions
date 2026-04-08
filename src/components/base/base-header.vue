<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
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
        <div class="header__inner">
          <svg xmlns="http://www.w3.org/2000/svg" width="158" height="40" viewBox="0 0 158 40" fill="none">
            <path d="M70.4451 19.661H67.9918L66.6936 16.654H58.742L57.4437 19.661H55L61.1761 5.84048H64.2594L70.4451 19.661ZM65.9108 14.8421L62.7226 7.44035L59.5247 14.8421H65.9108Z" fill="white"/>
            <path d="M85.1743 19.661H82.9405V8.92456L73.6429 19.661H71.6192V5.84048H73.8529V16.5191L83.1506 5.84048H85.1743V19.661ZM78.8263 4.03822H78.3395C77.6013 4.03822 76.9076 3.85831 76.2585 3.4985C75.6094 3.13227 75.0812 2.64396 74.6739 2.03357C74.273 1.41675 74.0725 0.738895 74.0725 0H76.1344C76.1344 0.610391 76.3476 1.13404 76.774 1.57095C77.2067 2.00787 77.7285 2.22632 78.3395 2.22632H78.8263C79.4372 2.22632 79.9559 2.00787 80.3823 1.57095C80.815 1.13404 81.0314 0.610391 81.0314 0H83.0933C83.0933 0.738895 82.8896 1.41675 82.4823 2.03357C82.0814 2.64396 81.5564 3.13227 80.9073 3.4985C80.2582 3.85831 79.5645 4.03822 78.8263 4.03822Z" fill="white"/>
            <path d="M94.5578 19.661H92.3241V7.64274H86.6634V5.83084H100.218V7.64274H94.5578V19.661Z" fill="white"/>
            <path d="M115.339 19.661H113.105V8.92456L103.808 19.661H101.784V5.84048H104.018V16.5191L113.315 5.84048H115.339V19.661Z" fill="white"/>
            <path d="M57.5197 40H55.3049V26.4501H63.0756C63.694 26.4501 64.2777 26.5667 64.8266 26.7997C65.3756 27.0328 65.8551 27.3541 66.2653 27.7635C66.6754 28.1793 66.9973 28.6612 67.2307 29.2092C67.4705 29.751 67.5904 30.3337 67.5904 30.9573C67.5904 31.7825 67.3853 32.5384 66.9752 33.2251C66.5713 33.9054 66.0255 34.4503 65.3377 34.8597C64.6563 35.2629 63.9022 35.4645 63.0756 35.4645H57.5197V40ZM62.6308 33.6881C63.388 33.6881 64.0347 33.4203 64.5711 32.8849C65.1074 32.3495 65.3756 31.7069 65.3756 30.9573C65.3756 30.2014 65.1074 29.5557 64.5711 29.0203C64.041 28.4848 63.3943 28.2171 62.6308 28.2171H57.5197V33.6881H62.6308Z" fill="white"/>
            <path d="M80.8413 40H69.0859V26.4407H80.8413V28.2171H71.3006V32.3274H80.8413V34.1038H71.3006V38.2236H80.8413V40Z" fill="white"/>
            <path d="M99.1749 40H82.7343V26.4501H84.9491V38.2236H89.8519V26.4501H92.0667V38.2236H96.9601V26.4501H99.1749V40Z" fill="white"/>
            <path d="M112.871 40H101.115V26.4407H112.871V28.2171H103.33V32.3274H112.871V34.1038H103.33V38.2236H112.871V40Z" fill="white"/>
            <path d="M128.204 40H125.989V34.1133H116.978V40H114.764V26.4501H116.978V32.3369H125.989V26.4501H128.204V40Z" fill="white"/>
            <path d="M143.689 40H141.474V29.4738L132.255 40H130.248V26.4501H132.463V36.9196L141.682 26.4501H143.689V40Z" fill="white"/>
            <path d="M157.678 40H155.463V35.4645H151.895L148.194 40H145.392L149.207 35.4078C148.481 35.2881 147.831 35.0204 147.257 34.6046C146.683 34.1889 146.228 33.666 145.894 33.0361C145.559 32.3998 145.392 31.7069 145.392 30.9573C145.392 30.3337 145.509 29.751 145.742 29.2092C145.976 28.6612 146.301 28.1793 146.717 27.7635C147.128 27.3541 147.604 27.0328 148.147 26.7997C148.696 26.5667 149.282 26.4501 149.907 26.4501H157.678V40ZM155.463 33.6881V28.2265H150.342C149.585 28.2265 148.938 28.4943 148.402 29.0297C147.872 29.5652 147.607 30.2077 147.607 30.9573C147.607 31.7132 147.875 32.3589 148.412 32.8943C148.948 33.4235 149.592 33.6881 150.342 33.6881H155.463Z" fill="white"/>
            <g filter="url(#filter0_i_1477_17)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7787 2.31579C18.0384 3.58974 16.5469 5.4197 15.4715 6.38596C14.3907 7.35223 12.2345 8.77733 10.6728 9.56005C8.81924 10.4885 6.52256 11.0985 4.05296 11.3144L0.270197 11.6491L0 20.0162C3.5612 22.0027 5.42556 23.5196 6.44691 24.6694C7.46285 25.8246 8.9057 28.1026 9.64604 29.7328C10.4296 31.4656 11.1213 34.224 11.3051 36.3509L11.6185 40L19.9946 39.9892C21.9832 36.4319 23.5018 34.5695 24.6528 33.5493C25.8092 32.5344 28.0843 31.0931 29.7217 30.3536C31.4564 29.5709 34.2178 28.8799 36.3469 28.6964L40 28.3833L39.9892 20.0162C36.428 18.0297 34.5636 16.5128 33.5423 15.363C32.5263 14.2078 31.0943 11.9298 30.3594 10.2996C29.6244 8.66937 28.8787 5.75439 28.7004 3.82186L28.3707 0.31309L20.1243 0L18.7787 2.31579ZM26.0702 13.9039C23.393 11.2295 21.0193 6.12829 20.253 4.3823C20.1559 4.16104 19.8333 4.16104 19.7362 4.3823C18.9699 6.12828 16.5962 11.2295 13.9189 13.9039C11.2417 16.5783 6.13491 18.9495 4.38703 19.7149C4.16554 19.8119 4.16554 20.1342 4.38703 20.2312C6.13491 20.9966 11.2417 23.3677 13.9189 26.0421C16.5962 28.7165 18.9699 33.8177 19.7362 35.5637C19.8333 35.785 20.1559 35.785 20.253 35.5637C21.0193 33.8177 23.393 28.7165 26.0702 26.0421C28.7475 23.3677 33.8543 20.9966 35.6022 20.2312C35.8237 20.1342 35.8237 19.8119 35.6022 19.7149C33.8543 18.9495 28.7475 16.5783 26.0702 13.9039Z" fill="url(#paint0_linear_1477_17)"/>
            </g>
            <defs>
              <filter id="filter0_i_1477_17" x="0" y="0" width="40" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="2"/>
                <feGaussianBlur stdDeviation="6.25"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.0833333 0 0 0 0 1 0 0 0 0.28 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1477_17"/>
              </filter>
              <linearGradient id="paint0_linear_1477_17" x1="-0.00558089" y1="4.93019e-07" x2="39.9944" y2="40" gradientUnits="userSpaceOnUse">
                <stop stop-color="#2388FF"/>
                <stop offset="0.558181" stop-color="#2F6EB8"/>
                <stop offset="1" stop-color="white"/>
              </linearGradient>
            </defs>
          </svg>
          <nav class="header__nav">
            <router-link :to="{ name: 'home' }" class="header__nav-item">
              Главная
            </router-link>
            <div class="header__nav-item" @click="scrollTo('about', 'home')">
              О нас
            </div>
            <div ref="dropdownRef" class="header__nav-item" :class="[{ active: isDropdownActive }]" @click="handleDropdown">
              Услуги
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                <path d="M11.0193 0L12 1.04108L6.65505 6.71157C6.56941 6.80297 6.46756 6.87551 6.35538 6.92502C6.2432 6.97452 6.12289 7 6.00139 7C5.87988 7 5.75958 6.97452 5.6474 6.92502C5.53521 6.87551 5.43337 6.80297 5.34773 6.71157L0 1.04108L0.980725 0.000980854L6 5.32314L11.0193 0Z" fill="currentColor"/>
              </svg>
              <div class="dropdown" :class="[{ active: isDropdownActive }]">
                <div class="dropdown__wrapper">
                  <div class="dropdown__item">
                    <p @click="scrollTo('system', 'home')">Системная архитектура бизнеса</p>
                  </div>
                  <div class="dropdown__item">
                    <p @click="scrollTo('digital', 'home')">Цифровая разработка</p>
                  </div>
                  <div class="dropdown__item">
                    <p @click="scrollTo('audit', 'home')">Аудит и консалтинг</p>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div class="header__actions">
            <div class="header__button" @click="scrollTo('contact', 'home')"><span>Связаться с нами</span></div>
            <svg class="header__mobile" @click="isMenuActive = !isMenuActive" width="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Menu / Menu_Alt_01">
                <path id="Vector" d="M12 17H19M5 12H19M5 7H19" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <base-menu :isActive="isMenuActive" @close-modal="handleCloseModal"/>
  </header>
</template>

<script setup>
import {scroll} from "@/core/helpers/scrollTo.js";
import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";
import BaseMenu from "@/components/base/base-menu.vue";
import {onClickOutside} from "@vueuse/core";

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

const isMenuActive = ref(false)
const handleCloseModal = () => {
  isMenuActive.value = false;
}

const isDropdownActive = ref(false)
const handleDropdown = () => {
  isDropdownActive.value = !isDropdownActive.value
}

const dropdownRef = ref(null);
onClickOutside(dropdownRef, () => isDropdownActive.value = false);
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: 3;
  width: 100vw;
  top: 35px;
  left: 0;

  &__wrapper {
    position: relative;
    border-radius: 15px;
    padding: 10px 22px;

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
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 1;
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 70px;

    &-item {
      position: relative;
      display: flex;
      align-items: center;
      gap: 12px;
      cursor: pointer;
      transition: 0.2s;
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

  &__actions {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  &__button {
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

  &__mobile {
    transition: 0.2s;
    cursor: pointer;
    display: none;
    color: #ffffff;

    @include hover {
      color: #2388FF;
    }
  }
}

.dropdown {
  position: absolute;
  z-index: 3;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  border-radius: 20px;
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.2s ease;
  -webkit-box-shadow: inset 0 0 1px 0.5px rgba(255, 255, 255, 0.7);
  box-shadow: inset 0 0 1px 0.5px rgba(255, 255, 255, 0.7);
  background-color: rgba(116, 116, 116, 0.21);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  &__wrapper {
    display: flex;
    align-items: center;
  }

  &.active {
    grid-template-rows: 1fr;
  }

  & > * {
    min-height: 0;
  }

  &__item {
    padding: 15px 20px;
    cursor: pointer;
    transition: 0.2s;

    &:first-child {
      padding-inline: 25px 0;
    }

    &:last-child {
      padding-inline: 0 25px;

      & p {
        border: none;
      }
    }

    & p {
      transition: 0.2s;
      border-right: 1px solid #fff;
      padding-right: 20px;
      color: #FFF;
      font-size: 16px;
      font-weight: 400;
      white-space: nowrap;
    }

    @include hover {
      & p {
        color: #2388FF;
      }
    }
  }
}

@media (max-width: 1300px) {
  .header {
    &__nav {
      gap: 30px;
    }
  }
}

@media (max-width: 750px) {
  .header {
    &__nav {
      display: none;
    }

    &__mobile {
      display: block;
    }
  }
}

@media (max-width: 550px) {
  .header {
    &__button {
      display: none;
    }
  }
}
</style>