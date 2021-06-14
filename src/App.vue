<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
    <app-footer></app-footer>

  </div>
</template>

<script>
import AppHeader from "./components/template/AppHeader";
import AppFooter from "./components/template/AppFooter";
export default {
  name: 'App',
  components: {
    AppFooter,
    AppHeader


  }
}
</script>


