<template>
  <h1>New Vue3</h1>
</template>
<script setup lang="ts">
import request from "@/utils/request"
const test = async () => {
  const res = await request.get('/home/index')
  console.log(res)
}
test()
</script>
<style>

</style>  
