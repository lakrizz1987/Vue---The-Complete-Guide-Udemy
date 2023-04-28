<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="learnMore(id)">Learn More</button>
  </li>
</template>

<script>
export default {
  inject:['learnMore'],
  props: ['id', 'topicName', 'description'],
  emits: ['select-topic'],
};
</script>