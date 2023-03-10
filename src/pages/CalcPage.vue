<script setup lang="ts">
import { ref, computed } from 'vue';
import { VueDd } from 'vue-dd';
import { tieToObj } from './makeGroup';
import { getProperties } from './utils';

const props = defineProps<{
  target: Array<{[key: string]: unknown}>,
}>();

const resultObj = ref<any>([]);

const targetNames = computed(() => {
  const el = props.target[0];
  return el ? getProperties(el) : [];
});

const selected = ref('');

const data = computed(() => JSON.parse(JSON.stringify(props.target)));

function calc() {
  const result = tieToObj(data.value, selected.value);
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
    <div>
      <div v-for="name in targetNames" :key="name">
        <label>
          {{ name }}
        </label>
        <select class="border-2">
          <option value="">
            유지
          </option>
          <option value="">
            삭제
          </option>
        </select>
      </div>
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
