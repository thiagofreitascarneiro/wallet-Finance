<template>
  <section class="container-footer">
      <picture class="content-footer-logo">
          <source src="../../public/images/logo.png?t=4">
          <img src="../../public/images/logo.png?t=4" alt="">  
      </picture>
      <div class="content-footer">
        <p>Privacy Policy</p>
        <p>Terms and Conditions</p>
        <p>Contact Us</p>
      </div>
  </section>
</template>

<script>
export default {
    name: 'FooterView'
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/global";

.container-footer {
  margin-top: 100px;
  width: 100%;
  height: 100px;
  background-color: $black;
  
  .content-footer-logo {
    justify-content: flex-start;
    img {
      max-width: 250px;
      padding: 10px;
    }
  }
  .content-footer {
    display: flex;
    justify-content: flex-end;
    p {
      font-family: $fontText;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 100%; 
      color: $colorTextWhite;
      margin-right: 20px;
    }
  }
}

@media(max-width:$mobile) {
  .container-footer {
  
  
  .content-footer-logo {
   
    img {
      max-width: 150px;
      
    }
  }
  .content-footer {
    
    p {
      margin-left: 10px;
    }
  }
}
}

</style>