<script setup lang="ts">
import { ref, watch } from 'vue';
import ExcelToJson from './components/ExcelToJson.vue';

const data = ref<Array<any>>([]);

watch(data, (e) => {
  console.log(e);
});
</script>
<template>
  <div>
    <ExcelToJson @upload="(aData: any) => data = aData" />
    <RouterView :target="data" />
  </div>
</template>
