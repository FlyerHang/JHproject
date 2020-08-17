<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/images/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
html,body,ul,p{
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
}
.el-menu-item-group>.el-menu-item-group__title{
    padding: 0;
}
ul>.el-menu-item{
    /* background: #283949!important; */
    padding-left: 0!important;
    font-size: 12px!important;
}
.el-submenu>.el-submenu__title{
  text-align: left;
  padding-left: 50px!important;
}
.el-menu-vertical-demo.el-menu>div>.el-menu-item{
    text-align: left;
    padding-left: 50px!important;
}
.el-menu-vertical-demo.el-menu>div>.el-menu-item.is-active{
    text-align: left;
    padding-left: 50px!important;
    background: linear-gradient(to right,#188ffe,#1890ff,#33c1ff)!important;
}
.el-menu-item, .el-submenu__title{
  height: 46px;
  line-height: 46px;
}
.el-menu-vertical-demo.el-menu{
  border: none;
}
</style>
