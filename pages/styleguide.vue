<script>
    import 'prismjs'

    import styleguideTree from '~/components/styleguide/styleguideTree.vue'

    export default {
        components: {
            styleguideTree,
        }
    }

</script>

<template>
  <div class="c-styleguide">
    <styleguideTree />
    <div class="c-styleguide__content">
      <nuxt />
    </div>
  </div>
</template>

<style >
  body, html {
    max-width: none;
  }
</style>
