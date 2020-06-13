<template>
  <div class="welcome container">
    <!-- <Navbar /> -->
    <div class="card">
      <div class="card-content center-align">
        <h3 class="teal-text">Welcome</h3>
        <form @submit.prevent="enterChat">
          <div class="field">
            <label for="name">Enter Your Name :</label>
            <input v-model="chatter" name="name" placeholder="name" type="text" />
            <p class="red-text" v-if="feedback">{{feedback}}</p>
          </div>
          <div class="field">
            <button class="btn btn-large teal" type="submit">Enter Chat</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/layouts/Navbar.component";
export default {
  name: "Welcome",
  data() {
    return {
      chatter: null,
      feedback: null
    };
  },
  methods: {
    enterChat() {
      if (this.chatter) {
        this.$router.push({
          name: "Chat",
          params: {
            chatter: this.chatter
          }
        });
        this.feedback = null;
      } else {
        this.feedback = "please enter your name!";
      }
    }
  },
  components: { Navbar }
};
</script>

<style >
.welcome {
  max-width: 400px;
  margin-top: 100px;
}
</style>
