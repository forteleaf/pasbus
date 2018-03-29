<template>
  <div>
    <h1>안녕하세요.</h1>
    <h2>가로가 이상하게 길어지네</h2>
    <div id="tube-map"></div>
  </div>
</template>

<script>
    import * from 'd3'

    export default {
        name: 'BusMain',
        data() {
            return {
                container : this.container,
                width: 1600,
                height: 1000,
                map: '',
                svg: '',
            }
        },
        computed: {
            container() {
                return d3.select('#tube-map')
            }
        },
        mounted: {
            map () {
                d3.tubeMap()
                    .width(width)
                    .height(height)
                    .margin({ top:20, right:20, bottom:40, left:100})
                    .on("click", function(name) {
                        console.log(name)
                    })
            },
            svg () {
                container.select('svg')
            },
        },
        methods: {

        }

    }


</script>

<style>
  svg {
    margin: 25px;
  }
  path {
    fill: none;
    stroke: #76BF8A;
    stroke-width: 3px;
  }
</style>
