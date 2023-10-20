<script setup>
import Menu from 'vue-material-design-icons/Menu.vue'
import Magnify from 'vue-material-design-icons/Magnify.vue'
import { ref } from 'vue'

const menuToggle = ref(false)

function toggleMenu() {
  menuToggle.value == true ? (menuToggle.value = false) : (menuToggle.value = true)
}
</script>
<template>
  <header>
    <div :class="menuToggle == true ? 'menuOn active' : 'menuOn'">
      <router-link to="/tabela">
<img src="https://i.ibb.co/M21tp39/COPAO.png" alt="" class="logoMenu"  />      </router-link>

      <ul>
        <li>
          <span class="menuElement" @click="toggleMenu()"><router-link to="/jogadores">jogadores</router-link></span>
        </li>
        <li>
          <span class="menuElement" @click="toggleMenu()"><router-link to="/tabela">times</router-link></span>
        </li>
        <li>
          <span class="menuElement" @click="toggleMenu()"><router-link to="/artilharia">artilharia</router-link></span>
        </li>
        <li>
          <span class="menuElement" @click="toggleMenu()"><router-link to="/chaveamento">chaveamento</router-link></span>
        </li>
        <li>
          <span class="menuElement" @click="toggleMenu()"><router-link to="/jogos">jogos</router-link></span>
        </li>
      </ul>
    </div>
    <div @click="menuToggle = false" :class="menuToggle == true ? 'teste1' : 'teste2'"></div>
    <div class="container">
      <Menu @click="toggleMenu()" class="icons" size="30" />
      <router-link to="/tabela">
        <img class="logo" src="https://i.ibb.co/M21tp39/COPAO.png" alt="" />
      </router-link>
      <div></div>
    </div>
    <div class="sub-header">
      <div class="sub-container">
        <router-link to="/tabela">Classificação</router-link>
        <router-link to="/artilharia">Artilharia</router-link>
        <router-link to="/chaveamento">Chaveamento</router-link>
        <router-link to="/jogos">Jogos</router-link>
      </div>
    </div>
  </header>
  <RouterView />
</template>
<style scoped>
.teste2 {
  visibility: hidden;
  z-index: 1;
  top: 0;
  left: 0;
  position: absolute;
  height: 100vh;
  width: 100vw;
  transition: 0.4s ease-in-out;
}
.logoMenu{
  width: 18vw;
}
.teste1 {
  z-index: 1;
  top: 0;
  left: 0;
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.596);
  transition: 0.4s ease-in-out;
}
.icons {
  cursor: pointer;
}
.menuOn {
  z-index: 2;
  left: -500px;
  position: absolute;
  transition: 0.2s ease-in-out;
  height: 100vh;
  width: 18vw;
}
.menuOn.active {
  z-index: 2;
  position: absolute;
  height: 100vh;
  width: 18vw;
  background-color: rgb(255, 255, 255);
  transition: 0.4s ease-in-out;
  left: 0%;
  box-shadow: 6px 0px 10px rgba(0, 0, 0, 0.384);
}
.menuOn li {
  text-decoration: none;
  font-size: 1.3em;
 
}
a{
  color: rgb(39, 39, 39);
}
.menuElement {
  padding-left: 1vw;
}
li :hover {
  cursor: pointer;
  color: rgb(0, 0, 0);
  transition: .2s;

}
li :active {
  color: green;

}
.menuOn li:first-child {
  padding-top: 5vh;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  gap: 2vw;
  display: flex;
  flex-direction: column;
}
header {
  background-image: radial-gradient(#17842a 20%, #096318 80%);
  display: flex;
  flex-direction: column;
  width: 100vw;
}
.container {
  width: 60.94vw;
  height: 13.89vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
}
.sub-header {
  display: flex;
  height: 3.7vh;
  background: #00420c;
  width: 100vw;
}
.logo {
  width: 25vw;
}
.sub-container {
  width: 60.94vw;
  display: flex;
  align-items: center;
  gap: 2vw;
  margin-right: auto;
  margin-left: auto;
}
.sub-container a {
  color: white;
}
</style>
