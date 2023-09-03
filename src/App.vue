<template>
  <div id="app">
    <nav>
      <a  class = "logo" href = "/"><img style = "vertical-align: middle;" src = "./assets/favicon.png"><span style=" vertical-align: middle; ">鸟语的gal资源管理</span></a>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
/* 页面整体样式 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

/* logo设置 */
.logo {
    position: absolute;
    left: 19px;
    line-height: 25px; /*此处调整图标合适度*/

}
.logo:hover {
  color:aqua;
}
/* head整体样式设计 */
nav {
  padding: 15px;
  border-radius: 20px;
  background-color: #456cb4;
  text-align: right;
  font-size: 25px;    /*此处调整图标合适度 font-size与line-height设置相同*/
}

/* 未点击状态下head按钮的样式 */
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration:none;
  
}

/* 点击状态下head按钮的样式 */
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
