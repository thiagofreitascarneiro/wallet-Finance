<template>
  <div class="container-home-user">
    <!-- <SideBar/> -->
    <h1>Home User</h1>
  </div>
</template>

<script>
// import SideBar from '../../components/SideBar.vue'

export default {
    name: 'UserHome',
    components: {
        // SideBar
  }
    
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/global";

    .container-home-user {
        display: flex;
        h1 {
            margin-left: 20px;
         }
    }

</style>