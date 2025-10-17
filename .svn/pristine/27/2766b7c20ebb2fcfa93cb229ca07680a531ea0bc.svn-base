<template>
  <div>
    <!-- <Map></Map> -->
    <!-- <Loading></Loading> -->
    <bubble v-if="getPhoto.map4"></bubble>
    <info v-if="getPhoto.map3"></info>
    <mapList @IfShow="IfShow"></mapList>
    <ball v-show="getPhoto.map1"></ball>
    <Area v-if="getPhoto.map2"></Area>
  </div>
</template>

<script setup lang="ts">
import info from '@/components/info/index.vue'
import ball from '@/components/3DEcharts/index.vue'
import mapList from '@/views/test_cxs/mapList.vue'
import Area from '@/components/Area/index.vue'
import bubble from '@/components/bubble/index.vue'
import { reactive } from 'vue'
interface mapPhoto {
  map1: boolean
  map2: boolean
  map3: boolean
  map4: boolean
}
const getPhoto = reactive<mapPhoto>({
  map1: true,
  map2: false,
  map3: false,
  map4: false
})
const IfShow = (type: number) => {
  if (type == 1) {
    getPhoto.map1 = true
    getPhoto.map2 = false
    getPhoto.map3 = false
    getPhoto.map4 = false
  } else if (type == 2) {
    getPhoto.map1 = false
    getPhoto.map2 = true
    getPhoto.map3 = false
    getPhoto.map4 = false
  } else if (type == 3) {
    getPhoto.map3 = true
  } else if (type == 4) {
    getPhoto.map1 = false
    getPhoto.map2 = false
    getPhoto.map3 = false
    getPhoto.map4 = true
  }
  console.log(type)
}
</script>

<style></style>
