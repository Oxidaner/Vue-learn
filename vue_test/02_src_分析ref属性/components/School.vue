<template>
   <div class="demo">
     <h1>学校名称:{{ name }}</h1>
     <h1>学校地址: {{  address }}</h1>
   </div>
</template>

<script>
export default {
  name: "School",
  data(){
    return {
      address: '天津',
      name: '天津理工大学'
    }
  }
}
</script>
<style scoped>
   .demo{
     background: aqua;
   }
</style>
