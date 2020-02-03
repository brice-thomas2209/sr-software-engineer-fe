<template>
  <a-select
    mode="multiple"
    placeholder="Start typing to filter the list below"
    class="m-multi-select"
    v-model="selection"
    @search="onSearch"
    @blur="onBlur"
  >
    <a-select-option
      v-for="f in data.features"
      :key="f.properties.project.Title"
    >
      {{ f.properties.project.Title }}
    </a-select-option>
  </a-select>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'MMultiSelect',
  props: {
    data: {
      type: Object,
      required: true
    },
    search: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      previousSelection: []
    }
  },
  computed: {
    selection: {
      get() {
        if (!Object.entries(this.$store.state.selectedProjects).length) return

        let selectedProjectTitles = []
        for (const value of Object.values(this.$store.state.selectedProjects)) {
          if (value.selected) {
            selectedProjectTitles.push(value.title)
          }
        }
        return selectedProjectTitles
      },
      set(newValue) {
        for (const [key, value] of Object.entries(
          this.$store.state.selectedProjects
        )) {
          if (value.selected && !newValue.includes(value.title)) {
            this.setProjectSelection({
              projectId: key,
              selectionState: false
            })
          } else if (!value.selected && newValue.includes(value.title)) {
            this.setProjectSelection({
              projectId: key,
              selectionState: true
            })
          }
        }
      }
    }
  },
  methods: {
    ...mapMutations(['setProjectSelection']),
    onSearch(value) {
      this.$emit('update:search', value)
    },
    onBlur() {
      this.$emit('update:search', '')
    }
  }
}
</script>

<style lang="scss">
.m-multi-select {
  width: 100%;
  margin: 20px 0;
}
</style>
