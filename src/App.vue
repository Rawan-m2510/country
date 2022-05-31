<template>
  <div>
    <AboutView></AboutView>
    <CountryCard></CountryCard>
    <AdviceEnd></AdviceEnd>
  </div>
</template>
<script>
import AboutView from './components/AboutView.vue'
import CountryCard from './components/CountryCard.vue'
import AdviceEnd from './components/AdviceEnd.vue'
export default {
  components: {
    AboutView,
    CountryCard,
    AdviceEnd,
  },
}
</script>

<style>
@import './assets/style.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6b6b6b;
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
