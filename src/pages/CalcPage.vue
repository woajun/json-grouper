<script setup lang="ts">
import { ref, computed } from 'vue';
import { VueDd } from 'vue-dd';
import MaintainSelect from './MaintainSelect.vue';
import { tieToObj } from './makeGroup';
import { getProperties } from './utils';

const props = defineProps<{
  target: Array<{[key: string]: unknown}>,
}>();

const data = computed(() => JSON.parse(JSON.stringify(props.target)));

const targetNames = computed(() => {
  const el = props.target[0];
  return el ? getProperties(el) : [];
});

// 남길거

const maintainSet = ref<Set<string>>(new Set());

function maintain(str: string) {
  maintainSet.value.add(str);
}

function remove(str: string) {
  maintainSet.value.delete(str);
}

function adjustMaintainArr(arr: any[]) {
  return arr.map((e) => {
    const result = {};
    maintainSet.value.forEach((el) => {
      result[el] = e[el];
    });
    return result;
  });
}

// 남길거 end

const tieBy = ref('');

const resultObj = ref<any>([]);

function calc() {
  const aData = adjustMaintainArr(data.value);
  const result = tieToObj(aData, tieBy.value);
  resultObj.value = result;
}

function log() {
  console.log(resultObj.value);
}

</script>
<template>
  <div>
    <div>
      <VueDd :model-value="props.target" font-size="1rem" max-height="400px" :dark="false" />
    </div>
    <div class="border-b-2 p-3">
      <label>
        묶음 기준
        <select v-model="tieBy" class="border-2">
          <option v-for="name in targetNames" :key="name">
            {{ name }}
          </option>
        </select>
      </label>
    </div>
    <div class="border-b-2 p-3">
      <div v-for="name in targetNames" :key="name">
        <MaintainSelect :value="name" @maintain="maintain" @remove="remove" />
      </div>
    </div>
    <button class="rounded-full bg-indigo-500" @click="calc">
      계산
    </button>
    <div>
      <VueDd v-model="resultObj" font-size="1rem" max-height="800px" :dark="false" />
    </div>
    <button class="rounded-full bg-indigo-500" @click="log">
      콘솔찍기
    </button>
  </div>
</template>
