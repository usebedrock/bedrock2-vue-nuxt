<script>
    import prototypeNav from "~/components/prototype/prototypeNav"
    export default {
      data: function() {
          return {
            navActive: false
          }
      },

      components: {
        prototypeNav
      },

      methods: {
        toggleSidebar: function() {
          this.navActive = !this.navActive;
        }
      }
    }
</script>

<template>
  <div class="br-prototype-wrapper" v-on:keyup.ctrl.77="toggleSidebar" v-on:keyup.ctrl.66="toggleSidebar" tabindex="-1">
    <div class="br-prototype-wrapper__content" :class='{ "br-prototype-wrapper__content--navOpen" : navActive }'>
      <nuxt />
    </div>
    <div class="br-prototype-wrapper__nav" v-if="navActive">
      <prototypeNav @toggled="toggleSidebar" />
    </div>
  </div>
</template>


<style lang="scss">

  .br-prototype-wrapper {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: row-reverse;
  }

  .br-prototype-wrapper__content {
    flex: 0 1 100%;
  }

  .br-prototype-wrapper__content main {
    margin: 0 auto;
    max-width: 50rem;
  }

  .br-prototype-wrapper__content--navOpen main {
    margin: 0 calc(50vw - 25rem) 0 calc(50vw - 52rem);
  }

  .br-prototype-wrapper__nav {
    z-index: 3000;
    margin-top: -4.8rem;
    width: 32rem;
    height: 100vh;
    position: sticky;
    top: 0;
    overflow: scroll;
    background: #FFF;
    padding: 2.4rem;
    box-shadow: 0 0 0.8rem rgba(0,0,0,0.15);
  }

</style>
