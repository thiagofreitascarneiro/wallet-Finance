<template>
    <section class="container-services">
        <div class="services-content-title">
            <h2>Get actionable insights from Portfolio in 3 steps</h2>

            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                sed diam nonumy eirmod <br/> tempor invidunt ut labore et dolore 
                magna aliquyam erat, sed diam voluptua.</p>
        </div>
        <div class="services-steps">
           <div class="stepe-1">
                <picture>
                    <source src="../../public/images/Ellipse-1.png?t=3">
                    <img src="../../public/images/Ellipse-1.png?t=3" alt="">  
                </picture>
                <h3>
                    portfolio insights  
                </h3>
                <p>
                    get powerful insights with <br/> your portoflio.
                </p>
           </div> 
           <div class="stepe-2">
                <picture>
                    <source src="../../public/images/Ellipse-2.png?t=2">
                    <img src="../../public/images/Ellipse-2.png?t=2" alt="">  
                </picture>
                <h3>
                    powerful APIs 
                </h3>
                <p>
                    We have the most powerful Apis <br/>
                    in real time.
                </p>
           </div>  
           <div class="stepe-3">
                <picture>
                    <source src="../../public/images/Ellipse-3.png?t=1">
                    <img src="../../public/images/Ellipse-3.png?t=1" alt="">  
                </picture>
                <h3>
                    Stocks price in real-time 
                </h3>
                <p>
                    Stocks price in real-time atualizing <br/> your portfolio.
                </p>
           </div> 
        </div>

        <div class="products">
            <div class="products-stock">
                <picture class="products-stock-image">
                    <source src="../../public/images/stock-price.png?t=3">
                    <img src="../../public/images/stock-price.png?t=3" alt="">
                </picture>
                <div class="products-stock-text">
                    <h2>Stock market in real time</h2>
                    <p>A centralized platform that integrates <br/>
                        hundreds stock market.</p>
                </div>
            </div>
            <div class="products-portfolio">
                <div class="products-portfolio-text">
                    <h2>Stock market in real time</h2>
                    <p>build an investment portfolio and follow <br/>
                        it wherever you want.</p>
                </div>
                <picture class="products-portfolio-image">
                    <source src="../../public/images/portfolio.png?t=3">
                    <img src="../../public/images/portfolio.png?t=3" alt="">
                </picture>
            </div>
        </div>
    </section>

    
</template>

<script>

export default {
    name: 'ServicesView',
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/global";
.container-services {
    width: 100%;
    height: 1668px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .services-content-title {
        display: flex;
        text-align: center;
        margin-top: 180px;
        flex-direction: column;
        h2 {
            font-family: $font;
            font-style: normal;
            font-weight: 700;
            font-size: 38px;
            line-height: 40px;
            margin-bottom: 24px;
            color: $colorTextBlack;
           
        }
       

        p {
            font-family: $fontText;
            font-style: normal;
            font-weight: 500;
            font-size: $fontSizeText;
            line-height: 24px;
            color: $colorTextGrey;
        }
    }
    .services-steps {
        display: flex;
        align-items: center;
        margin-top: 45px;
        .stepe-1 {
            align-items: center;
            text-align: center;
            padding: 20px;
            img {
                margin-bottom: 16px;
            }
            h3 {
                font-family: $font;
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 24px;
                color: $colorTextBlack;
            }
            p {
                font-family: $fontText;
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                color: $colorTextGrey;
            }
        }
        .stepe-2 {
            align-items: center;
            text-align: center;
            padding: 20px;
            img {
                margin-bottom: 16px;
            }
            h3 {
                font-family: $font;
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 24px;
                color: $colorTextBlack;
            }
            p {
                font-family: $fontText;
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                color: $colorTextGrey;
            }
        }
        .stepe-3 {
            align-items: center;
            text-align: center;
            padding: 20px;
            img {
                margin-bottom: 16px;
            }
            h3 {
                font-family: $font;
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 24px;
                color: $colorTextBlack;
            }
            p {
                font-family: $fontText;
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                color: $colorTextGrey;
            }
        }
    }

    .products {
        display: flex;
        flex-direction: column;
        margin-top: 120px;
        .products-stock {
            display: flex;
            .products-stock-image {

            }

            .products-stock-text {
                margin-top: 160px;
                h2 {
                    font-family: $font;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 32px;
                    line-height: 40px;
                    color: $colorTextBlack;
                }

                p {
                    font-family: $fontText;
                    font-style: normal;
                    font-weight: 500;
                    font-size: $fontSizeText;
                    line-height: 24px;
                    color: $colorTextGrey;
                    margin-top: 24px;
                }
            }
        }
        .products-portfolio {
            display: flex;
            .products-portfolio-image {
                img {
                    width: 500px;
                }
            }

            .products-portfolio-text {
                margin-top: 160px;
                h2 {
                    font-family: $font;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 32px;
                    line-height: 40px;
                    color: $colorTextBlack;
                }

                p {
                    font-family: $fontText;
                    font-style: normal;
                    font-weight: 500;
                    font-size: $fontSizeText;
                    line-height: 24px;
                    color: $colorTextGrey;
                    margin-top: 24px;
                }
            }
        }
    }
}

@media(max-width: $mobile) {
    .container-services {
   
    .services-content-title {
        margin-top: 70px;
        h2 {
            
        }

        p {
           
        }
    }
    .services-steps {
        flex-direction: column;
        .stepe-1 {
           
            img {
             
            }
            h3 {
                
            }
            p {
                
            }
        }
        .stepe-2 {
           
            img {
                
            }
            h3 {
                
            }
            p {
                
            }
        }
        .stepe-3 {
            
            img {
                
            }
            h3 {
                
            }
            p {
                
            }
        }
    }

    .products {
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        text-align: center;
        .products-stock {
            display: flex;
            flex-direction: column;
            .products-stock-image {
                order: 2;
                img {
                    max-width: 20vh;
                }
            }

            .products-stock-text {
                margin-top: 30px;
                order: 1;
                h2 {
                   
                }

                p {
                    
                }
            }
        }
        .products-portfolio {
            display: flex;
            flex-direction: column;
            .products-portfolio-image {
                img {
                    max-width: 20vh;
                }
            }

            .products-portfolio-text {
                margin-top: 30px;
                h2 {
                   
                }

                p {
                   
                }
            }
        }
    }
}
}

</style>