<template>
  <div class="block">
    <input
        :placeholder="placeholder"
        :type="isPasswordVisible"
        :value="modelValue"
        @input="onInput"
        class="block__input"
    >
    <p v-if="!validate" class="block__error">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import {ref} from "vue";

const $emit = defineEmits()
const props = defineProps({
  type: String,
  placeholder: String,
  isError: Boolean,
  error: String,
  modelValue: [String, Number],
  rules: Array
})

const isPasswordVisible = ref(props.type)

const validate = ref(true)
const errorMessage = ref('')
const onInput = (e) => {
  let result = true

  props.rules?.forEach((rule) => {
    result = rule((e.target).value)

    if (result !== true) {
      errorMessage.value = String(result)
      result = false
    }
  })

  validate.value = result

  return $emit('update:modelValue', (e.target).value)
}
</script>

<style lang="scss" scoped>
.block {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  position: relative;

  &__input {
    width: 100%;
    padding: 13px 15px;
    border-radius: 13px;
    background-color: rgba(116, 116, 116, 0.21);
    border: 1px solid rgba(255, 255, 255, 0.3);

    color: rgba(255, 255, 255, 0.80);
    font-family: Onest, sans-serif;
    font-size: 18px;
    font-weight: 400;

    &::placeholder {
      color: rgba(255, 255, 255, 0.40);
    }
  }

  &__error {
    color: $error;
    font-size: 12px;
    font-weight: 500;
    animation: fadeInUp 0.3s ease;

    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translateY(-50%);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
}

@media (max-width: 1300px) {
  .block {
    &__input {
      padding: 7px 13px;

      font-size: 16px;
    }
  }
}
</style>