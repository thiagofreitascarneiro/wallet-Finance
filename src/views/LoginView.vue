<template>
  <section class="container-Login">
    <div class="login-content">
      <div class="sigin-content">
        <picture>
          <source src="../../public/images/logo-black.png?t=3">
          <img src="../../public/images/logo-black.png?t=3" alt="">
        </picture>
        <div class="content-form">
            <h2>Welcome back</h2> 
            <p>Welcome back! Please enter your details</p>
            <form>
              <label for="email">Email</label>
              <input id="email" name="email" type="email" v-model="email">

              <label for="senha">Senha</label>
              <input id="senha" name="senha" type="password" v-model="senha">
            </form>

        </div>
      </div>
      <div class="image-login">
        <picture>
          <source src="../../public/images/login.png?t=3">
          <img src="../../public/images/login.png?t=3" alt="">
        </picture>
      </div>
       
    </div>

  </section>
  
</template>

<script>
export default {
  name: 'LoginPage',
  components: {

  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/global";

.container-Login {
  width: 100%;
  height: 900px;
  margin: 0px;
  padding: 0px;
  .login-content {
    display:flex;
    justify-content: space-between;
      .sigin-content {
        margin-left: 120px;
          img {
            margin-top: 30px;
          }
      }
      .content-form {
        margin-top: 150px;
        h2 {
          font-family: $font;
          font-style: normal;
          font-weight: 600;
          font-size: 30px;
          line-height: 37px;
          color: $colorTextBlack;
        }

        p {
          margin-top: 15px;
          font-family: $fontText;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          color: $colorTextGrey;
        }
      }
      .image-login {
        img {
          height: 100vh;
         
        }
      }
  }
}


</style>
