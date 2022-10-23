<template>
  <div>
    <new-message-form @send="addMessage" />
    <message-list :messages="messages" @messageWasRemoved="removeMessage" />
  </div>
</template>

<script>
import NewMessageForm from "./components/NewMessageForm";
import MessageList from './components/MessageList';

export default {
  name: "App",

  components: {
    NewMessageForm,
    MessageList
  },

  data() {
    return {
      messages: []
    }
  },

  methods: {
    addMessage(text) {
      this.messages.unshift(text)
    },

    removeMessage(text) {
      const index = this.messages.findIndex(message => message === text);

      this.messages.splice(index, 1);
    }
  }
};
</script>