// 该文件是整个项目的入口文件
import Vue from 'vue' 
//引入App组件,它是所有组建的父组件
import App from './App.vue'

//关闭vue的生产提示
Vue.config.productionTip = false

//创建Vue实例对象 --- vm
new Vue({
    //下面这行代码一会解释,完成了这个功能:将App组件放入容器中
    render: h => h(App),
}).$mount('#app')

// new Vue({
//     el:'#app',
//     render: h => h(App),
// })