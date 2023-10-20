<script setup>
import { ref, onMounted } from 'vue'
import { db } from '@/firebase'
import { collection, getDocs } from 'firebase/firestore'
import playerCard from '../components/playerCard.vue'

const jogadores = ref([])

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, 'jogadores'))
  let test = []
  querySnapshot.forEach((doc) => {
    const jogador = {
      id: doc.id,
      nomeJogador: doc.data().nome.toUpperCase(),
      posicao: doc.data().posição.toUpperCase(),
      gols: doc.data().gols,
      escudo: doc.data().escudo,
      assists: doc.data().assists,
      foto: doc.data().foto,
      cardY: doc.data().cardY,
      cardV: doc.data().cardV



    }
    test.push(jogador)
  })
  jogadores.value = test
})


</script>
<template>
  <div class="jogadoresScreen"> 
    <playerCard v-for="jogador in jogadores" :key="jogador.id" :jogador="jogador"></playerCard>

  </div>
</template>
<style scoped>
.jogadoresScreen{
  padding: 6vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2vw;
}
</style>
