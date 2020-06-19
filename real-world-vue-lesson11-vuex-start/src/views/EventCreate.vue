<template>
  <div>
    <h1> Create an Event, {{ user.name }} </h1>
    <p> this event was {{ user.id }} </p>
    <p>{{ getEventById(2) }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
      ...mapGetters( ['getEventById']),
      ...mapState(['user', 'categories'])
  }
}
</script>
