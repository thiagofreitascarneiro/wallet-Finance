<!-- eslint-disable vue/multi-word-component-names -->
<template>
<header>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light nav-bar">
  <a class="navbar-brand" href="#">
    <img src="">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <button class="login-button">
          <a href="#">Log In</a>
        </button>
      </li>
    </ul>
  </div>
</nav>
</header>
<!-- <div class="nav-bar">

  <button class="login-button">
    <p>Log In</p>
  </button>

</div> -->
</template>

<script>
export default {
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/scss/global";

.login-button {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  cursor: pointer;
  position: relative;

  width: 128px;
  height: 40px;

  background: $white;
  border: 2px solid $white;
  border-radius: 24px;

   &:hover {
    background: $cor2;
    color: $white;
    border: none;
   
    a {
      /* padding: 0px; */
      /* margin: 0px; */
      
    }
  }
  a{
  width: 48px;
  height: 24px;
  color: $cor1 !important;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin: 5px auto ;
  display: flex;
  align-items: center;
  position: absolute;

  }

  

}



</style>
