<script setup lang="ts">
import { ref } from 'vue';
import { VueDd } from 'vue-dd';
import { makeGroup, changeArrayPropertyNames} from './makeGroup';
import data from '../apple';

const text = ref(JSON.stringify(data, null, 2));

const resultObj = ref<any>([]);
function calc() {
  const bigs = makeGroup(data, 'bigPath', ['bigName'], 'mids');
  const bigsChanged = changeArrayPropertyNames(bigs, [['bigPath', 'path'], ['bigName', 'name']]);
  const result = bigsChanged.map((big) => {
    const mids = makeGroup(big.mids, 'midID', ['midName', 'midPath'], 'views');
    const changedMids = changeArrayPropertyNames(mids, [['midID', 'id'], ['midName', 'name'], ['midPath', 'middlePath']]);
    const r = changedMids.map((e) => ({
      ...e,
      views: changeArrayPropertyNames(e.views, [['smID', 'id'], ['smName', 'name']]),
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
      <textarea v-model="text" class="border-2" cols="100" rows="10" />
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
