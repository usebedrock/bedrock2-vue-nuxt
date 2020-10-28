<template>

  <div class="c-styleguide-sample">
    <div class="c-styleguide-sample__heading">
      <h3 class="c-h3" :id='id'>{{ name }}</h3>
      <a :href='`#${id}`'>#</a>
    </div>

    <div v-html="docs" class="c-content"></div>

    <div class="c-styleguide-sample__view">
      <div :class="`slot-wrapper slot-wrapper-${order}`">
        <slot></slot>
      </div>
    </div>

    <div class="c-button-toolbar">
      <button class="c-button c-styleguide-button" @click="toggleCode">Toggle code</button>
    </div>

    <div class="c-styleguide-sample__code" v-if="showCode">
      <prism>{{ code || html }}</prism>
    </div>

  </div>

</template>

<script>
import beautify from 'beautify'
import Prism from 'vue-prism-component'
import {kebabCase} from 'lodash'

export default {
  components: {
    Prism
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    docs: {
      type: String,
      default: ''
    },
    order: {
      type: Number,
      default: 1
    },
    code: {
      type: String,
      default: ''
    },
  },
  data: function () {
    return {
      showCode: false,
      html: ''
    }
  },
  methods: {
    toggleCode: function () {
      this.showCode = !this.showCode;
    },
    getSlotHtml() {
      const slotWrapper = this.$el.querySelector(".slot-wrapper");

      if (slotWrapper) {
        const html = slotWrapper.innerHTML;
        return beautify(html, {format: 'html'});
      }

      return '';
    }
  },
  computed: {
    id() {
      return kebabCase(this.name);
    }
  },
  mounted() {
    this.html = this.getSlotHtml();
  }
}

</script>
