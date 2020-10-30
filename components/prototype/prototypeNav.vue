<script>
    import pageTree from "~/components/prototype/prototypePageTree"
    export default {
        components: {
          pageTree
        },
        methods: {
          toggle: function() {
            this.$emit('toggled');
          }
        }
    }
</script>

<template>
  <div>
    <h1 class="h4">Prototype navigation</h1>
    <p class="u-text-small">Press Ctrl + M to toggle this navigation or <a class="c-link" @click.prevent="toggle">click here.</a></p>
    <pageTree />
  </div>
</template>
