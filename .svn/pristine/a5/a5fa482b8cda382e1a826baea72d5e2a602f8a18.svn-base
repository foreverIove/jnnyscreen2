<template>
  <div class="cards">
    <div class="card red" @click="getType(1)">
      <p class="tip">Hover Me</p>
      <p class="second-text">地球自转</p>
    </div>
    <div class="card blue" @click="getType(2)">
      <p class="tip">Hover Me</p>
      <p class="second-text">区县划分</p>
    </div>
    <div class="card yellow" @click="getType(4)">
      <p class="tip">Hover Me</p>
      <p class="second-text">大屏辅助</p>
    </div>
    <div class="card green" @click="getType(3)">
      <p class="tip">Hover Me</p>
      <p class="second-text">项目简介</p>
    </div>
  </div>
</template>

<script setup lang="ts">
let $emit = defineEmits(['IfShow'])
const getType = (type: number) => {
  $emit('IfShow', type)
}
</script>

<style scoped>
.cards {
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: absolute;
  z-index: 9999;
  top: 200px;
  left: 100px;
}
.cards .yellow {
  background-color: rgb(178, 218, 77);
}
.cards .red {
  background-color: #f43f5e;
}

.cards .blue {
  background-color: #3b82f6;
}

.cards .green {
  background-color: #22c55e;
}

.cards .card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100px;
  width: 250px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: 400ms;
}

.cards .card p.tip {
  font-size: 1em;
  font-weight: 700;
}

.cards .card p.second-text {
  font-size: 0.7em;
}

.cards .card:hover {
  transform: scale(1.1, 1.1);
}

.cards:hover > .card:not(:hover) {
  filter: blur(10px);
  transform: scale(0.9, 0.9);
}
</style>
