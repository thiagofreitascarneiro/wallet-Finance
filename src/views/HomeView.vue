<template>
  <section class="container-home">
    <div class="home-content">
      <div class="content-right">
        <h1>
          Your Porfolio<br/>
          with real-time analytics
        </h1>
        <p>Harness the potential of Big Data Analytics & Cloud Services <br/>
            and become a data-driven organization with Needle tail</p>
        <button class="button">start free trial</button>
      </div>
      <div class="content-left only-desk">
        <picture>
          <source src="../../public/images/home-photo.png?t=3">
          <img src="../../public/images/home-photo.png?t=3" alt="">
        </picture>
      </div> 
    </div>
  </section>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    
  }
 
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/global";

.container-home {
width: 100%;
height: 696px;
background: $black;

  .home-content {
    display: flex;
    justify-content: space-between;
    .content-right {
      padding-top: 200px;
      padding-left: 150px;
    h1 {
      font-family: $font;
      font-style: normal;
      font-weight: 700;
      font-size: 60px;
      line-height: 48px;
      color: $cor2;
      margin-bottom: 24px;
    }

    p {
      font-family: $fontText;
      font-style: normal;
      font-weight: 500;
      font-size: $fontSizeText;
      line-height: 24px;
      color: $colorTextWhite;
      margin-bottom: 30px;
    }
  }
  .content-left {
    padding-top: 100px;
    padding-right: 150px;
      img {
 
      }
  }
}

}

@media(max-width:$mobile), (orientation:portrait) {
  .container-home {
    height: 396px;

  .home-content {
    display: flex;
    flex-direction: column;
    text-align: center;
    .content-right {
      padding-top: 80px;
      padding-left: 0px;
    h1 {
      font-size: 30px;
    }

    p {
      font-size: 17px;
    }
    .button {
      width: 150px;
      font-size: 15px;
    }
  }
  .content-left {
      padding-top: 40px;
      padding-right: 0px;
      img {
          max-width: 30vh;
      }
  }
}

}
}

</style>
