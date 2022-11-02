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
            <form id="registration" action="">
              <label for="email">Email</label>
              <input id="email" name="email" type="email" v-model="email">

              <label for="password">Password</label>
              <input id="password" name="password" type="password" v-model="password">

              <p class="forgot-password">
                <a>Forgot password</a>
              </p>

              <button class="button" @click.prevent="sigin">Sign in</button>
            </form>
            
            <div class="creating-account">
              <p>Don’t have an account? 
                
                <router-link to="/register" class="sign-free">
                  Sign up for free
                </router-link>
              </p>
            </div>

        </div>
      </div>
      <div class="image-login only-desk" >
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
  },
  data() {
      return {
        email: "",
        password: "",
        verifyRegisteredUser: true,
      }   
  },
  methods: {
        verifyLoginUser() {
          this.verifyRegisteredUser = !this.verifyRegisteredUser
        }
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
        margin-left: 300px;
          img {
            margin-top: 30px;
          }
        .content-form {
          margin-top: 150px;
          display: flex;
          flex-direction: column;
        h2 {
          font-family: $font;
          font-style: normal;
          font-weight: 600;
          font-size: 30px;
          line-height: 37px;
          color: $colorTextBlack;
        }
        p {
          margin-top: 5px;
          font-family: $fontText;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          color: $colorTextGrey;
          
        }

        form {
          display: flex;
          flex-direction: column;
          margin-top:35px;
          .button {
          margin-top: 30px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 10px;
          width: 350px;
          height: 48px;
          }
          .forgot-password {
            text-align: end;
            margin-top: 10px;
            a {
              font-family: $fontText !important;
              font-style: normal !important;
              font-weight: 700 !important;
              font-size: 14px !important;
              line-height: 17px !important;
              color: $colorTextBlack !important;
              cursor: pointer;
              &::after {
                  background: none repeat scroll 0 0 transparent;
                  bottom: 0;
                  content: "";
                  display: block;
                  height: 2px;
                  left: 50%;
                  position: absolute;
                  background: $cor2;
                  transition: width 0.3s ease 0s, left 0.3s ease 0s;
                }
                &:hover::after {
                  width: 100%;
                  left: 0;
                 
                }
              
            }
           
          }
        }

        .form-register {

        }

        .creating-account {
          margin-top: 90px;
          text-align: center;
            p {
              font-family: $fontText;
              font-style: normal;
              font-weight: 500;
              font-size: 14px;
              line-height: 17px;
              color: $colorTextGrey;

              a {
                font-family: $fontText;
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 17px;
                color: $colorTextBlack !important;
                cursor: pointer;
                position:relative;
                text-decoration: underline $cor2 5px !important;

                &::after {
                  background: none repeat scroll 0 0 transparent;
                  bottom: 0;
                  content: "";
                  display: block;
                  height: 2px;
                  left: 50%;
                  position: absolute;
                  background: $cor2;
                  transition: width 0.3s ease 0s, left 0.3s ease 0s;
                }
                &:hover::after {
                  width: 100%;
                  left: 0;
                  text-decoration: none !important; 
                  transition: none !important;
                }
                
                
              }
             
            }
            .sign-free {
            
              font-family: $fontText;
              font-style: normal;
              font-weight: 500;
              font-size: 14px;
              line-height: 17px;
              color: $colorTextBlack !important;
              cursor: pointer;
              position:relative;
              text-decoration: underline $cor2 5px !important;

              &::after {
                background: none repeat scroll 0 0 transparent;
                bottom: 0;
                content: "";
                display: block;
                height: 2px;
                left: 50%;
                position: absolute;
                background: $cor2;
                transition: width 0.3s ease 0s, left 0.3s ease 0s;
              }
              &:hover::after {
                width: 100%;
                left: 0;
                text-decoration: none !important; 
                transition: none !important;
              }   
            }
        }
      }
    }   
      .image-login {
        img {
          height: 100vh;
         
        }
      }
  }
}



@media(max-width:$mobile) {
  .container-Login {
 
  .login-content {
    display:flex;
    justify-content: center;
      .sigin-content {
        text-align: center;
        margin-left: 0px;
          img {
           
          }
        .content-form {
         
        h2 {
         
        }
        p {
          
          
        }

        form {
          
          .button {
            width: 300px;
          }
          .forgot-password {
            
            a {
             
              &::after {
                 
                }
                &:hover::after {
                  
                }
            }
           
          }
        }

        .creating-account {
         
            p {
             

              a {
                
                &::after {
               
                }
                &:hover::after {
                  
                }
                
              }
             
            }
        }
      }
    }   
      .image-login {
        img {
          
         
        }
      }
  }
}
}



</style>
