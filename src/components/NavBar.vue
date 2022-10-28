<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light nav-bar">
    <a class="navbar-brand" href="#">
      <img src="../../public/images/logo.png">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active" id="home">
          <router-link to="/home" class="nav-link">
            Home
          </router-link>
        </li>
        
        <li class="nav-item">
          <router-link to="/home/services" v-scroll-to="'#services'" class="nav-link">
            Services
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/home/developers" v-scroll-to="'#developers'" class="nav-link">
            Developers
          </router-link>
        </li>
        <li class="nav-item">
        <button class="button-transparent">
          <router-link to="/login">
              Log In
          </router-link>
        </button>
        </li>
      </ul>
    </div>
  </nav>
  </header>
  </template>
  
  <script>


  export default {
    name: 'NavBar',
    methods: {
     
  }
  
}
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="scss" scoped>
    @import "../assets/scss/global";
.button-transparent {
    width: 120px !important;
    height: 40px !important;
    font-size: 17px;
    color: $white !important;
    margin-left: 50px;

    a {
      a:hover {
        text-decoration: none;
      }
    }
}
  </style>