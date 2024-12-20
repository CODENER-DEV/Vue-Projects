import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weather', () => {
  const temperatura = ref(0);

  const setTemperatura = (temp) => {
    temperatura.value = temp;
  }

  return {temperatura, setTemperatura}
});