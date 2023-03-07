<script setup lang="ts">
import { ref } from 'vue';
import { VueDd } from 'vue-dd';
import apple from '../apple';

function tie(arr:Array<any>, key: string, leftKey: string[], childKey: string): Array<any> {
  function findAll(id: string) {
    const filtered = arr.filter((e) => e[key] === id);
    filtered.forEach((e) => {
      delete e[key];
      leftKey.forEach((k) => {
        delete e[k];
      });
    });
    return filtered;
  }
  const criterias = arr.map((e) => e[key]);
  const deduplicaition = [...new Set(criterias)];
  return deduplicaition.map((criteria) => {
    const found = arr.find((e) => e[key] === criteria);
    const result = {
      [key]: found[key],
    };
    leftKey.forEach((e) => {
      result[e] = found[e];
    });
    result[childKey] = findAll(criteria);
    return result;
  });
}

function keyChange(arr:Array<any>, from: string, to: string) {
  return arr.map((e) => {
    const a = {[to]: e[from], ...e};
    delete a[from];
    return a;
  });
}

function keyChanges(arr: Array<any>, fromTo: [string, string][]) {
  let result = arr;
  for (let i = 0; i < fromTo.length; i += 1) {
    result = keyChange(result, fromTo[i][0], fromTo[i][1]);
  }
  return result;
}

const text = ref('');

const resultObj = ref<any>([]);
function calc() {
  const bigs = tie(apple, 'bigPath', ['bigName'], 'mids');
  const bigsChanged = keyChanges(bigs, [['bigPath', 'path'], ['bigName', 'name']]);
  const result = bigsChanged.map((big) => {
    const mids = tie(big.mids, 'midID', ['midName', 'midPath'], 'views');
    const changedMids = keyChanges(mids, [['midID', 'id'], ['midName', 'name'], ['midPath', 'middlePath']]);
    const r = changedMids.map((e) => ({
      ...e,
      views: keyChanges(e.views, [['smID', 'id'], ['smName', 'name']]),
    }));
    return {
      name: big.name,
      path: big.path,
      mids: r,
    };
  });
  console.log(result);
  resultObj.value = result;
}
</script>
<template>
  <div>
    <label>
      json
      <input v-model="text" class="border-4" type="text">
    </label>
    <button class="rounded-full bg-indigo-500" @click="calc">
      계산
    </button>
    <div>
      <VueDd v-model="resultObj" font-size="1rem" max-height="800px" />
    </div>
    <button class="rounded-full bg-indigo-500" @click="calc">
      텍스트 복사
    </button>
  </div>
</template>
