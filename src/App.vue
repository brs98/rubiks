<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/oll">Oll</router-link> |
      <router-link to="/pll">Pll</router-link> |
      <router-link to="/myalgorithms">My Algorithms</router-link> |
      <router-link to="/admin">Admin</router-link>
    </div>
    <router-view/>
    <a href="https://github.com/brs98/rubiks">Github Link</a>
  </div>
</template>

<style>
html, body {
  background-color: #d7dede;
}
html {
 height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: red;
}
</style>
