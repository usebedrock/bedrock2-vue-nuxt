<script>

  export default {
     layout: 'styleguide',
     data: function() {
      return {
        icons : [
          { name: "grid" },
          { name: "folder" },
          { name: "users" },
          { name: "file" },
          { name: "message" },
          { name: "arrow-left" },
          { name: "more" },
          { name: "chevron-down" },
          { name: "chevron-right" },
          { name: "bar-chart" },
          { name: "bell" },
          { name: "slider" },
          { name: "search" },
          { name: "menu" },
          { name: "filter" },
          { name: "close" },
          { name: "log-out" },
          { name: "clock" },
          { name: "check" },
          { name: "plus" },
          { name: "briefcase" },
          { name: "map" },
          { name: "phone" },
          { name: "mail" },
          { name: "trash" }
        ],
      }
    }
  }

</script>

<template>

  <div >
    <h1 class="c-h2">Icons</h1>

    <ul class="c-styleguide-icon-list">
      <li v-for="item in icons" :key="item.name">
        <Icon :icon='item.name' size="24"/>
        <span>{{item.name}}</span>
      </li>
    </ul>

  </div>

</template>
