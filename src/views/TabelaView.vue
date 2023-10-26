<script setup>
import { ref, onMounted } from 'vue'
import { db } from '@/firebase'
import { collection, getDocs } from 'firebase/firestore'

const tabela = ref([]).sort((a,b) => a.pontos == b.pontos ? (b.pontos + b.gols_pro - b.gols_contra) - (a.pontos + a.gols_pro - a.gols_contra): b.pontos - a.pontos)

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, 'times'))
  let test = []
  querySnapshot.forEach((doc) => {
    const time = {
      id: doc.id,
      nomeTime: doc.data().nomeTime.toUpperCase(),
      vitorias: doc.data().vitorias,
      derrotas: doc.data().derrotas,
      empates: doc.data().empates,
      jogos: doc.data().jogos,
      gols_pro: doc.data().golsPro,
      gols_contra: doc.data().golsContra,
      aproveitamento: doc.data().porcentagem,
      escudo: doc.data().escudo,
      pontos: doc.data().vitorias * 3 + doc.data().empates,
      ultJogos: doc.data().ultJogos,
      
    }
    test.push(time)
  })
  tabela.value = test
  console.log(tabela.value)
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
     <tr v-for="time in tabela" :key="time.id">
          <td style="font-weight: 900">
            <div class="nomeTime-box">
              <span>{{ tabela.indexOf(time) + 1 }}º </span>
              <span
                :class="
                  (tabela.indexOf(time) + 1) <= 8 && (tabela.indexOf(time)) + 1 >= 6
                    ? 'zona-r'
                    : (tabela.indexOf(time) + 1) <= 5 && (tabela.indexOf(time) + 1) >= 4
                    ? 'zona-n'
                    : 'zona-c'
                "
              >
              </span>

              <span style="display: flex;"><img style="width: 4vh" :src="time.escudo" alt="" /></span>

              <span>{{ time.nomeTime }}</span>
            </div>
          </td>
          <td class="marks">{{ (time.pontos) }}</td>
          <td>{{ time.jogos }}</td>
          <td class="marks">{{ time.vitorias }}</td>
          <td>{{ time.empates }}</td>
          <td class="marks">{{ time.derrotas }}</td>
          <td>{{ time.gols_pro }}</td>
          <td class="marks">{{ time.gols_contra }}</td>
          <td>{{ time.gols_pro - time.gols_contra }}</td>
          <td class="marks">{{ Number(time.vitorias) / Number(time.jogos) * 100 }}</td>
          <td class="ult_jogos">
            <span
              v-for="jogo in time.ultJogos"
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

.nomeTime-box {
  display: flex;
  align-items: center;
  gap: 1vw;
}
.zona-r {
  display: block;
  width: 2px;
  height: 2vh;
  background-color: red;
}
.zona-n {
  display: block;
  width: 2px;
  height: 2vh;
  background-color: grey;
}
.zona-c {
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


