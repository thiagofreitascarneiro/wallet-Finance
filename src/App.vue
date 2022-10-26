<template>
  <div>
    <NavBar/>
    <main id="main">
      <transition mode="out-in">
        <router-view></router-view> 
      </transition>
    </main> 
  </div>
</template>


<script>
import NavBar from '@/components/NavBar.vue'


export default {
  components: {
    NavBar,
    
  }
}
</script>


<style>



* {
  box-sizing: border-box;
}

ul {
  list-style: none;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter {
  transition: translate3d(0, -20px, 0);
}

.v-leave-to {
  transform: translate3d(0, 20px, 0);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}

</style>
