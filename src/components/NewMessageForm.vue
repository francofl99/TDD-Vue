<template>
  <div>
    <input
      type="text"
      data-test="messageText"
      v-model="inputText"
    />
  </div>

  <button
      data-test="sendButton"
      @click="send"
    >
      Send
  </button>
</template>

<script>
export default {
  name: "NewMessageForm",

  data() {
    return {
      inputText: ''
    }
  },

  methods: {
    send() {
      this.$emit("send", this.inputText);
      this.inputText = '';
    }
  }
};
</script>