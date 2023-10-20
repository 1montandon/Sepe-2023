<script setup>
import { ref, onMounted } from 'vue'
import api from '../plugins/axios'

const tabela = ref([])

onMounted(async () => {
  let response = await api.get('campeonatos/2/tabela')
  tabela.value = response.data
})
</script>
<template>
  <div class="table-page">
    <h1>TABELA</h1>
    <table>
      <thead>
        <tr>
          <th>Classificação</th>
          <th>P</th>
          <th>J</th>
          <th>V</th>
          <th>E</th>
          <th>D</th>
          <th>GP</th>
          <th>GC</th>
          <th>SG</th>
          <th>%</th>
          <th>ult. jogos</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="time in tabela.slice(0, 8)" :key="time.id">
          <td class="nomeTime-box" style="font-weight: 900">
            <span> {{ time.posicao }}º </span>
            <span :class="time.posicao <= 8 && time.posicao >= 6 ? 'zona-r' : time.posicao <=5 && time.posicao >=4 ? 'zona-n' : 'zona-c' "> </span>
            <span><img style="width: 3vh" :src="time.time.escudo" alt="" /></span>
            <span>{{ time.time.nome_popular }}</span>
          </td>
          <td class="marks">{{ time.pontos }}</td>
          <td>{{ time.jogos }}</td>
          <td class="marks">{{ time.vitorias }}</td>
          <td>{{ time.empates }}</td>
          <td class="marks">{{ time.derrotas }}</td>
          <td>{{ time.gols_pro }}</td>
          <td class="marks">{{ time.gols_contra }}</td>
          <td>{{ time.saldo_gols }}</td>
          <td class="marks">{{ time.aproveitamento }}</td>
          <td class="ult_jogos">
            <span
              v-for="jogo in time.ultimos_jogos"
              :key="jogo.legth"
              :class="jogo == 'v' ? 'v' : jogo == 'd' ? 'd' : 'e'"
            >
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
h1 {
  padding: 54px 0px 0px 0px;
  text-align: start;
  font-weight: 900;
}


.nomeTime-box{
  display: flex;
  gap: 1vw;
  align-items: center;
}
.zona-r{
  display: block;
  width: 2px;
  height: 2vh;
  background-color: red;
}
.zona-n{
  display: block;
  width: 2px;
  height: 2vh;
  background-color: grey;
}
.zona-c{
  display: block;
  width: 2px;
  height: 2vh;
  background-color: green;
}
.ult_jogos {
  display: flex;
  height: 6vh;
  align-items: center;
  justify-content: space-evenly;
}
.v {
  width: 1.1vh;
  height: 1.1vh;
  background-color: green;
  border-radius: 50%;
  content: '';
  display: block;
}
.e {
  width: 1.1vh;
  height: 1.1vh;
  background-color: grey;
  border-radius: 50%;
  content: '';
  display: block;
}
.d {
  width: 1.1vh;
  height: 1.1vh;
  background-color: rgb(128, 0, 0);
  border-radius: 50%;
  content: '';
  display: block;
}

.table-page {
  width: 60.94vw;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
}
tr {
  text-align: center;
  border-bottom: solid 1px #ddd;
  height: 6vh;
}

table {
  border-top: 1px solid #ddd;
  border-collapse: collapse;
}
.marks {
  background-color: #e9e9e9;
}

th {
  padding: 5px 10px;
}
</style>
