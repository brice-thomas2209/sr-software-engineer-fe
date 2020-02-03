<template>
  <a-card
    size="small"
    class="m-project-card custom-style"
    :title="project.Title"
  >
    <a-switch slot="extra" v-model="selected" />
  </a-card>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'MProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    selected: {
      get() {
        if (!Object.entries(this.$store.state.selectedProjects).length) return
        return this.$store.state.selectedProjects[this.project['Project ID']]
          .selected
      },
      set(val) {
        this.setProjectSelection({
          projectId: this.project['Project ID'],
          selectionState: val
        })
      }
    }
  },
  methods: {
    ...mapMutations(['setProjectSelection'])
  }
}
</script>

<style lang="scss">
.m-project-card.custom-style {
  text-align: left;
  margin-top: 5px;

  .ant-card-head-title {
  }
}
</style>
