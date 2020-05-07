import Vue from 'vue'
import { VueHammer } from 'vue2-hammer'
import styleguideSample from '~/components/styleguide/styleguideSample.vue'
Vue.component('styleguideSample', styleguideSample)

// Auto import based on contents of UI folder
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
const requireComponent = require.context(
  '~/components/UI',
  false,
  /[A-Z]\w+\.(vue|js)$/
)
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )
  Vue.component(componentName, componentConfig.default || componentConfig)
})
