<template>
    <div>
        <section name="/home/">
            <HomeView/>
        </section>

        <section name="/home/services">
            <ServicesView/>
        </section>
    </div>
   
</template>

<script>
import HomeView from './HomeView.vue';
import ServicesView from './ServicesView.vue';

export default {
    name: 'HomeDefault',

    components: { 
        HomeView,
        ServicesView,
    }
}
</script>

<style>

</style>