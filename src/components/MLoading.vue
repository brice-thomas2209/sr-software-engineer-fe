<template>
  <transition name="fade">
    <section class="m-loading" v-show="isLoading">
      <a-spin class="spin" />
    </section>
  </transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MLoading',
  computed: {
    ...mapState(['isLoading'])
  }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.m-loading {
  background: rgba(255, 255, 255, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;

  .spin {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
