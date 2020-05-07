<script>
  export default {
    props: {
      initials: {
        type: String,
      },
      imgSrc: {
        type: String,
      },
      size: {
        type: String,
        default: "default"
      }
    }
  }
</script>

<template>
  <div class="c-avatar" :class="['c-avatar--'+ size, imgSrc ? 'c-avatar--image' : 'c-avatar--initials']">
    <img v-if="imgSrc" :src='imgSrc' alt="avatar">
    <span v-else>{{initials}}</span>
  </div>
</template>
