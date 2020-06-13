<template>
  <div class="new_message">
    <form @submit.prevent="addMessage">
      <div class="field">
        <label for="new-message">Add Message</label>
        <input
          type="text"
          name="new-message"
          v-model="message"
          placeholder="Type Your Message Here"
        />
        <p class="red-text" v-if="feedback">{{feedback}}</p>
      </div>
    </form>
  </div>
</template>
<script>
import db from "../utils/db.config";
export default {
  name: "NewMessage",
  data() {
    return {
      message: null,
      feedback: null
    };
  },
  methods: {
    addMessage() {
      if (this.message) {
        let msg = {
          content: this.message,
          name: this.chatter,
          timestamp: Date.now()
        };
        console.log(msg);
        db.collection("messages")
          .add(msg)
          .then((snapshot, options) => {
            this.message = null;
          })
          .catch(err => console.log(err.message));
      } else {
        this.feedback = "please type a message first ";
      }
    }
  },
  props: ["chatter"]
};
</script>