<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddres }}
      </li>
      <button @click="$emit('on-delete',id)">Delete</button>
    </ul>
  </li>
</template>

<script>
export default {
  emits:['onDelete'],
  props:[

    "name",
    "phoneNumber",
    "emailAddres",
    "id"

  ],
  data() {
    return {

      detailsAreVisible: false,

    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
};
</script>