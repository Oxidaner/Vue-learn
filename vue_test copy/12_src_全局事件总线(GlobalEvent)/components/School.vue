<template>
  <div class="demo">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    console.log(this);
    return {
      name: "天津理工大学",
      address: "天津",
    };
  },

  mounted() {
    console.log("School", this);
    // this.$bus.$on("hello", function (data) {
    //   console.log(this); //this === School
    //   console.log(`我是School组件,我收到了数据,${data}`);
    // });
    this.$bus.$on("hello", (data) => {
      console.log(this); //this === vc
      console.log(`我是School组件,我收到了数据,${data}`);
    });
  },
  beforeDestroy() {
    this.$bus.$off("hello"); //销毁解绑
  },
};
</script>

<style scoped>
/*scoped代表局部的*/
.demo {
  background: skyblue;
  padding: 5px;
}
</style>


