<template>
  <div class="m-sidebar">
    <m-multi-select :data="data" :search.sync="search" />
    <m-project-card
      v-for="f in projectListFilter"
      :key="`card-${f.properties.id}`"
      :project="f.properties.project"
    />
  </div>
</template>

<script>
import MProjectCard from './MProjectCard'
import MMultiSelect from './MMultiSelect'

export default {
  name: 'MSidebar',
  components: {
    MProjectCard,
    MMultiSelect
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      search: ''
    }
  },
  computed: {
    projectListFilter() {
      // only show project whose string match the title
      return this.data.features.filter(p =>
        p.properties.project.Title.toLowerCase().includes(
          this.search.toLowerCase()
        )
      )
    }
  }
}
</script>

<style lang="scss">
.m-sidebar {
  position: relative;
  background: #f1f1f1;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.2);
  overflow-y: scroll;
  height: 100vh;
  z-index: 2;
}

@media only screen and (max-width: 767px) {
  .m-sidebar {
    height: 40vh;
  }
}
</style>
