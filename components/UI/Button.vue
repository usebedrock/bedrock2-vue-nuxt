<script>
  export default {
    props: {
      layout: {
        type: String,
        default: "text"
      },
      theme: {
        type: String,
        default: "tertiary"
      },
      href: {
        type: String
      },
      block: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<!-- Let the href prop define whether to render <a> or <button> -->
<template>
  <component :is="href ? 'a' : 'button'" class="c-button" :class="['c-button--'+ layout, 'c-button--'+ theme, block ? 'c-button--block' : '' ]" :href='href'>
    <slot></slot>
  </component>
</template>
