<template>
    <section class="container-home">
        <div class="content-customer">
            <h2>Customer opnion about our services.</h2>
            <div class="about-customer">
                <div class="customer-1">
                    <div class="description-customer">
                        <p>“Buyer buzz partner network disruptive 
                        non-disclosure agreement business”</p>
                    </div>
                    <div class="data-customers">
                        <picture>
                            <source src="../../public/images/Ellipse-dumbledore.png?t=5">
                            <img src="../../public/images/Ellipse-dumbledore.png?t=5" alt="">  
                        </picture>
                        <div class="customer-about">
                            <p class="name-customer">Albus Dumbledore</p>
                            <p class="position-customer">Manager @Howarts</p>
                        </div>
                       
                    </div>

                </div>
                <div class="customer-2">
                    <div class="description-customer">
                        <p>“Learning curve infrastructure value proposition 
                            advisor strategy user experience hypotheses investor.”
                        </p>
                    </div>
                    <div class="data-customers">
                        <picture>
                            <source src="../../public/images/Ellipse-snape.png?t=5">
                            <img src="../../public/images/Ellipse-snape.png?t=5" alt="">  
                        </picture>
                        <div class="customer-about">
                            <p class="name-customer">Severus Snape</p>
                            <p class="position-customer">Manager @Slytherin</p>
                        </div>
                       
                    </div>

                </div>
                <div class="customer-3">
                    <div class="description-customer">
                        <p>“Release facebook responsive web design business model 
                            canvas seed money monetization.”</p>
                    </div>
                    <div class="data-customers">
                        <picture>
                            <source src="../../public/images/Ellipse-harry.png?t=5">
                            <img src="../../public/images/Ellipse-harry.png?t=5" alt="">  
                        </picture>
                        <div class="customer-about">
                            <p class="name-customer">Harry Potter</p>
                            <p class="position-customer">Team Leader @Gryffindor</p>
                        </div>
                       
                    </div>

                </div>            
            </div>
        </div>

    </section>
  
</template>

