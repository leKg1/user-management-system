<template>
  <div class="form-container">
    <div v-if="message.content" :class="`message ${message.type}`">
      {{ message.content }}
    </div>
    <form @submit.prevent="handleSubmit" class="data-form">
      <!-- Name Field -->
      <div class="form-group">
        <label for="name">Name:</label>
        <input
          v-model="formData.name"
          type="text"
          id="name"
          placeholder="Name"
          required
        />
      </div>

      <!-- Signup Timestamp Field -->
      <div class="form-group">
        <label for="signup_ts">Signup Timestamp:</label>
        <input
          v-model="formData.signup_ts"
          type="text"
          id="signup_ts"
          placeholder="YYYY-MM-DD HH:mm"
          required
        />
      </div>

      <!-- Web URL Field -->
      <div class="form-group">
        <label for="web_url">Web URL:</label>
        <input
          v-model="formData.web_url"
          type="url"
          id="web_url"
          placeholder="https://example.com"
          required
        />
      </div>

      <!-- Tastes Fields -->
      <div class="form-group">
        <label for="wine">Wine Taste (0-10):</label>
        <input
          v-model.number="formData.tastes.wine"
          type="number"
          id="wine"
          min="0"
          max="10"
        />
      </div>
      <div class="form-group">
        <label for="cheese">Cheese Taste (0-10):</label>
        <input
          v-model.number="formData.tastes.cheese"
          type="number"
          id="cheese"
          min="0"
          max="10"
        />
      </div>
      <div class="form-group">
        <label for="cabbage">Cabbage Taste (0-10):</label>
        <input
          v-model="formData.tastes.cabbage"
          type="text"
          id="cabbage"
          placeholder="0-10"
        />
      </div>

      <!-- Delay Field -->
      <div class="form-group">
        <label for="delay">Delay:</label>
        <input v-model="formData.delay" type="checkbox" id="delay" />
      </div>

      <!-- Amount Field -->
      <div class="form-group">
        <label for="amount">Amount:</label>
        <input
          v-model.number="formData.amount"
          type="number"
          id="amount"
          placeholder="Amount"
        />
      </div>

      <!-- Currency Field -->
      <div class="form-group">
        <label for="currency">Currency:</label>
        <input
          v-model="formData.currency"
          type="text"
          id="currency"
          placeholder="Currency"
        />
      </div>

      <!-- Hours Field -->
      <div class="form-group">
        <label for="hours">Hours:</label>
        <input
          v-model.number="formData.hours"
          type="number"
          id="hours"
          placeholder="Hours"
        />
      </div>

      <!-- Submit Button -->
      <button type="submit" class="submit-button" :disabled="isSubmitting">
        Save
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        name: "",
        signup_ts: "",
        web_url: "",
        tastes: { wine: 0, cheese: 0, cabbage: "" },
        delay: false,
        amount: 0,
        currency: "",
        hours: 0,
      },
      message: {
        content: "",
        type: "", // 'success' or 'error'
      },
      isSubmitting: false, // Tracks the submission state
    };
  },
  methods: {
    async handleSubmit() {
      this.isSubmitting = true;
      try {
        await axios.post(
          "https://fast-api-callback01-b241282b4db1.herokuapp.com/user",
          this.formData
        );
        this.showMessage("Data submitted successfully!", "success");
        this.resetForm();
      } catch (error) {
        this.showMessage("An error occurred during submission.", "error");
        console.error("Error:", error);
      } finally {
        this.isSubmitting = false;
      }
    },
    resetForm() {
      this.formData = {
        name: "",
        signup_ts: "",
        web_url: "",
        tastes: { wine: 0, cheese: 0, cabbage: "" },
        delay: false,
        amount: 0,
        currency: "",
        hours: 0,
      };
    },
    showMessage(content, type) {
      this.message.content = content;
      this.message.type = type;
      setTimeout(() => {
        this.message.content = "";
      }, 3000); // Message will disappear after 3 seconds
    },
  },
};
</script>

<style>
.form-container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.data-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input[type="text"],
.form-group input[type="number"],
.form-group input[type="url"],
.form-group input[type="checkbox"],
.form-group input[type="date"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.submit-button {
  padding: 10px 20px;
  background-image: linear-gradient(to right, #0062e6, #33aeff);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-weight: bold;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-image: linear-gradient(to right, #0056b3, #2a8fd6);
}

.submit-button:disabled {
  background-image: linear-gradient(to right, #ccc, #ddd);
  cursor: not-allowed;
}

.message {
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  text-align: center;
  color: white;
}

.success {
  background-color: #4caf50; /* Green */
}

.error {
  background-color: #f44336; /* Red */
}
</style>
