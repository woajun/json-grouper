<script setup lang="ts">
import { ref } from 'vue';
import ExcelToJson from './components/ExcelToJson.vue';

const data = ref<Array<any>>([]);

</script>
<template>
  <div>
    <ExcelToJson @upload="(aData: any) => data = aData" />
    <RouterView :target="data" />
  </div>
</template>
