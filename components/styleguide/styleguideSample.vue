<script>

    import beautify from 'beautify'

    export default {
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
            // Does the component have a Vue.js implementation?
            vueImp: {
                type: String,
                default: ''
            },
        },
        data: function() {
          return {
            showHTML: false,
            showVue: false
          }
        },
        methods: {
            toggleHTML: function() {
              console.log('Toggling HTML block');
              this.showHTML = !this.showHTML;
            },
            toggleVue: function() {
              console.log('toggling Vue.js block');
              this.showVue = !this.showVue;
            }
        },
        filters: {
          kebabcase: function(value) {
            if (!value) return ''
            value = value.toString()
            return value.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
                        .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
                        .replace(/( )/g, '-')
                        .toLowerCase();
          }
        },
        mounted() {

            // Make sure we have context for "this"
            let vm = this;

            if (this.$el.getElementsByClassName("slot-wrapper-"+vm.order).length) {
              // Grab HTML from the resulting page
              var rawStr = this.$el.getElementsByClassName("slot-wrapper-"+vm.order)[0].innerHTML;

              // Find the right code block
              let codeBlock = document.getElementsByClassName("code-sample")[vm.order-1];

              // Insert the code, beautifying it using external package, and convert it to entities (replace function)
              codeBlock.innerHTML = beautify(rawStr, {format: 'xml'}).replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
                return '&#' + i.charCodeAt(0) + ';';
              });
            }

        }
    }

</script>

<template>

    <div class="c-styleguide-sample">
        <div class="c-styleguide-sample__heading">
            <h3 class="c-h3" :id='name|kebabcase'>{{ name }}</h3>
            <!-- Todo compute name as kebab-case and place hash link -->
            <a :href='"#"+name|kebabcase'>#</a>
        </div>

        <div v-html="docs" class="c-content"></div>

        <div class="c-styleguide-sample__view">
            <div :class="'slot-wrapper slot-wrapper-'+order"><slot></slot></div>
        </div>

        <div class="c-button-toolbar">
          <button class="c-button c-styleguide-button" @click="toggleVue" v-if="vueImp">Show Vue.js implementation</button>
          <button class="c-button c-styleguide-button" @click="toggleHTML">Show HTML</button>
        </div>

        <!-- /Does the component have a Vue.js implementation? Only show button if that is the case-->
        <template v-if="vueImp">
          <div class="c-styleguide-sample__code" :class='{ "u-hide" : !showVue }'>
              <pre class="language-html"><code>{{vueImp}}</code></pre>
          </div>
        </template>

        <!-- As a fallback, show the HTML implementation -->
        <div class="c-styleguide-sample__code" :class='{ "u-hide" : !showHTML }'>
            <pre class="language-html code-sample"><code>
                Code sample not loaded. Please check the order attribute on your styleguideSample component.
            </code></pre>
        </div>

    </div>

</template>
