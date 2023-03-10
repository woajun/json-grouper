<script lang="ts" setup>
import { read, utils } from 'xlsx';

const emit = defineEmits<{
  (e: 'upload', value: any[]): void
}>();

async function fileToJson(file: File) {
  const blob = await file.arrayBuffer();
  const workbook = read(blob);
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  return utils.sheet_to_json(worksheet);
}

async function upload(event: Event) {
  const {files} = event.target as HTMLInputElement;
  if (!files) return;
  const file = files.item(0);
  if (!file) return;
  const json = await fileToJson(file);
  emit('upload', json);
}

</script>
<template>
  <div>
    <input
      type="file"
      @change="upload"
    >
  </div>
</template>
