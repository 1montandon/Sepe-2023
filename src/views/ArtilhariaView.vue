<script setup>
import { ref, onMounted } from 'vue'
import { db } from '@/firebase'
import { collection, getDocs } from 'firebase/firestore'

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
      camisa: doc.data().numeroCamisa,
      foto: doc.data().foto,


    }
    test.push(jogador)
  })
  jogadores.value = test
})
</script>
<template>
  <div class="jogadores">
    <h1>Artilheiros do copão futsal 2023</h1>
  <hr />
    <div class="jogador" v-for="jogador in jogadores.sort((a,b) => (b.gols) - (a.gols)).slice(0,5)" :key="jogador.id">
        <div class="right-side-jogador">
        <div class="img_jogador"><img class="img_jogador" :src="jogador.foto" alt=""> </div>
        <div class="escudo-time" > <img style="width:3vh;" :src="jogador.escudo" alt=""> </div>
      <div class="jogador-nome-box">
        <div class="jogador_nome">{{ jogador.nomeJogador }}</div>
        <div class="jogador_posicao">{{ jogador.posicao}} <span class="bar"></span> {{ jogador.camisa }}</div>
      </div>
    </div>

      <div class="gols">{{ jogador.gols }}</div>

    </div>
  </div>
</template>
<style scoped>
.bar{
  display: block;
  width: 2px;
  height: 1.5vh;
  background-color: rgb(0, 0, 0);
}
.jogadores{
    padding: 54px 0px 0px 0px;
    display: flex;
    gap: 1vh;
    flex-direction: column;
    align-items: center;
    width: 60.94vw;
    margin-right: auto;
    margin-left: auto;
}

.jogador{
    border-top: 1px solid #DDD;
    display: flex;
    width: 100%;
    height: 10vh;
    align-items: center;
    justify-content: space-between;
}
.img_jogador{
    height: 8vh;
    width: 8vh;
    border-radius: 15%;
    background-color: black;
}
.right-side-jogador{
    display: flex;
    align-items: center;
}
.escudo-time{
    display: flex;
    height: 8vh;
    align-items: flex-end;
    width: 3.0vw;
    justify-content: center
}
.jogador_nome{
    font-weight: 700;
    font-size:1.4em;
}
.jogador_posicao{
    color: #5c5c5c;
    display: flex;
    align-items: center;
    gap: 0.7vw;
}
.gols{
    font-weight: 700;
    font-size:1.4em;
}
.jogador-nome-box{
    display: flex;
    flex-direction: column;
}
</style>
