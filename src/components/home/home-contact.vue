<template>
  <div class="contact" id="contact">
    <div class="container">
      <div class="contact__wrapper">
        <h2 class="contact__title">Как с нами связаться</h2>
        <div class="contact__block">
          <div class="contact__left">
            <p class="contact__left-text">Мы всегда открыты к предложениям о новых проектах и к кандидатам, которые хотят присоединиться к нашей команде.</p>
            <div>
              <p class="contact__left-address">г. Москва, пер. Переведеновский, д. 13, стр. 18, помещ. 21Н/3</p>
              <p class="contact__left-time">Пн-Пт 10:00-19:00</p>
              <a class="contact__left-link" href="mailto:contact@digitalbusinesscrew.com">contact@digitalbusinesscrew.com</a>
              <a class="contact__left-link" href="tel:+79850000000">+7 (985) 000 0000</a>
            </div>
          </div>
          <form class="contact__form" @submit.prevent="contact">
            <ui-input
                v-model="name"
                :rules="[required]"
                :placeholder="'Имя'"
            />
            <div class="contact__form-box">
              <ui-input
                  v-model="phone"
                  :rules="[required]"
                  :placeholder="'Номер'"
              />
              <ui-input
                  v-model="email"
                  :rules="[isEmail]"
                  :placeholder="'Почта'"
              />
            </div>
            <ui-textarea
                v-model="message"
                :rules="[required]"
                :placeholder="'Комментарий'"
            />
            <div class="contact__form-bottom">
              <ui-checkbox v-model="isAgree">
                Я принимаю условия пользовательского соглашения.
              </ui-checkbox>
              <button
                  class="contact__form-button"
                  type="submit"
                  :disabled="!isFormValid"
              >
                Отправить
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ElNotification} from "element-plus";
import {computed, ref} from "vue";
import UiInput from "@/components/ui/ui-input.vue";
import UiTextarea from "@/components/ui/ui-textarea.vue";
import UiCheckbox from "@/components/ui/ui-checkbox.vue";
import {isEmail, required} from "@/core/rules/textFieldRules.js";

const name = ref('')
const phone = ref('')
const email = ref('')
const message = ref('')
const isAgree = ref(false)

const isFormValid = computed(() => {
  return (
      name.value &&
      phone.value &&
      email.value &&
      message.value &&
      isAgree.value === true
  )
})

const contact = async () => {
  const res = await fetch('https://shieldquotientlab.com/api/contact-us', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name.value,
      phone: phone.value,
      email: email.value,
      message: message.value
    })
  })

  ElNotification({
    message: "Your message has been sent!",
    type: 'success'
  })

  name.value = ''
  phone.value = ''
  email.value = ''
  message.value = ''
}
</script>

<style lang="scss" scoped>
.contact {
  padding-top: 100px;

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &__title {
    text-align: left;
    color: #FFF;
    font-family: "Gros Ventre", sans-serif;
    font-size: 70px;
    font-weight: 400;
  }

  &__block {
    display: flex;
    align-items: stretch;
    gap: 250px;
  }

  &__left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;

    &-text {
      color: #FFF;
      text-align: justify;
      font-family: Onest, sans-serif;
      font-size: 20px;
      font-weight: 400;
      letter-spacing: -0.4px;
    }

    & div {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding-bottom: 60px;
    }

    &-address {
      color: #FFF;
      font-family: Onest, sans-serif;
      font-size: 20px;
      font-weight: 600;
    }

    &-time {
      color: #FFF;
      font-family: Onest, sans-serif;
      font-size: 18px;
      font-weight: 400;
    }

    &-link {
      transition: 0.2s;
      color: #FFF;
      font-family: Onest, sans-serif;
      font-size: 20px;
      font-weight: 600;

      @include hover {
        color: #2388FF;
      }
    }
  }

  &__form {
    width: 685px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 15px;

    &-box {
      display: flex;
      align-items: flex-start;
      gap: 10px;
    }

    &-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &-button {
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.56);
      background: linear-gradient(0deg, rgba(49, 49, 49, 0.20) 0%, rgba(49, 49, 49, 0.20) 100%), linear-gradient(180deg, rgba(108, 108, 108, 0.15) 0%, rgba(255, 255, 255, 0.01) 100%);
      box-shadow: 0 1px 2px 0 rgba(13, 32, 62, 0.50);
      padding: 11px 20px;
      cursor: pointer;
      transition: 0.2s;

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
}

@media (max-width: 1450px) {
  .contact {
    &__block {
      gap: 50px;
    }
  }
}

@media (max-width: 1300px) {
  .contact {
    &__title {
      text-align: center;
    }

    &__block {
      flex-direction: column;
      align-items: center;
      gap: 40px;
    }

    &__left {
      align-items: center;
      gap: 20px;

      &-text {
        text-align: center;
      }

      & div {
        align-items: center;
        padding-bottom: 0;
      }
    }
  }
}

@media (max-width: 750px) {
  .contact {
    &__form {
      width: 100%;
    }
  }
}

@media (max-width: 600px) {
  .contact {
    &__title {
      font-size: 42px;
    }

    &__left {
      & div {
        gap: 10px;
      }

      &-text {
        font-size: 16px;
      }

      &-address {
        font-size: 16px;
        text-align: center;
      }

      &-time {
        font-size: 16px;
      }

      &-link {
        font-size: 16px;
      }
    }

    &__form {
      &-bottom {
        flex-direction: column;
        gap: 20px;
      }
    }
  }
}

@media (max-width: 500px) {
  .contact {
    &__form {
      &-box {
        flex-direction: column;
        gap: 15px;
      }
    }
  }
}
</style>