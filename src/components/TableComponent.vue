<template>
  <div class="table-container">
    <UserDetailsModal
      :show="showModal"
      :userDetails="selectedUser"
      @close="closeModal"
    />
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Signup Timestamp</th>
          <th>Web URL</th>
          <th>Wine Taste</th>
          <th>Cheese Taste</th>
          <th>Cabbage Taste</th>
          <th>Delay</th>
          <th>Amount</th>
          <th>Currency</th>
          <th>Hours</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user.id"
          @contextmenu.prevent="handleRightClick(user)"
        >
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.signup_ts }}</td>
          <td>
            <a :href="user.web_url" target="_blank">{{ user.web_url }}</a>
          </td>
          <td>{{ user.tastes.wine }}</td>
          <td>{{ user.tastes.cheese }}</td>
          <td>{{ user.tastes.cabbage }}</td>
          <td>{{ user.delay ? "Yes" : "No" }}</td>
          <td>{{ user.amount }}</td>
          <td>{{ user.currency }}</td>
          <td>{{ user.hours }}</td>
          <td>{{ user.created_at }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import UserDetailsModal from "./UserDetailsModal.vue";

export default {
  data() {
    return {
      users: [
        // {
        //   id: 1,
        //   user_id: "2302c47b-76b8-4197-b8b4-be9aece02775",
        //   name: "John Doe",
        //   signup_ts: "2019-06-01T12:22:00",
        //   web_url: "https://google.com",
        //   tastes: {
        //     wine: 9,
        //     cheese: 7,
        //     cabbage: 1,
        //   },
        //   delay: true,
        //   created_at: "2023-12-08T11:43:47.086444",
        //   amount: 20.01,
        //   currency: "USD",
        //   hours: 2,
        // },
        // {
        //   id: 1,
        //   user_id: "2cab1e85-1f1f-4c9b-a1aa-e0ad13c3f185",
        //   name: "John Doe",
        //   signup_ts: "2019-06-01T12:22:00",
        //   web_url: "https://google.com",
        //   tastes: {
        //     wine: 9,
        //     cheese: 7,
        //     cabbage: 1,
        //   },
        //   delay: true,
        //   created_at: "2023-12-08T11:44:05.100726",
        //   amount: 20.01,
        //   currency: "USD",
        //   hours: 2,
        // },
        // {
        //   id: 1,
        //   user_id: "0506f96e-c285-4563-8dcb-0825cd324c7d",
        //   name: "John Doe",
        //   signup_ts: "2019-06-01T12:22:00",
        //   web_url: "https://google.com",
        //   tastes: {
        //     wine: 9,
        //     cheese: 7,
        //     cabbage: 1,
        //   },
        //   delay: true,
        //   created_at: "2023-12-08T11:44:06.408207",
        //   amount: 20.01,
        //   currency: "USD",
        //   hours: 2,
        // },
        // {
        //   id: 1,
        //   user_id: "350dd242-6b5b-4520-bdb9-b7e5d1e2dcbe",
        //   name: "John Doe",
        //   signup_ts: "2019-06-01T12:22:00",
        //   web_url: "https://google.com",
        //   tastes: {
        //     wine: 9,
        //     cheese: 7,
        //     cabbage: 1,
        //   },
        //   delay: true,
        //   created_at: "2023-12-08T11:44:33.062327",
        //   amount: 20.01,
        //   currency: "USD",
        //   hours: 2,
        // },
        // {
        //   id: 1,
        //   user_id: "fd7c9238-5c0d-4e54-8ca0-692d50a94b50",
        //   name: "John Doe",
        //   signup_ts: "2019-06-01T12:22:00",
        //   web_url: "https://google.com",
        //   tastes: {
        //     wine: 9,
        //     cheese: 7,
        //     cabbage: 1,
        //   },
        //   delay: true,
        //   created_at: "2023-12-08T11:44:55.653915",
        //   amount: 20.01,
        //   currency: "USD",
        //   hours: 2,
        // },
      ],
      showModal: false,
      selectedUser: {},
    };
  },
  components: {
    UserDetailsModal,
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get(
          "https://fast-api-callback01-b241282b4db1.herokuapp.com/users"
        );
        this.users = response.data;
      } catch (error) {
        console.error("Error:", error);
      }
    },

    handleRightClick(user) {
      this.selectedUser = user;
      this.showModal = true;
    },

    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style>
.table-container {
  max-width: 100%;
  overflow-x: auto;
  margin: 20px 0;
}

table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

table,
th,
td {
  border: 1px solid #ddd;
}

th,
td {
  padding: 8px;
}

th {
  background-image: linear-gradient(to right, #0062e6, #33aeff);
  color: white;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #ddd;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
