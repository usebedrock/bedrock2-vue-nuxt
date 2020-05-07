<script>
  export default {
    created() {
        this.$router.options.routes.forEach(route => {
            this.items.push({
                name: route.name
                , path: route.path
            })
        })
    }
    , data() {
        return {
            items: []
        }
    }
  }
</script>
<template>
  <div>

    <ul class="c-bordered-list c-bordered-list--small">
      <li><nuxt-link to="/styleguide">Styleguide</nuxt-link></li>
    </ul>

    <h2 class="u-text-small u-text-bold">Pages</h2>

    <ul class="c-bordered-list c-bordered-list--small">
      <li v-for="(item,index) in items" :key="index">
        <nuxt-link :to="item.path">{{item.name}}</nuxt-link>
      </li>
    </ul>

  </div>
</template>
