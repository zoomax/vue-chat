<template>
  <div class="chat">
    <h2 class="teal-text">Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
          <li v-for="(message , index) in messages" :key="index">
            <span class="teal-text">{{message.name}}</span>
            <span class="grey-text text-darken-3">{{message.content}}</span>
            <span class="time grey-text">{{message.timestamp}}</span>
          </li>
        </ul>
        <div class="card-action">
          <NewMessage :chatter="chatter" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NewMessage from "@/components/NewMessage.component";
import db from "@/utils/db.config";
import moment from "moment";
export default {
  name: "Chat",
  data() {
    return {
      messages: []
    };
  },
  methods: {},
  props: ["chatter"],
  components: {
    NewMessage
  },
  created() {
    console.log("created life-cycle-hock");
    const ref = db.collection("messages").orderBy("timestamp");
    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === "added") {
          this.messages.push({
            id: change.doc.id,
            content: change.doc.data().content,
            name: change.doc.data().name,
            timestamp: moment(change.doc.data().timestamp).format("lll")
          });
        }
      });
    });
  }
};
</script>
<style scoped>
li {
  text-align: left;
  margin-top: 20px;
  border-bottom: rgba(202, 202, 202, 0.445) solid 1px;
}
li span {
  font-size: 16px;
}
span.time {
  display: block;
  font-size: 14px;
}
.messages {
  max-height: 300px;
  overflow: auto;
}

.messages::-webkit-scrollbar {
  width: 3px;
}
.messages::-webkit-scrollbar-track {
  background: #ddd;
}
.messages::-webkit-scrollbar-thumb {
  background: #aaa;
}
</style>