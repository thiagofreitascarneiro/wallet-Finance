<template>
    <section class="container-register">
        <NavBar/>
        <div class="register-content">
           <div class="content-logo only-desk">
                <picture>
                    <source src="../../public/images/logo.png?t=3">
                    <img src="../../public/images/logo.png?t=3" alt="">
                </picture> 
                <h2>
                    Welcome!
                </h2> 
                <p>Start for free and get attractive ideas from the your portifolio.</p>
                <button class="button-transparent" @click.prevent="toLoginPage">
                    Log In
                </button>
           </div>
           <div class="content-register">
                <h2>Open your account</h2>
                <p>fill the form</p>
                <div class="form-register">
                    <form>
                        <div class="form-part-1">
                            <label for="name" style="margn-left:50px">Name</label>
                            <input id="name" name="name" type="text" v-model="name">

                            <label for="email">Email</label>
                            <input id="email" name="email" type="email" v-model="email">

                            <label for="password">Password</label>
                            <input id="password" name="senha" type="password" v-model="password">

                            <label for="password">Confirm Password</label>
                            <input id="password" name="password" type="password" v-model="password">

                            <label for="">Zip Code</label>
                            <input id="zipcode" name="zipcode" type="text" v-model="zipcode" @keyup="fillZipCode()">

                        </div>
                        <div class="form-part-2">
                            <label for="street">Street</label>
                            <input id="street" name="street" type="text" v-model="street">

                            <label for="number">Number</label>
                            <input id="number" name="number" type="text" v-model="number">

                            <label for="district">District</label>
                            <input id="district" name="district" type="text" v-model="district">

                            <label for="city">City</label>
                            <input id="city" name="city" type="text" v-model="city">

                            <label for="state">State</label>
                            <input id="state" name="state" type="text" v-model="state">

                            <button class="button">
                                Register
                            </button>
                        </div>
                        
                       
                    </form>
                </div>
               
            </div>
        </div>
    </section>

</template>

<script>
import NavBar from '../components/NavBar.vue';
import {mapFields} from '../../services/helpers.js'
import {getZipCode} from '../../services/services.js'

export default {
    name: 'RegisterUser',
    data() {
        return {
           
        }
    },
    computed: {
        ...mapFields({
            fields: ["name", "email", "street", 
            "password", "zipcode", "number", "district", 
            "city", "state" ],
            base: "user",
            mutation: "REGISTER_USER"
        })
    },
    components: {
        NavBar 
    },

    methods: {
        fillZipCode() {  
            // if(this.zipcode ==8) 
            getZipCode(this.zipcode).then(response => {
                console.log(response)
                this.street = response.data.logradouro;
                this.district = response.data.bairro;
                this.city = response.data.uf;
                this.state = response.data.localidade;
            })
        },
        toLoginPage() {
            this.$router.push("/login")
        },
    }, 
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/global";

.container-register {
    display: flex;
    justify-content: center;
    margin-top: 90px;
    .register-content {
        width: 1000px;
        height: 750px;  
        background: $cor2;
        box-shadow: 3px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 16px;
        display: flex;
        .content-logo {
            width: 304px;
            height: 750px;
            background: $black;
            border-radius: 16px 0px 0px 16px;
            display: flex;
            flex-direction: column;
            text-align: center;
            align-items: center;

            img {
                margin-top: 150px;
                
            }
            h2 {
                font-family: $font;
                font-style: normal;
                font-weight: 700;
                font-size: 30px;
                line-height: 39px;
                color: $white;
                margin-top: 120px;
            }
            p {
                font-family: $fontText;
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 34px;  
                color: $white;
                margin-top: 15px;
            }
            .image-idea {
                img {
                    width: 100px;
                }
            }

            .button-transparent {
                margin-top: 80px;
                color: $white;
            }
        }
        .content-register {
            display: flex;
            flex-direction: column;
            text-align: center;
            align-items: center;
            align-content: center;
            margin-left: 80px;
            
            h2 {
                font-family: $font;
                font-style: normal;
                font-weight: 800;
                font-size: 32px;
                line-height: 48px;
                text-align: center;
                color: $black;
                margin-top: 50px;
                }
            p {
                font-family: $fontText;
                font-style: normal;
                font-weight: 500;
                font-size: 19px;
                line-height: 28px;
                color: $black;
                margin-bottom: 30px;
            }
            .form-register {
                display: flex;
                flex-direction: column;
                form {
                    display: flex;
                   .form-part-1 {
                    display: flex;
                    flex-direction: column;
                   } 

                   .form-part-2 {
                    display: flex;
                    flex-direction: column;
                    margin-left: 50px;
                    

                    .button {
                       background-color: $black !important; 
                       color: $white !important;
                       margin-left: 25px;
                        margin-left: -150px;
                        margin-top: 10px;
                    }
                   }
                }
            }
           
        }

    }
}

@media(max-width:$mobile) {
    .container-register {
    display: flex;
    justify-content: center;
    margin-top: 150px;
    .register-content {
        width: 320px;
        height: 1300px;  
        background: $cor2;
        box-shadow: 3px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 16px;
        display: flex;
        .content-logo {
            width: 304px;
            height: 750px;
            background: $black;
            border-radius: 16px 0px 0px 16px;
            display: flex;
            flex-direction: column;
            text-align: center;
            align-items: center;

            img {
                margin-top: 150px;
                
            }
            h2 {
                font-family: $font;
                font-style: normal;
                font-weight: 700;
                font-size: 30px;
                line-height: 39px;
                color: $white;
                margin-top: 120px;
            }
            p {
                font-family: $fontText;
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 34px;  
                color: $white;
                margin-top: 15px;
            }
            .image-idea {
                img {
                    width: 100px;
                }
            }

            .button-transparent {
                margin-top: 80px;
            }
        }
        .content-register {
            display: flex;
            flex-direction: column;
            text-align: center;
            align-items: center;
            align-content: center;
            margin-left: 10px;
            
            h2 {
               
                }
            p {
                
            }
            .form-register {
                display: flex;
                flex-direction: column;
                form {
                    display: flex;
                    flex-direction: column;
                   .form-part-1 {
                    display: flex;
                    flex-direction: column;
                   } 

                   .form-part-2 {
                    display: flex;
                    flex-direction: column;
                    margin-left: 0px;

                    .button {
                       margin: 10px auto;
                    }
                   }
                }
            }
           
        }

    }
}
}

</style>

