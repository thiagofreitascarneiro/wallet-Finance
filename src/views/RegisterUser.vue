<template>
    <section class="container-register">
        <div class="register-content">
            <form>
               
                <label for="nome">Nome</label>
                <input id="nome" name="nome" type="text" v-model="nome">

                <label for="email">Email</label>
                <input id="email" name="email" type="email" v-model="email">

                <label for="senha">Senha</label>
                <input id="senha" name="senha" type="password" v-model="senha">

                <label for="cep">Cep</label>
                <input id="cep" name="cep" type="text" v-model="cep" @keyup="preencherCep">

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
                

            </form>
        </div>
    </section>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../assets/scss/global";

form {
          display: flex;
          margin-top:35px;
          max-width: 300px;
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

</style>