<template>
  <div id="app">
    <!-- 头部 -->
    <!-- :poiInfo='poiInfo'   将poiInfo的值绑定并传递到Myheader页面去 -->
    <Myheader :poiInfo='poiInfo'></Myheader>
    <!-- 导航 -->
    <MyNav></MyNav>
    <!-- 主体内容 -->
    <!-- <div class="content">
    </div> -->
    <router-view/>

  </div>
</template>

<script>
//1.导入
import Myheader from "./components/Header/Header";
import MyNav from "./components/Nav/Nav";
export default {
  name: "app",
  components: {
    //2.注册
    Myheader,
    MyNav
  },
  data() {
    return {
      //header组件需要的信息（商家信息）
      poiInfo: {}
    };
  },
  created() {
    var that = this;
    //发起异步请求获取数据
    //通过axios发起get请求
    this.$axios
      .get("/api/goods")
      .then(function(response) {
        //获取到数据之后的操作
        //console.log(response);
        var dataSource = response.data;
        if (dataSource.code == 0) {
          that.poiInfo = dataSource.data.poi_info;
          console.log(that.poiInfo);
        }
      })
      .catch(function(error) {
        //出错处理
        console.log(error);
      });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  margin: 0px;
  padding: 0px;
}
</style>
