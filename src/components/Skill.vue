<template>
  <div class="flex justify-between mb-2">
    <h3>{{ name }}</h3>
    <Icon icon="star" :level="stars" />
  </div>
</template>
<script>
import Icon from '@/components/Icon.vue'
export default {
  props: ['name', 'stars'],
  components: {
    Icon,
  },
}
</script>
