<!-- eslint-disable guard-for-in -->
<!-- eslint-disable no-restricted-syntax -->
<script setup lang="ts">
import { ref, computed } from 'vue';
import { VueDd } from 'vue-dd';
import { makeGroup } from './makeGroup';

const props = defineProps<{
  target: Array<{[key: string]: unknown}>,
}>();

const resultObj = ref<any>([]);
const targetNames = computed(() => {
  const el = props.target[0];
  if (el) {
    const result = [];
    for (const key in el) {
      result.push(key);
    }
    return result;
  }
  return [];
});

const selected = ref('');

function calc() {
  const result = makeGroup(props.target, selected.value, [], 'kkk');
  console.log(result);
  resultObj.value = result;
}
</script>
<template>
  <div>
    <div>
      <VueDd :model-value="props.target" font-size="1rem" max-height="400px" :dark="false" />
    </div>
    <div>
      <label>
        묶음 기준
        <select v-model="selected" class="border-2">
          <option v-for="name in targetNames" :key="name">
            {{ name }}
          </option>
        </select>
      </label>
    </div>
    <button class="rounded-full bg-indigo-500" @click="calc">
      계산
    </button>
    <div>
      <VueDd v-model="resultObj" font-size="1rem" max-height="800px" :dark="false" />
    </div>
    <button class="rounded-full bg-indigo-500" @click="calc">
      텍스트 복사
    </button>
  </div>
</template>
