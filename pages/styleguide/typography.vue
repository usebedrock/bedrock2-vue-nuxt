<script>

  import typographySamples from  '~/components/styleguide/styleguideTypographySamples.vue';

  export default {
    layout: 'styleguide',
    components: {
      typographySamples
    },
    data: function() {
      return {
      checked: true,
      typeStyles: [
        {
          name: "Heading 1",
          code: '<h1 class="c-h1">A first level heading</h1>'
        },
        {
          name: "Heading 2",
          code: '<h2 class="c-h2">A second level heading</h2>'
        },
        {
          name: "Heading 3",
          code: '<h3 class="c-h3">A third level heading</h2>'
        },
        {
          name: "Body",
          code: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>'
        }
      ]
      }
    }
  }

</script>

<template>
  <div>
    <h1 class="c-h1">Typography</h1>
    <div class="c-content">
      <p>Typographic styles used throughout the project.</p>
      <p>Note that any HTML heading can get any class for accessibility and SEO purposes. So it is perfectly possible to style a 2nd level heading as a third level heading or vice versa.</p>
      <p>Please reference the <code>_c-content.scss</code> component.</p>
    </div>

    <typographySamples :typeStyles="typeStyles" :showCode="checked" />

  </div>
</template>

