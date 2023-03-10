<script lang="ts" setup>
import { read, utils } from 'xlsx';

async function fileToJson(file: File) {
  const blob = await file.arrayBuffer();
  const workbook = read(blob);
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  return utils.sheet_to_json(worksheet);
}

async function upload(event: Event) {
  const file = (event.target as HTMLInputElement).files![0];
  if (!file) return;
  const json = await fileToJson(file);
  console.log(json);
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
