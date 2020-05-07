<script>
  export default {
      props: {
          tagVariant: String,

          tag: {
              type: String,
              default: null
          },

          href: {
              type: String,
              default: '#'
          },

          imgSrc: {
              type: String,
              default: 'http://placehold.it/400x300'
          },

          imgAlt: {
              type: String,
              default: 'Placeholder'
          },

          small: {
              type: Boolean,
              default: false
          }
      }
  }
</script>

<template>
  <a class="c-card"  :href='href' :class="[small ? 'c-card--small' : '']">
    <img class="c-card__image" :src='imgSrc' :alt='imgAlt'/>
    <Tag v-if="tag" :variant='tagVariant'>{{tag}}</Tag>
    <div class="c-card__text">
        <slot></slot>
    </div>
  </a>
</template>
