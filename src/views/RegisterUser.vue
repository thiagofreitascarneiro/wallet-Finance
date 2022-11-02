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
                <button class="button-transparent">
                    <router-link to="/login">
                        Log In
                    </router-link>
                </button>
           </div>
           <div class="content-register">
                <h2>Open your account</h2>
                <p>fill the form</p>
                <div class="form-register">
                    <form>
                        <div class="form-part-1">
                            <label for="nome" style="margn-left:50px">Nome</label>
                            <input id="nome" name="nome" type="text" v-model="nome">

                            <label for="email">Email</label>
                            <input id="email" name="email" type="email" v-model="email">

                            <label for="senha">Senha</label>
                            <input id="senha" name="senha" type="password" v-model="senha">

                            <label for="senha">Senha</label>
                            <input id="senha" name="senha" type="password" v-model="senha">

                            <label for="cep">Cep</label>
                            <input id="cep" name="cep" type="text" v-model="cep" @keyup="fillZipCode">

                        </div>
                        <div class="form-part-2">
                            <label for="rua">Rua</label>
                            <input id="rua" name="rua" type="text" v-model="rua">

                            <label for="numero">Numero</label>
                            <input id="numero" name="numero" type="text" v-model="numero">

                            <label for="bairro">Bairro</label>
                            <input id="bairro" name="bairro" type="text" v-model="bairro">

                            <label for="cidade">Cidade</label>
                            <input id="cidade" name="cidade" type="text" v-model="cidade">

                            <label for="estado">Estado</label>
                            <input id="estado" name="estado" type="text" v-model="estado">

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
// import mapFilds from '../../services/helpers.js'
import getZipCode from '../../services/services.js'

export default {
    name: 'RegisterUser',
    data() {
        return {

        }
    },

    // computed: {
    //     ...mapFilds({
    //         fields: ["name", "email", "street", 
    //         "password", "zipcode", "number", "district", 
    //         "city", "state" ],
    //         base: "usuario",
    //         mutation: ""
    //     })
    // },

    components: {
        NavBar 
    },

    methods: {
        fillZipCode() {
            const cep = this.cep.replace(/\D/g, "");
            if(cep.length == 8) {
                getZipCode(cep).then(response => {
                    console.log(response)
                    this.street = response.data.logradouro
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/global";

.container-register {
    display: flex;
    justify-content: center;
    margin-top: 150px;
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

