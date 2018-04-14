<template>
  <body class="fixed-nav sticky-footer" id="page-top">

  <div v-for="section in poemList.sections">

    <div v-if="section.sectionName">
    <b> {{ section.sectionName[0].text }} ( {{ section.sectionName[1].text }} ) </b>
    </div>

    <div v-for="poem in section.poems">
      <router-link :to="{ path: 'PoemPage', query: { poemId: poem.id }}"> {{ poem.poemName[0].text }} ( {{ poem.poemName[1].text }} ) </router-link>
    </div>
  </div>

  </body>
</template>

<script>
import StaticContentService from '@/services/StaticContentService'
require('../assets/css/poem_page.css')

export default {
  data () {
    return {
      poemList: []
    }
  },
  created () {
    this.getPoemList(this.$route.query.listId)
  },
  methods: {
    async getPoemList (listId) {
      const response = await StaticContentService.getPoemList(listId)
      var yamlObject = YAML.parse(response.data)
      this.poemList = yamlObject
      console.log(yamlObject)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
