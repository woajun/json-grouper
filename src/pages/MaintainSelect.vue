<script setup lang="ts">
import { ref, watchEffect } from 'vue';

const props = defineProps<{
  value: string,
}>();

const emit = defineEmits<{
  (e: 'maintain', value: string): void,
  (e: 'remove', value: string): void,
}>();

const status = ref<'maintain' | 'remove'>('maintain');

watchEffect(() => {
  const e = status.value;
  if (e === 'maintain') {
    emit(e, props.value);
  } else {
    emit(e, props.value);
  }
});

</script>
<template>
  <div>
    <label>
      {{ value }}
    </label>
    <select v-model="status" class="border-2">
      <option value="maintain">
        유지
      </option>
      <option value="remove">
        삭제
      </option>
    </select>
  </div>
</template>