<script>
export default {
    name: 'AboutClient',
    components: {

    }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/global";

.container-home {
    width: 100%;
    height: 700px;
    background: $black;

    .content-customer {
        display: flex;
        text-align: center;
        justify-content: center;
        flex-direction: column;
        h2 {
            margin-top: 100px;
            color: $white;
            font-family: $font;
            font-weight: 400;
            font-size: 48px;
            line-height: 72px;
            
        }     

        .about-customer {
            display: flex;
            justify-content: center;
            align-items: center;
            
            .customer-1 {
                width: 350px;
                height: 322px;
                background: #FFFFFF;
                box-shadow: 0px 2px 32px $cor2;
                border-radius: $borderRadius;
                margin-top: 0px;

                .description-customer {
                    p {
                    font-family: $fontText;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 24px;
                    line-height: 36px;
                    margin-left: 40px;
                    margin-right: 40px;
                    margin-top: 40px;
                    }
                }
                .data-customers {
                    display: flex;
                    justify-content: center;
                    margin-top: 30px;
                    .customer-about {
                        flex-direction: column;
                        margin-left: 15px;
                        .name-customer {
                            font-family: $fontText;
                            font-style: normal;
                            font-weight: 700;
                            font-size: 16px;
                            line-height: 32px;
                        }

                        .position-customer {
                            font-family: $fontText;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 15px;
                        }
                    }
                }
            }

            .customer-2 {
                width: 350px;
                height: 394px;
                background: #FFFFFF;
                box-shadow: 0px 2px 32px $cor2;
                border-radius: $borderRadius;
                margin-top: 60px;
                margin-left: 50px;

                .description-customer {
                    p {
                    font-family: $fontText;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 24px;
                    line-height: 36px;
                    margin-left: 40px;
                    margin-right: 40px;
                    margin-top: 40px;
                    }
                }
                .data-customers {
                    display: flex;
                    justify-content: center;
                    margin-top: 30px;
                    .customer-about {
                        flex-direction: column;
                        margin-left: 15px;
                        .name-customer {
                            font-family: $fontText;
                            font-style: normal;
                            font-weight: 700;
                            font-size: 16px;
                            line-height: 32px;
                        }

                        .position-customer {
                            font-family: $fontText;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 15px;
                        }
                    }
                }
            }

            .customer-3 {
                 width: 350px;
                height: 358px;
                background: #FFFFFF;
                box-shadow: 0px 2px 32px $cor2;
                border-radius: $borderRadius;
                margin-top: 20px;
                margin-left: 50px;

                .description-customer {
                    p {
                    font-family: $fontText;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 24px;
                    line-height: 36px;
                    margin-left: 40px;
                    margin-right: 40px;
                    margin-top: 40px;
                    }
                }
                .data-customers {
                    display: flex;
                    justify-content: center;
                    margin-top: 30px;
                    .customer-about {
                        flex-direction: column;
                        margin-left: 15px;
                        .name-customer {
                            font-family: $fontText;
                            font-style: normal;
                            font-weight: 700;
                            font-size: 16px;
                            line-height: 32px;
                        }

                        .position-customer {
                            font-family: $fontText;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 15px;
                        }
                    }
                }
            }
        }
    }
}

@media(max-width:$mobile) {
    .container-home {
    width: 100%;
    height: 800px;
    background: $black;

    .content-customer {
        
        h2 {
            margin-top: 20px;
            font-weight: 400;
            font-size: 32px;
            line-height: 42px;
            
        }     

        .about-customer {
           
            flex-direction: column;
            align-items: center;
            margin-top: 20px;
            .customer-1 {
                width: 250px;
                height: 200px;
                background: #FFFFFF;
                box-shadow: 0px 2px 12px $cor2;
                border-radius: $borderRadius;
                margin-top: 10px;

                .description-customer {
                    p {
                    font-family: $fontText;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 16px;
                    margin-left: 40px;
                    margin-right: 40px;
                    margin-top: 20px;
                    }
                }
                .data-customers {
                    display: flex;
                    justify-content: center;
                    margin-top: 20px;
                    .customer-about {
                        flex-direction: column;
                        margin-left: 15px;
                        .name-customer {
                            font-family: $fontText;
                            font-style: normal;
                            font-weight: 700;
                            font-size: 14px;
                            line-height: 32px;
                        }

                        .position-customer {
                            font-family: $fontText;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 12px;
                            line-height: 15px;
                        }
                    }
                }
            }
            .customer-2 {
                width: 250px;
                height: 200px;
                background: #FFFFFF;
                box-shadow: 0px 2px 12px $cor2;
                border-radius: $borderRadius;
                margin-top: 20px;
                margin-left: 0px;

                .description-customer {
                    p {
                    font-family: $fontText;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 16px;
                    margin-left: 40px;
                    margin-right: 40px;
                    margin-top: 20px;
                    }
                }
                .data-customers {
                    display: flex;
                    justify-content: center;
                    margin-top: 20px;
                    .customer-about {
                        flex-direction: column;
                        margin-left: 15px;
                        .name-customer {
                            font-family: $fontText;
                            font-style: normal;
                            font-weight: 700;
                            font-size: 14px;
                            line-height: 32px;
                        }

                        .position-customer {
                            font-family: $fontText;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 12px;
                            line-height: 15px;
                        }
                    }
                }
            }
            .customer-3 {
                width: 250px;
                height: 200px;
                background: #FFFFFF;
                box-shadow: 0px 2px 12px $cor2;
                border-radius: $borderRadius;
                margin-top: 20px;
                margin-left: 0px;

                .description-customer {
                    p {
                    font-family: $fontText;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 16px;
                    margin-left: 40px;
                    margin-right: 40px;
                    margin-top: 20px;
                    }
                }
                .data-customers {
                    display: flex;
                    justify-content: center;
                    margin-top: 20px;
                    .customer-about {
                        flex-direction: column;
                        margin-left: 15px;
                        .name-customer {
                            font-family: $fontText;
                            font-style: normal;
                            font-weight: 700;
                            font-size: 14px;
                            line-height: 32px;
                        }

                        .position-customer {
                            font-family: $fontText;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 12px;
                            line-height: 15px;
                        }
                    }
                }
            }
        }
    }
}

}

</style>