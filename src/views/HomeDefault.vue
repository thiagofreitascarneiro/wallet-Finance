<template>
    <div>
        <section name="/home/">
            <HomeView/>
        </section>

        <section name="/home/services">
            <ServicesView/>
        </section>

        <section name="/home/developers">
            <DevelopersView/>
        </section>
    </div>
   
</template>

<script>
import HomeView from './HomeView.vue';
import ServicesView from './ServicesView.vue';
import DevelopersView from './DevelopersView.vue';

export default {
    name: 'HomeDefault',

    components: { 
        HomeView,
        ServicesView,
        DevelopersView,
    }
}
</script>

<style>

</style>