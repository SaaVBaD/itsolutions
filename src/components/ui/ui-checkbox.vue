<template>
  <div>
    <input
      :id="'checkbox' + id"
      class="checkbox"
      type="checkbox"
      :value="modelValue"
      @input="onInput"
      :checked="modelValue"
    >
    <label :for="'checkbox' + id" class="checkbox__label">
      <slot />
    </label>
  </div>
</template>

<script setup>
const $emit = defineEmits()
const props = defineProps({
  id: [Number, String],
  modelValue: Boolean
})

const onInput = (event) => {
  $emit('update:modelValue', event.target.checked);
};
</script>

<style lang="scss" scoped>
.checkbox {
  display: none;
  opacity: 0;

  &__label {
    color: #FFF;
    font-family: Onest, sans-serif;
    font-size: 18px;
    font-weight: 400;
  }
}

.checkbox + .checkbox__label::before {
  content: '';
  display: inline-block;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  flex-grow: 0;
  border-radius: 2px;
  background-color: #FFF;
  margin-right: 10px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

.checkbox:checked + .checkbox__label::before {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%404040' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

.checkbox + .checkbox__label {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  user-select: none;
}

@media (max-width: 600px) {
  .checkbox {
    &__label {
      font-size: 14px;
    }
  }
}
</style>