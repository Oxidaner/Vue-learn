<template>
   <div>
     <!-- ref和id作用相同 取DOM -->
     <h1 v-text="msg" ref="title"></h1> 
     <button ref="btn" @click="showH">点我输出上方的dom元素</button>
     <School ref="sch"/>
   </div>
</template>

<script>
import School from "./components/School";

export default {
  name: "App",
  data(){
    return {
      msg: '欢迎学习Vue',
    }
  },
  methods:{
    showH(e){
      console.log(this.$refs.title); //真实DOM元素this ==> vc(app组件) 
      console.log(this.$refs.btn); //真实DOM元素
      console.log(e.target); //真实DOM元素
      console.log(this.$refs.sch); //可以是school组件加refs属性 获得的是School组件实例对象vc
    }
  },
  components:{
    School,
  },
}
</script>

