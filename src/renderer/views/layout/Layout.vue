<template>
  <div class="app-wrapper" :class="classObj">
    <navbar></navbar>
    <sidebar style="position: absolute"></sidebar>
    <div class="main-container" style="height: 100%;overflow: auto">
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
  /*eslint-disable*/
// import { Navbar, Sidebar, AppMain } from './components'
import { AppMain } from './components'
import Navbar from './components/myNavbar'
import Sidebar from './components/Sidebar/myIndex'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  mixins: [ResizeMixin],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    },
    listenSidebar() {
      return this.$store.getters.sidebar.opened
    }
  },
  watch: {
    listenSidebar(a, b) {
      if (this.$store.getters.sidebar.opened) {
        // $("#content").animate({left: "0px", paddingLeft: "0", marginLeft: '250px'}, 150)
        $(".main-container").removeClass('collapsed')
        $(".main-container").animate({left: "0px", paddingLeft: "0", marginLeft: '250px'}, 150)
      } else {
        // $("#content").animate({left: "0px", paddingLeft: "0", marginLeft: '10px'}, 150)
        $(".main-container").addClass('collapsed')
        $(".main-container").animate({left: "0px", paddingLeft: "0", marginLeft: '10px'}, 150)
      }
      // $('#sidebar').toggleClass('collapsed')
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
