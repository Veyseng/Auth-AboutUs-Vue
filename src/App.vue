<template>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root{
    --primary-color: #D72323;
    --light-color: #EEEEEE;
    --black-color: #303841;
    --dark-color: #3A4750;
    --max-width: 1100px;
  }
#app {
  font-family: 'Ubuntu', sans-serifs;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--black-color);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
