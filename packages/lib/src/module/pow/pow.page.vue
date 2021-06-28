<template>
  <div>
    <button @click="pow">POW</button>
    <pre>
      {{ puissance }}
    </pre>
  </div>
</template>
<script>
import powStore from './pow.store'

export default {
  computed: {
    puissance() {
      return this.$store.getters['pow/getPuissance']
    }
  },
  methods: {
    pow() {
      this.$store.dispatch('pow/powTow')
    }
  },
  created() {
    if (this.$store.hasModule('pow')) {
      this.$store.unregisterModule('pow')
    }
    this.$store.registerModule('pow', powStore)
  }
}
</script>
