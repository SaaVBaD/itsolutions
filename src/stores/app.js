import {defineStore} from "pinia";
import {ref} from "vue";

export const useAppStore = defineStore('app', () => {
	const isOverflowHidden = ref(false);
	const setOverflowHidden = (value) => {
		isOverflowHidden.value = value;
	};

	return {
		isOverflowHidden,
		setOverflowHidden,
	};
});
