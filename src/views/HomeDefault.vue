<template>
    <div>
        <section name="/home/">
            <NavBar/>
        </section>

        <section name="/home/" id="home">
            <HomeView/>
        </section>

        <section name="/home/services" id="services">
            <ServicesView/>
        </section>

        <section name="/home/about" id="about">
            <AboutClient/>
        </section>

        <section name="/home/developers" id="developers">
            <DevelopersView/>
        </section>

        <section name="/home/footer">
            <FooterView/>
        </section>
    </div>
   
</template>

<script>
import HomeView from './HomeView.vue';
import ServicesView from './ServicesView.vue';
import DevelopersView from './DevelopersView.vue';
import FooterView from './FooterView.vue';
import AboutClient from './AboutClient.vue';
import NavBar from '../components/NavBar.vue';

export default {
    name: 'HomeDefault',
    data() {
        return {

        }
    },

    components: { 
        HomeView,
        ServicesView,
        AboutClient,
        DevelopersView,
        FooterView,
        NavBar,
    }
}
</script>

<style>

</style>