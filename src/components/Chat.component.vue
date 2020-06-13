<template>
  <div class="chat">
    <h2 class="teal-text">Chat {{chatter}}</h2>
  </div>
</template>
<script>
export default {
  name: "Chat",
  data() {
    return {};
  },
  methods: {},
  props: ["chatter"]
};
</script>