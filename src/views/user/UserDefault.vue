<template>
  <div>
     <SideBar/>
     <transition mode='out-in'>
			<router-view></router-view>
		</transition>
  </div>
</template>

<script>
import SideBar from '../../components/SideBar.vue'

export default {
name: 'UserDefault',
    components: {
        SideBar
  }
}
</script>


<style lang="scss" scoped>
@import "../../assets/scss/global";

</style>