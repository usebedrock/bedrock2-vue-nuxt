<script>

    import Prism from 'vue-prism-component'

    export default {
      components: {
          Prism
      },
      props: {
          typeStyles: Array,
          showCode: Boolean
      }
    }
</script>

<template>

    <ul class="c-styleguide-typography-sample-list">
      <li class="c-styleguide-typography-sample" v-for="(item, index) in typeStyles" :key='index'>
          <p class="c-styleguide-typography-sample__element">{{ item.name }}</p>
          <div v-html="item.code"></div>
          <template v-if="showCode">
            <prism language="html">{{item.code}}</prism>
          </template>
      </li>
    </ul>

</template>

<style scoped>

    h1, h2, h3, h4 {
        margin: 0;
    }

</style>

