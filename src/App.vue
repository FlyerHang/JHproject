<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
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
    padding-left: 70px!important;
    font-size: 12px!important;
}
</style>
