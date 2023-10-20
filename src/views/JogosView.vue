<script setup>
import { ref, onMounted } from 'vue'
import api from '../plugins/axios'


const rodadas = ref([])

onMounted(async () => {
  let response = await api.get('campeonatos/2/rodadas')
  rodadas.value = response.data
})
</script>
<template>
    <h1>Jogos</h1>
   {{ rodadas }}
</template>
<style scoped>
</style>