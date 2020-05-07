<script>

    export default {
        data: function() {
            return {
                introduction : [
                    {
                        name: "Introduction",
                        url: "/styleguide/"
                    }
                ],
                staticDocsTree : [
                    {
                        name: "Colors",
                        url: "/styleguide/colors"
                    },
                    {
                        name: "Typography",
                        url: "/styleguide/typography"
                    },
                    {
                        name: "Icons",
                        url: "/styleguide/icons"
                    },
                ],
                componentTree : [
                    {
                        name: "Avatar",
                        url: "/styleguide/avatar"
                    },
                    {
                        name: "Buttons",
                        url: "/styleguide/buttons"
                    },
                ]
            }
        }
    }

</script>

<template>
    <div class="c-styleguide__navigation">
        <div class="c-styleguide__logo"><a href="./index">
          App name
        </a></div>
        <ul class="c-styleguide__navigation-list">
            <li v-for="(item, index) in introduction" :key="index" class="c-styleguide__nav-item">
                <nuxt-link :to="item.url">{{item.name}}</nuxt-link>
            </li>
        </ul>
        <h4 class="c-styleguide__navigation-title">Basics</h4>
        <ul class="c-styleguide__navigation-list">
            <li v-for="(item, index) in staticDocsTree" :key="index" class="c-styleguide__nav-item">
                <nuxt-link :to="item.url">{{item.name}}</nuxt-link>
            </li>
        </ul>
        <h4 class="c-styleguide__navigation-title">Components</h4>
        <ul class="c-styleguide__navigation-list">
            <li v-for="(item, index) in componentTree" :key="index" class="c-styleguide__nav-item">
                <nuxt-link :to="item.url">{{item.name}}</nuxt-link>
            </li>
        </ul>
    </div>
</template>
