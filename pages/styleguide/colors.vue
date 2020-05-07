<script>

  export default {
     layout: 'styleguide',
     data: function() {
      return {
        colors : [
          {
            category: "Grays",
            items: [
            { name: "gray-25", hex: "#F9FAFC" },
            { name: "gray-50", hex: "#F5F6F9" },
            { name: "gray-100", hex: "#E9ECF1" },
            { name: "gray-150", hex: "#DEE1E8" },
            { name: "gray-200", hex: "#CED3DE" },
            { name: "gray-300", hex: "#A8AFBE" },
            { name: "gray-400", hex: "#959DAC" },
            { name: "gray-500", hex: "#737C8D" },
            { name: "gray-600", hex: "#576175" },
            { name: "gray-700", hex: "#414959" },
            { name: "gray-800", hex: "#2B303B" },
            { name: "gray-900", hex: "#15181F" }
            ]
          },
          {
            category: "Primary colors",
            items: [
            { name: "blue-200", hex: "#D5E0F6" },
            { name: "blue-500", hex: "#427CF0" },
            { name: "blue-800", hex: "#003399" },
            ]
          },
          {
            category: "Secondary greens",
            items: [
            { name: "green-200", hex: "#D5F6EB" },
            { name: "green-500", hex: "#37C898" },
            { name: "green-800", hex: "#009966" },
            ]
          },
          {
            category: "Secondary turquoises",
            items: [
            { name: "turquoise-200", hex: "#D5F6F3" },
            { name: "turquoise-500", hex: "#40CBBD" },
            { name: "turquoise-800", hex: "#00998A" },
            ]
          },
          {
            category: "Secondary yellows",
            items: [
            { name: "yellow-200", hex: "#FEF4CD" },
            { name: "yellow-500", hex: "#EEB902" },
            { name: "yellow-800", hex: "#B18902" },
            ]
          },
          {
            category: "Secondary dark blues",
            items: [
            { name: "dark-blue-200", hex: "#6A759F" },
            { name: "dark-blue-500", hex: "#263261" },
            { name: "dark-blue-800", hex: "#0B1437" },
            ]
          },
          {
            category: "Secondary light blues",
            items: [
            { name: "light-blue-200", hex: "#DDF7FD" },
            { name: "light-blue-500", hex: "#ACEEFD" },
            { name: "light-blue-800", hex: "#00B3DB" },
            ]
          },
          {
            category: "Secondary reds",
            items: [
            { name: "red-200", hex: "#F6D5D5" },
            { name: "red-500", hex: "#D34D4D" },
            { name: "red-800", hex: "#990000" },
            ]
          },
        ],
      }
    }
  }

</script>

<template>

  <div>
    <h1 class="c-h1">Colors</h1>

    <div v-for="(category, index) in colors" :key="index">
      <h2 class="c-h2">{{category.category}}</h2>
      <ul class="c-styleguide-color-swatch-list">
        <li class="c-styleguide-color-swatch" v-for="(item, index) in category.items" :key="index">
          <div class="c-styleguide-color-swatch__self" :style="'background:'+item.hex"></div>
          <span class="c-styleguide-color-swatch__line1">{{item.name}}<br></span>
          <span class="c-styleguide-color-swatch__line2">{{item.hex}}</span>
        </li>
      </ul>
    </div>


  </div>

</template>
