<template>
  <ul>
    <li v-for="message in messages" :key="message">
      <span :data-message="message">
        {{ message }}
      </span>

      <button :data-remove-message-in-list="message" @click="removeMessage(message)">
        Remover
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "MessageList",

  props: ["messages"],

  methods: {
    removeMessage(message) {
      this.$emit('messageWasRemoved', message);
    }
  }
};
</script>