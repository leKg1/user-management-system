<template>
  <div v-if="show" class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2>User Details</h2>
      <div class="user-details">
        <!-- User details displayed here -->
        <p><strong>ID:</strong> {{ userDetails.id }}</p>
        <p><strong>Name:</strong> {{ userDetails.name }}</p>
        <p><strong>Signup Timestamp:</strong> {{ userDetails.signup_ts }}</p>
        <p>
          <strong>Web URL:</strong>
          <a :href="userDetails.web_url" target="_blank">{{
            userDetails.web_url
          }}</a>
        </p>
        <!-- Tastes, check if property exists -->
        <div v-if="userDetails.tastes">
          <strong>Tastes:</strong>
          <ul>
            <li v-if="userDetails.tastes.wine">
              Wine: {{ userDetails.tastes.wine }}
            </li>
            <li v-if="userDetails.tastes.cheese">
              Cheese: {{ userDetails.tastes.cheese }}
            </li>
            <li v-if="userDetails.tastes.cabbage">
              Cabbage: {{ userDetails.tastes.cabbage }}
            </li>
          </ul>
        </div>
        <p><strong>Delay:</strong> {{ userDetails.delay ? "Yes" : "No" }}</p>
        <p><strong>Created At:</strong> {{ userDetails.created_at }}</p>
        <p><strong>Amount:</strong> {{ userDetails.amount }}</p>
        <p><strong>Currency:</strong> {{ userDetails.currency }}</p>
        <p><strong>Hours:</strong> {{ userDetails.hours }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    userDetails: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
/* Modal and content styles */
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.user-details p {
  margin: 5px 0;
}

.user-details ul {
  list-style-type: none;
  padding: 0;
}

.user-details ul li {
  margin-left: 20px;
}
</style>
