<template>
    <section class="container-developers">
        <div class="developers-content">
            <picture class="logo-developers">
                <source src="../../public/images/Vector-logo.png?t=3">
                <img src="../../public/images/Vector-logo.png?t=3" alt="">    
            </picture>
            <h2>
                "What I love about Qubly is the easy way we can collaborate even if there is a lot <br/>
                of people involved in the process"
            </h2>
            <div class="ceo-developers">
                <div class="developer-front-end">
                    <picture>
                        <source src="../../public/images/Profile-front.png?t=4">
                        <img src="../../public/images/Profile-front.png?t=4" alt="">  
                    </picture>
                    <p>
                        Thiago Carneiro <br/>CEO - Front-end engineer
                    </p>
                </div>
                <div class="developer-front-backend"> 
                    <picture>
                        <source src="../../public/images/Profile-back.png?t=5">
                        <img src="../../public/images/Profile-back.png?t=5" alt="">  
                    </picture>
                    <p>
                        Guillaume Cabane <br/>CEO - Back-end engineer
                    </p>
                </div>
            </div>
           
        </div>
    </section>
  
</template>

<script>
export default {
    name: 'DevelopersView',

}
</script>

<style lang="scss" scoped>
@import "../assets/scss/global";

.container-developers {
    width: 100%;
    height: 730.5px;
    display: flex;
    text-align: center;
    justify-content: center;
    background: linear-gradient(175.54deg, #f6ffd8 25.81%, #e3fff8 96.38%); opacity: 0.47;
    transform: skewY(-8deg);
    margin-top: 50px;
    .developers-content {
        margin-top:150px;
        transform: skewY(8deg);
        h2 {
            font-family: $font;
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 32px;
            color: $colorTextBlack;  
        }
        .logo-developers {
            img {
                margin-bottom: 50px;
            }
           
        }
        .ceo-developers {
            display: flex;
            text-align: center;
            justify-content: center;
            margin-top: 32px;

            .developer-front-end {
                img {

                }

                p {
                    font-family: $fontText;
                    font-style: normal;
                    font-weight: 900;
                    font-size: 16px;
                    line-height: 24px;
                    margin-top: 20px;
                }
            }

            .developer-front-backend {
                margin-left: 80px;
                img {

                }

                p {
                    font-family: $fontText;
                    font-style: normal;
                    font-weight: 900;
                    font-size: 16px;
                    line-height: 24px;
                    margin-top: 20px;
                }
            }
        }
    }
}

@media(max-width:$mobile) {
    .container-developers {
    
    .developers-content {
       
        h2 {
            
        }
        .logo-developers {
            img {
                
            }
           
        }
        .ceo-developers {
            flex-direction: column;

            .developer-front-end {
                img {

                }

                p {
                    
                }
            }

            .developer-front-backend {
                margin-left: 0px;
                margin-top: 20px;
                img {

                }

                p {
                    
                }
            }
        }
    }
} 
}

</style>